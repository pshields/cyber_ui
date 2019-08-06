import {Injectable} from '@angular/core';

import {CyberUiBackend} from '../../backends/interfaces/backend';

import {CyberUiItemEngagementRecord} from './defs/engagement_record';
import {CyberUiGetTimeSinceLastEngagementOptions} from './defs/get_options';
import {CyberUiGetTimeSinceLastEngagementResponse} from './defs/get_response';


// A service for keeping track of when items from various collections were last engaged with
@Injectable({providedIn: 'root'})
export class CyberUiTimeSinceLastEngagementService {

  constructor(
    readonly backend: CyberUiBackend,
  ) {}

  // Returns the engagement record from the backend
  private getEngagementRecord(collectionId: string, itemId: string): CyberUiItemEngagementRecord {
    // TODO actually get this from the backend
    return {
      timestamp: undefined,
    };
  }

  getTimeSinceLastEngagement(options: CyberUiGetTimeSinceLastEngagementOptions): CyberUiGetTimeSinceLastEngagementResponse {
    const record = this.getEngagementRecord(options.collectionId, options.itemId);
    const timestamp = record.timestamp;
    let duration = undefined;
    if (timestamp !== undefined) {
      duration = Date.now() - timestamp;
    }
    return {
      timestamp: timestamp,
      duration: duration,
    };
  }
}
