import {Injectable} from '@angular/core';

import {ReplaySubject, Observable, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {ActiveTimeboxesSnapshot} from './defs/active_timeboxes_snapshot';
import {CancelTimeboxOptions} from './defs/cancel_timebox_options';
import {CancelTimeboxResponse} from './defs/cancel_timebox_response';
import {GetCountdownOptions} from './defs/get_countdown_options';
import {StartTimeboxOptions} from './defs/start_timebox_options';
import {StartTimeboxResponse} from './defs/start_timebox_response';
import {Timebox} from './defs/timebox';
import {TimeboxEvent} from './defs/event';
import {TimeboxId} from './defs/timebox_id';
import {AddTimeToTimeboxOptions} from './defs/add_time_to_timebox_options';


// A service for tracking timeboxes
// It's intended to run as a singleton and can handle multiple concurrent timeboxes
@Injectable({
  providedIn: 'root',
})
export class CyberUiTimeboxService {

  // Counter used to generate time box ids
  // Note: starts at 1 instead of 0 to avoid bugs around 0 being falsy
  private idCounter = 1;

  // The currently active time boxes
  private readonly boxes: Timebox[] = [];

  // Time box event stream. Used internally for recordkeeping.
  private stream = new ReplaySubject<TimeboxEvent>(1);

  private activeTimeboxes = new ReplaySubject<ActiveTimeboxesSnapshot>(1);

  private getNewTimeboxId(): TimeboxId {
    // Increment the counter so that next time, it will return a different id
    return this.idCounter++;
  }

  private addTimebox(timebox: Timebox) {
    this.boxes.push(timebox);
  }

  // Handle time box completion (called when the time box duration has elapsed)
  private onTimeboxComplete(timebox: Timebox) {
    // Remove this time box from the boxes list
    this.boxes.splice(this.boxes.indexOf(timebox), 1);
    // Emit an end event to the stream
    this.stream.next({
      timeboxId: timebox.id,
      type: 'end',
    });
  }

  constructor() {
    // Hook into the event stream to power the active time boxes replay subject
    this.stream.subscribe(event => {
      this.activeTimeboxes.next({boxes: this.boxes});
    });
  }

  // Returns the current active time boxes, as an observable that will change over time
  // as the active time boxes change
  getActiveTimeboxes(): Observable<ActiveTimeboxesSnapshot> {
    return this.activeTimeboxes;
  }

  // Returns an observable counting down to 0 at the desired level of granularity
  // The observed quantity will be a duration in milliseconds
  getCountdown(options: GetCountdownOptions): Observable<number> {
    // Get the time box with the given id
    const timebox = this.getTimeboxById(options.timeboxId);
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

  getTimeboxById(id: TimeboxId): Timebox {
    return this.boxes.find(timebox => timebox.id === id);
  }

  startTimebox(options: StartTimeboxOptions): StartTimeboxResponse {
    const start = Date.now();
    const timebox: Timebox = {
      id: this.getNewTimeboxId(),
      start: start,
      end: start + options.duration
    };
    timebox.timeoutId = window.setTimeout(() => this.onTimeboxComplete(timebox), options.duration);
    // Add this time box to the internal list of active time boxes
    this.addTimebox(timebox);
    // Emit a time box start event to the stream
    this.stream.next({
      timeboxId: timebox.id,
      type: 'start',
    });
    return {
      timeboxId: timebox.id,
    };
  }

  cancelTimebox(options: CancelTimeboxOptions): CancelTimeboxResponse {
    const timebox = this.getTimeboxById(options.id);
    if (!timebox) {
      return {
        error: `Could not find time box with given id: ${options.id}`
      };
    } else {
      // Remove the scheduled end trigger
      clearTimeout(timebox.timeoutId);
      // Remove the time box from the list of active boxes
      this.boxes.splice(this.boxes.indexOf(timebox), 1);
      // Emit a cancel event to the stream
      this.stream.next({
        type: 'cancel',
        timeboxId: timebox.id
      });
      return {};
    }
  }

  addTimeToTimebox(options: AddTimeToTimeboxOptions): {} {
    const timebox = this.getTimeboxById(options.id);
    if (!timebox) {
      return {
        error: `Could not find time box with given id: ${options.id}`
      };
    } else {
      // Remove the scheduled end trigger
      clearTimeout(timebox.timeoutId);
      // Calculate the new end time
      timebox.end += options.duration;
      // Set the new end trigger
      timebox.timeoutId = window.setTimeout(() => this.onTimeboxComplete(timebox), timebox.end - Date.now());
      // Emit a modify event to the stream
      this.stream.next({
        type: 'modify',
        timeboxId: timebox.id
      });
      return {};
    }
  }

}
