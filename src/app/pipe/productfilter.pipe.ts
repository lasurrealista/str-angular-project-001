import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(list: any[], key: string, phrase: string): any[] {
    if (!Array.isArray(list) || !phrase || !key) {
      return list;
    }

    phrase = phrase.toLocaleLowerCase();

    return list.filter((item) => {
      return ('' + item[key]).toLocaleLowerCase().includes(phrase);
    });

  }
}
