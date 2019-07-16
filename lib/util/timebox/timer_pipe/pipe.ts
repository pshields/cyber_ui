import {Pipe, PipeTransform} from '@angular/core';


// Formats a duration (in milliseconds) as "minutes:seconds" timer
@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(duration: number) {
    const minutes = Math.floor(duration / 1000 / 60);
    const seconds = (Math.floor(duration / 1000) % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
