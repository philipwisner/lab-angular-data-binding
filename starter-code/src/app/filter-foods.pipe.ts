import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFoods'
})
export class FilterFoodsPipe implements PipeTransform {

  transform(value: any, searchTerms: string): any {
    return value.filter((item)=> {
      return item.name === searchTerms;
    });
  }

}

//filter by input name
