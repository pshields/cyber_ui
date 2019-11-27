import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {firebaseKeyEncode} from '../../util/firebase_key_encode';
import {CYBER_UI_SETTINGS_COLLECTION_ID} from '../../settings/constants';

import {CYBER_UI_TIME_SINCE_LAST_ENGAGEMENT_SERVICE_DOC_ID} from './constants';
import {CyberUiItemEngagementRecord} from './defs/engagement_record';
import {CyberUiGetTimeSinceLastEngagementOptions} from './defs/get_options';
import {CyberUiGetTimeSinceLastEngagementResponse} from './defs/get_response';


type CyberUiItemEngagementRecordMapping = {[encodedItemId: string]: CyberUiItemEngagementRecord};


// A Firestore-backed service for keeping track of when items from various namespaces were last engaged with
@Injectable({providedIn: 'root'})
export class CyberUiTimeSinceLastEngagementService {

  // Returns an observable which will emit an item engagement record corresponding to the
  // last engagement with the given thing. If no prior engagement was found, the emitted
  // item engagement record will not have `timestamp` or `duration` properties present.
  getTimeSinceLastEngagement(
    options: CyberUiGetTimeSinceLastEngagementOptions,
  ): Observable<CyberUiGetTimeSinceLastEngagementResponse> {
    return this
      .engagementRecordsCollection
      .doc<CyberUiItemEngagementRecord>(firebaseKeyEncode(options.namespaceId))
      .get()
      .pipe(
        map(snapshot => {
          const response: CyberUiGetTimeSinceLastEngagementResponse = {};
          if (snapshot.exists) {
            response.timestamp = snapshot.get(`${firebaseKeyEncode(options.itemId)}.timestamp`);
            if (response.timestamp) {
              response.duration = Date.now() - response.timestamp;
            }
          }
          return response;
        }),
      );
  }

  // Indicates engagement with the given item in the given namespace
  //
  // Note that because of our choice of Firestore as the backend for this service,
  // the namespaceId and itemId must be no longer than 1,500 bytes UTF-8 encoded
  // For more information, see https://cloud.google.com/firestore/quotas#collections_documents_and_fields
  indicateEngagement(
    // The id of the namespace in which this item exists (max 1,500 bytes UTF-8 encoded)
    namespaceId: string,
    // The item's id (max 1,500 bytes UTF-8 encoded)
    itemId: string,
  ): Promise<void> {
    // Update the timestamp at which this item was last engaged with
    const data = {
      [firebaseKeyEncode(itemId)]: {timestamp: Date.now()}
    };
    return this
      .engagementRecordsCollection
      .doc(firebaseKeyEncode(namespaceId))
      // #set with {merge: true} is used instead of #update because when #update is used,
      // additional characters such as '*' have special meaning and are disallowed in field path expressions
      // The library we're using to encode key names (firebase-key) doesn't escape those additional characters
      .set(data, {merge: true})
      .catch(error => console.error(error));
  }

  // DEPRECATED - will be removed in a future release. Switch to the asynchronous version
  // of this method (getTimeSinceLastEngagement) instead.
  //
  // Attempts to synchronously return the duration since the last engagement with the given thing
  //
  // In order to keep this method synchronous, engagement records are cached locally
  // and the lookups are done locally rather than requiring a lookup over the network.
  //
  // However, this presents the potential for a race condition: consumers might call
  // this method before the the records have been cached locally, resulting in incorrect
  // results.
  //
  // If the time since the last engagement with the item is not known, the applicable
  // property values in the response object will be undefined
  getTimeSinceLastEngagementUnsafe(options: CyberUiGetTimeSinceLastEngagementOptions): CyberUiGetTimeSinceLastEngagementResponse {
    const record = this.getEngagementRecordFromLocalCache(options.namespaceId, options.itemId);
    const timestamp = record && record.timestamp;
    let duration = undefined;
    if (timestamp !== undefined) {
      duration = Date.now() - timestamp;
    }
    return {
      timestamp: timestamp,
      duration: duration,
    };
  }

  // ===========
  // PRIVATE API
  // ===========

  // A local, cached representation of the last engagements with items
  // The top-level mapping is from namespace ids to the lower-level mapping
  // The lower-level mapping is from item ids to engagement records
  private cachedState = new Map<string, CyberUiItemEngagementRecordMapping>();

  // The top-level settings document where all of the persisted data lives
  private engagementRecordsCollection = this
    .firestore
    .collection(CYBER_UI_SETTINGS_COLLECTION_ID)
    .doc(CYBER_UI_TIME_SINCE_LAST_ENGAGEMENT_SERVICE_DOC_ID)
    .collection('engagementRecords');

  constructor(private readonly firestore: AngularFirestore) {
    this.engagementRecordsCollection.stateChanges().subscribe(actions => {
      actions.map(action => {
        const namespaceId = action.payload.doc.id;
        // If this mapping changed, updated it locally
        if (action.type === 'added' || action.type === 'modified') {
          const mapping = action.payload.doc.data();
          this.cachedState.set(namespaceId, mapping);
        } else {
          // The mapping was deleted
          this.cachedState.delete(namespaceId);
        }
      });
    });
  }

  // Returns the engagement record for the requested item from the local cache,
  // or undefined if the specified engagement record could not be found
  private getEngagementRecordFromLocalCache(namespaceId: string, itemId: string): CyberUiItemEngagementRecord | undefined {
    const mapping = this.cachedState.get(namespaceId);
    const encodedItemId = firebaseKeyEncode(itemId);
    return mapping && mapping[encodedItemId];
  }
}
