import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../_models/team';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], char:string=""): any[] {
    let result :any[] = [];
    for (let i = 0; i < value.length; i++)
    {
      if(value[i].name.toLowerCase().includes(char.toLowerCase()))
      {
        result.push(value[i]);
      }
    }
    return result;
  }

}
