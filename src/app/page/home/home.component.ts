import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ProductService implements OnInit {

  listFeatured: Product[] = this.list.filter(e => e.featured == true).sort(() => 0.5 - Math.random());
  listNonFeatured: Product[] = this.list.filter(e => e.featured == false).sort(() => 0.5 - Math.random());

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  phrase: string = '';

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
