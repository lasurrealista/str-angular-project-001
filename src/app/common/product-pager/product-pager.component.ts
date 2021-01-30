import { Component, Input, OnInit } from '@angular/core';
import { CardsComponent} from 'src/app/common/cards/cards.component'

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent extends CardsComponent implements OnInit {

  @Input() tabla:CardsComponent
  

  constructor() {super() }

  ngOnInit(): void {
  }

}
