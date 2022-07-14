import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../_models/team';

@Pipe({
  name: 'searchInTeams'
})
export class SearchInTeamsPipe implements PipeTransform {

  transform(value: Team[], char:string=""): Team[] {
    let result :Team[] = [];
    for (let i = 0; i < value.length; i++)
    {
      if(value[i].name.toLowerCase().startsWith(char.toLowerCase()))
      {
        result.push(value[i]);
      }
    }
    return result;
  }

}
