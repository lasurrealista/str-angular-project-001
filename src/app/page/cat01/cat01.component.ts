import { Component, OnInit } from '@angular/core';
import { CardsComponent } from 'src/app/common/cards/cards.component'

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component extends CardsComponent implements OnInit {

  constructor() { super()}

  ngOnInit(): void {
  }

}
