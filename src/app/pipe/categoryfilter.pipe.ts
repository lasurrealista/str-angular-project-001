import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(value: any[], cat: number): any[] {
    return value.filter( item => {
      return item['catId'] === cat;
    });
  }
}
