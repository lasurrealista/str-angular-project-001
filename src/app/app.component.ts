import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';

  constructor(
    private pservice: ProductService
  ) {
    this.pservice.getAll().forEach(
      value => {
        console.log("All Product: " , value);
      }
    )
  }
}

