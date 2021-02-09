import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {
/*
  transform(list: any[], phrase: string): any[] {
    if (!Array.isArray(list) || !phrase) {
      return list;
    }

    phrase = phrase.toLocaleLowerCase();

    return list.filter((item) => {
      return item.name.toLocaleLowerCase().includes(phrase);
    });

  }
*/

  transform(list: any[] | null, key: string,
    phrase: string | number |boolean,
    props?: { count: number} ): any[] | null {
    if (!Array.isArray(list) || !phrase || !key) {
      return list;
    }

    const filtered = list.filter( item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      phrase = ('' + phrase).toLocaleLowerCase();
      return ('' + item[key]).toLocaleLowerCase().includes(phrase);
    });

    if (props?.count) {
      props.count = filtered.length;
    }
    return filtered;
    }
  }
