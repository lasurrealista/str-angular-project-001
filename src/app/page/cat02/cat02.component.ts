import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../../src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component extends ProductService implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  cat02: Product[] = this.list.filter(item => item.catId === 'cat02').sort(() => 0.5 - Math.random());
  cat02Filter: Product[] = this.list.filter(item => item.catId === 'cat02');

  constructor(http: HttpClient, public productService: ProductService, public categoryService: CategoryService) {
    super(http);
  }

  ngOnInit(): void {
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.cat02Filter=this.list.filter(item => item.catId === 'cat02').filter(item=>item.name.toLowerCase().includes(this.phrase.toLowerCase()))
  }

  order: string = '';

  orderItems(event) {
    this.order = (event.target as HTMLInputElement).value;
  }
  id: number = 2;
  categoryList: Category[] = this.categoryService.list;
}
