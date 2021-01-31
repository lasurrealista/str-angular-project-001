import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../src/app/model/product';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component extends ProductService implements OnInit {

  cat02: Product[] = this.list.filter(item => item.catId === 'cat02').sort(() => 0.5 - Math.random());

  constructor() {
    super();
  }


  ngOnInit(): void {
  }

}
