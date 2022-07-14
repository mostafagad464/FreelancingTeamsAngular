import { Pipe, PipeTransform } from '@angular/core';
import { IMessage } from '../_models/imessage';

@Pipe({
  name: 'serachInArray',
  pure: false
})
export class SerachInArrayPipe implements PipeTransform {

  transform(value: IMessage[], fs: string): IMessage[] {
    let result: IMessage[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].name.includes(fs)) {
        result.push(value[i])
      }
    }
    return result;
  }
}
