import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component extends ProductService implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(http: HttpClient, public productService: ProductService) {
    super(http);
  }
  ngOnInit(): void {
  }

}
