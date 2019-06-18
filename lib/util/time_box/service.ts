import {Injectable} from '@angular/core';

import {ReplaySubject, Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {ActiveTimeBoxesSnapshot} from './defs/active_time_boxes_snapshot';
import {CancelTimeBoxOptions} from './defs/cancel_time_box_options';
import {CancelTimeBoxResponse} from './defs/cancel_time_box_response';
import {GetCountDownOptions} from './defs/get_count_down_options';
import {StartTimeBoxOptions} from './defs/start_time_box_options';
import {StartTimeBoxResponse} from './defs/start_time_box_response';
import {TimeBox} from './defs/time_box';
import {TimeBoxEvent} from './defs/event';
import {TimeBoxId} from './defs/time_box_id';


// A service for tracking timeboxes
// It's intended to run as a singleton and can handle multiple concurrent timeboxes
@Injectable({
  providedIn: 'root',
})
export class CyberUiTimeBoxService {

  // Counter used to generate time box ids
  private idCounter = 0;

  // The currently active time boxes
  private readonly boxes: TimeBox[] = [];

  // Time box event stream. Used internally for recordkeeping.
  private stream = new ReplaySubject<TimeBoxEvent>(1);

  private activeTimeBoxes = new ReplaySubject<ActiveTimeBoxesSnapshot>(1);

  private getNewTimeboxId(): TimeBoxId {
    // Increment the counter so that next time, it will return a different id
    return this.idCounter++;
  }

  private getTimeBoxById(id: TimeBoxId): TimeBox {
    return this.boxes.find(timeBox => timeBox.id === id);
  }

  private addTimeBox(timeBox: TimeBox) {
    this.boxes.push(timeBox);
  }

  // Handle time box completion (called when the time box duration has elapsed)
  private onTimeBoxComplete(timeBox: TimeBox) {
    // Remove this time box from the boxes list
    this.boxes.splice(this.boxes.indexOf(timeBox));
    // Emit an end event to the stream
    this.stream.next({
      timeBoxId: timeBox.id,
      type: 'end',
    });
  }

  constructor() {
    // Hook into the event stream to power the active time boxes replay subject
    this.stream.subscribe(event => {
      this.activeTimeBoxes.next({boxes: this.boxes});
    });
  }

  // Returns the current active time boxes, as an observable that will change over time
  // as the active time boxes change
  getActiveTimeBoxes(): Observable<ActiveTimeBoxesSnapshot> {
    return this.activeTimeBoxes;
  }

  // Returns an observable counting down to 0 at the desired level of granularity
  // The observed quantity will be a duration in milliseconds
  getCountDown(options: GetCountDownOptions): Observable<number> {
    // Get the time box with the given id
    const timebox = this.getTimeBoxById(options.timeBoxId);
    // Initialize time remaining
    const timeRemaining = timebox.end - Date.now();
    // Determine the period to use
    const period = options.period || 1000;
    // Calculate how many updates will need to be made
    const numUpdates = Math.ceil(timeRemaining / period);
    return timer(0, period)
      // Return the number of ms remaining
      // The final emitted value might be < 0, so we take the max with 0
      // in order to return a final value of 0
      .pipe(map((i: number) => Math.max(timeRemaining - period * i, 0)))
      .pipe(take(numUpdates));
  }

  startTimeBox(options: StartTimeBoxOptions): StartTimeBoxResponse {
    const start = Date.now();
    const timeBox: TimeBox = {
      id: this.getNewTimeboxId(),
      start: start,
      end: start + options.duration
    };
    timeBox.timeoutId = window.setTimeout(() => this.onTimeBoxComplete(timeBox), options.duration);
    // Add this time box to the internal list of active time boxes
    this.addTimeBox(timeBox);
    // Emit a time box start event to the stream
    this.stream.next({
      timeBoxId: timeBox.id,
      type: 'start',
    });
    return {
      timeBoxId: timeBox.id,
    };
  }

  cancelTimeBox(options: CancelTimeBoxOptions): CancelTimeBoxResponse {
    const timebox = this.getTimeBoxById(options.id);
    if (!timebox) {
      return {
        error: `Could not find time box with given id: ${options.id}`
      };
    } else {
      // Remove the scheduled end trigger
      clearTimeout(timebox.timeoutId);
      // Remove the time box from the list of active boxes
      this.boxes.splice(this.boxes.indexOf(timebox));
      // Emit a cancel event to the stream
      this.stream.next({
        type: 'cancel',
        timeBoxId: timebox.id
      });
      return {};
    }
  }

}
