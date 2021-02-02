import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsort'
})
export class ProductsortPipe implements PipeTransform {

  transform(list: any[], order: string): any[] {
    if (!Array.isArray(list) || !order) {
      return list;
    };

    order = order.toLocaleLowerCase();

    return list.sort((a, b) => {

      if (order == 'price-up') {
        return a.price - b.price;
      } else if (order == 'price-down') {
        return b.price - a.price;
      } else if (order = 'a-z') {
        return a.name.localeCompare(b.name);
      }

    });
  }
}
