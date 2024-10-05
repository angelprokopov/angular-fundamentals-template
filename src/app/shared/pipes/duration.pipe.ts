import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'duration'
})
// export class DurationPipe {
//     // Add your code here
// }



export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        let hours = Math.floor(value / 60); 
        let minutes = Math.floor(value % 60);
        let hrs = hours>0?'hrs':'hr'

        let result = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')} ${hrs}`;
        return result;
    }
  }
