import { Pipe, PipeTransform } from '@angular/core';
import { Custom_Referendum_Countings } from './types';

@Pipe({
  name: 'countingsfilter'
})
export class CountingsFilterPipe implements PipeTransform {

  transform(items: Custom_Referendum_Countings[], filter: number): any {
    if (!items || !filter) {
      return items;
  }

    return items.filter(q=>q.referendumId === filter);
  }

}
