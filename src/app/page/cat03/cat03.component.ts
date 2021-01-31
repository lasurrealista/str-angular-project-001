import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../src/app/model/product';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component extends ProductService implements OnInit {

  constructor() {
    super();
  }
  ngOnInit(): void {
  }

}
