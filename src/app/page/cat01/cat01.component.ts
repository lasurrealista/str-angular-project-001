import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../src/app/model/product';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component extends ProductService implements OnInit {

  cat01: Product[] = this.list.filter(item => item.catId === 'cat01').sort(() => 0.5 - Math.random());

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  order: string = '';

  orderItems(event) {
    this.order = (event.target as HTMLInputElement).value;
  }

}
