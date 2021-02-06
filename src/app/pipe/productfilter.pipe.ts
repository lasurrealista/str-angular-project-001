import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(list: any[], phrase: string): any[] {
    if (!Array.isArray(list) || !phrase) {
      return list;
    }

    phrase = phrase.toLocaleLowerCase();

    return list.filter((item) => {
      return item.name.toLocaleLowerCase().includes(phrase);
    });

  }
}
