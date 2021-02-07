import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../app/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ProductService implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  //listFeatured: Product[] = this.list.filter(e => e.featured == true).sort(() => 0.5 - Math.random());
  //listNonFeatured: Product[] = this.list.filter(e => e.featured == false).sort(() => 0.5 - Math.random());

  constructor(http: HttpClient, public productService: ProductService, public configService: ConfigService) {
    super(http);
  }

  ngOnInit(): void {
  }


}
