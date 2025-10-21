import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string | number>, typeOfSort: 'asc' | 'desc' = 'asc')
  {
    if(!value || value.length === 0) return null;

    // due to sort change value input , we don't want to mess up out value 
    // input so we create a copy of it
    let sorted = [...value];

    sorted.sort((a,b) => {
      if(typeOfSort === 'asc')
      {
        return a > b ? 1 : -1;
      }

      return a > b ? -1 : 1;
      });

    return sorted;
  }

}
