import {Pipe, PipeTransform} from '@angular/core';


// Formats a duration in milliseconds in a reasonable fashion
@Pipe({name: 'cyberUiDuration'})
export class CyberUiDurationPipe implements PipeTransform {
  transform(duration: number) {
    const hours = Math.floor(duration / 1000 / 60 / 60);
    const minutes = Math.floor((duration / 1000 / 60) % 60);
    const seconds = (Math.floor(duration / 1000) % 60);
    const secondsFmt = seconds.toString().padStart(2, '0');
    if (hours > 0) {
      const minutesFmt = minutes.toString().padStart(2, '0');
      return `${hours}:${minutesFmt}:${secondsFmt}`;
    } else {
      return `${minutes}:${secondsFmt}`;
    }
  }
}
