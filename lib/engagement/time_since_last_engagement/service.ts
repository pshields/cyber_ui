import {Injectable} from '@angular/core';

import {CyberUiFirestoreBackend} from '../../backends/firestore/backend';

import {CyberUiItemEngagementRecord} from './defs/engagement_record';
import {CyberUiGetTimeSinceLastEngagementOptions} from './defs/get_options';
import {CyberUiGetTimeSinceLastEngagementResponse} from './defs/get_response';


// TODO Document in the appropriate places that some backends may impose restrictions on itemId
// (e.g. max length, prohibited characters, etc.)
// For example, Firestore disallows '/' from appearing in field paths
// Consumers may want to normalize or encode their input to avoid these issues
// And at some point this functionality might be worth adding to Cyber UI
type CyberUiItemEngagementRecordMapping = {[itemId: string]: CyberUiItemEngagementRecord};


// A service for keeping track of when items from various collections were last engaged with
@Injectable({providedIn: 'root'})
export class CyberUiTimeSinceLastEngagementService {

  // A local representation of the last engagements with items
  // The top-level mapping is from collection ids (groupings)
  // to the lower-level mapping from item ids to engagement records
  private state = new Map<string, CyberUiItemEngagementRecordMapping>();

  // The top-level settings document where all of the persisted data lives
  private collection = this.firestoreBackend.firestore
      .collection('settings')
      .doc('cyberUiTimeSinceLastEngagementService')
      .collection('engagementRecords');

  constructor(
    // TODO Move all necessary functionality to implementation-agnostic CyberUiBackend
    readonly firestoreBackend: CyberUiFirestoreBackend
  ) {
    this.collection.stateChanges().subscribe(actions => {
      actions.map(action => {
        console.log(action);
        const collectionId = action.payload.doc.id;
        // If this mapping changed, updated it locally
        if (action.type === 'added' || action.type === 'modified') {
          const mapping = action.payload.doc.data();
          this.state.set(collectionId, mapping);
        } else {
          // The mapping was deleted
          this.state.delete(collectionId);
        }
        console.log(this.state);
      });
    });

  }

  // Returns the engagement record for the requested item from the given collection
  private getEngagementRecord(collectionId: string, itemId: string): CyberUiItemEngagementRecord | undefined {
    const mapping = this.state.get(collectionId);
    return mapping && mapping[itemId];
  }

  getTimeSinceLastEngagement(options: CyberUiGetTimeSinceLastEngagementOptions): CyberUiGetTimeSinceLastEngagementResponse {
    const record = this.getEngagementRecord(options.collectionId, options.itemId);
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
  indicateEngagement(collectionId: string, itemId: string): Promise<void> {
    let engagementRecord = this.getEngagementRecord(collectionId, itemId);
    if (!engagementRecord) {
      engagementRecord = {
        timestamp: undefined
      };
    }
    engagementRecord.timestamp = Date.now();
    const docToUpdate = this.collection.doc(collectionId)
    const update = {
      [itemId]: engagementRecord
    };
    return docToUpdate.update(update).catch(error => {
      // One possible error is that the document doesn't exist yet
      if (error.code === 'not-found') {
        // Go ahead and create the document first
        return docToUpdate.set(update);
      } else {
        console.error(error);
      }
    });
  }
}
