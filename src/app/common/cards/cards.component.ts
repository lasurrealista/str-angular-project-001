import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService} from 'src/app/service/product.service'
import { ProductPagerComponent} from 'src/app/common/product-pager/product-pager.component'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent extends ProductService implements OnInit {

  listFeatured:Product[] = this.list.filter(e=>e.featured == true);
  listNonFeatured:Product[] = this.list.filter(e=>e.featured == false);

  constructor() { super()}

  ngOnInit(): void {
  }

}
