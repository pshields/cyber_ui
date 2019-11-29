import {Pipe, PipeTransform} from '@angular/core';

import {Observable, timer} from 'rxjs';
import {takeWhile, map, endWith} from 'rxjs/operators';


// Given an expiration time, emits decreasing duration values approximately once per second until the expiration time elapses
@Pipe({name: 'cyberUiDurationCountdown'})
export class CyberUiDurationCountdownPipe implements PipeTransform {

  transform(expires: number): Observable<number> {
    return timer(0, 1000)
      .pipe(
        map(() => Date.now()),
        takeWhile(now => now < expires),
        map(now => expires - now),
        endWith(0),
      );
  }

}
