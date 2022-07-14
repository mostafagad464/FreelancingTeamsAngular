import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInFreelancers'
})
export class SearchInFreelancersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
