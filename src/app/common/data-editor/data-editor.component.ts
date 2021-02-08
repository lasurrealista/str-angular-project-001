import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { Product } from '../../../../src/app/model/product';
import { ProductService } from '../../../../src/app/service/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  cols: ITableCol[] = this.config.tableCols;
  col: Product = new Product();

  filterKey: string = '';
  filterKeys: string[] = Object.keys(new Product());

  @Output() selectClick: EventEmitter<Product> = new EventEmitter();
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

  onSelectClicked(): void {
    this.selectClick.emit(this.col);
  }

  onUpdateClicked(): void {
    this.updateClick.emit(this.col);
  }

  onDeleteClicked(): void {
    this.deleteClick.emit(this.col);
  }

  constructor(private config: ConfigService, private productService: ProductService, private router:Router) { }

  // Feri verzió
  productList$: Observable<Product[]> = this.productService.getAll();
  onUpdate(product:any):void{this.productService.updateProduct(product).subscribe(e=>alert("Product refreshed!")) }
  onDelete(product:any):void{this.productService.deleteProduct(product).subscribe(e=>alert("Product deleted!"));
  this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation='reload'; this.router.navigate(['/admin'])}

  ngOnInit(): void {
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
}
