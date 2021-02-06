import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent extends ProductService implements OnInit {

  listFeatured: Product[] = this.list.filter(e => e.featured == true).sort(() => 0.5 - Math.random());
  listNonFeatured: Product[] = this.list.filter(e => e.featured == false).sort(() => 0.5 - Math.random());

  constructor() { super() }

  ngOnInit(): void {
  }

}
