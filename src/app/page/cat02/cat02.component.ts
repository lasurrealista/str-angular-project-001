import { Component, OnInit } from '@angular/core';
import { CardsComponent } from 'src/app/common/cards/cards.component'

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component extends CardsComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
