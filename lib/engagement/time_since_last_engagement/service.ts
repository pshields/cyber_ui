import {Injectable} from '@angular/core';

import {encode as firebaseKeyEncode} from 'firebase-key';

import {CyberUiFirestoreBackend} from '../../backends/firestore/backend';

import {CyberUiItemEngagementRecord} from './defs/engagement_record';
import {CyberUiGetTimeSinceLastEngagementOptions} from './defs/get_options';
import {CyberUiGetTimeSinceLastEngagementResponse} from './defs/get_response';


// TODO Document in the appropriate places that some backends may impose restrictions on itemId
// (e.g. max length, prohibited characters, etc.)
// For example, Firestore disallows '/' from appearing in field paths
// Consumers may want to normalize or encode their input to avoid these issues
// And at some point this functionality might be worth adding to Cyber UI
type CyberUiItemEngagementRecordMapping = {[encodedItemId: string]: CyberUiItemEngagementRecord};


// A service for keeping track of when items from various namespaces were last engaged with
@Injectable({providedIn: 'root'})
export class CyberUiTimeSinceLastEngagementService {

  // A local, cached representation of the last engagements with items
  // The top-level mapping is from namespace ids to the lower-level mapping
  // The lower-level mapping is from item ids to engagement records
  private cachedState = new Map<string, CyberUiItemEngagementRecordMapping>();

  // The top-level settings document where all of the persisted data lives
  private engagementRecordsCollection = this.firestoreBackend.firestore
      .collection('settings')
      .doc('cyberUiTimeSinceLastEngagementService')
      .collection('engagementRecords');

  constructor(
    // TODO Move all necessary functionality to implementation-agnostic CyberUiBackend
    readonly firestoreBackend: CyberUiFirestoreBackend
  ) {
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

  // Returns the time since the last engagement with the given item
  //
  // In order to keep this method synchronous, engagement records are cached locally
  // and the lookups are done locally rather than requiring a lookup over the network
  //
  // If the time since the last engagement with the item is not known, the applicable
  // property values in the response object will be undefined
  getTimeSinceLastEngagement(options: CyberUiGetTimeSinceLastEngagementOptions): CyberUiGetTimeSinceLastEngagementResponse {
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

  // Updates the engagement record for the given item
  indicateEngagement(
    // The identifier of the namespace in which this item exists
    namespaceId: string,
    // The identifier for this item
    itemId: string
  ): Promise<void> {
    // Get the previous engagement record for this item, or a suitable default
    let engagementRecord = this.getEngagementRecordFromLocalCache(namespaceId, itemId);
    if (!engagementRecord) {
      engagementRecord = {
        timestamp: undefined
      };
    }
    // Update the timestamp at which this item was last engaged with
    engagementRecord.timestamp = Date.now();
    const docToUpdate = this.engagementRecordsCollection.doc(namespaceId);
    const encodedItemId = firebaseKeyEncode(itemId);
    const updates = {
      [encodedItemId]: engagementRecord
    };
    return docToUpdate.set(
      updates,
      // #set with {merge: true} is used instead of #update because when #update is used,
      // additional characters such as '*' have special meaning and are disallowed in field path expressions
      // The library we're using to encode key names (firebase-key) doesn't escape those additional characters
      {merge: true}
    ).catch(error => {
      // One possible error is that the document doesn't exist yet
      if (error.code === 'not-found') {
        // Go ahead and create the document first
        return docToUpdate.set(updates);
      } else {
        console.error(error);
      }
    });
  }
}
