import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { Product } from '../../../../src/app/model/product';
import { ProductService } from '../../../../src/app/service/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators';

interface IPageBtn {
  page: number;
}

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
  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    tap( products => this.productsProperties.count = products.length )
  );
  onUpdate(product:any):void{this.productService.updateProduct(product).subscribe(e=>alert("Product refreshed!")) }
  onDelete(product:any):void{this.productService.deleteProduct(product).subscribe(e=>alert("Product deleted!"));
  this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation='reload'; this.router.navigate(['/admin'])}

  ngOnInit(): void {
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  productsProperties: {count: number} = {
    count: 0,
  };
  pageSize: number = 10;
  pageStart: number = 1;
  currentPage: number = 1;
  get paginator(): IPageBtn[] {
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.productsProperties.count / this.pageSize && pages.length < 10; i++ ) {
      const page = this.pageStart + i;
      pages.push({page});
    }
    return pages;
  }
  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }
  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

  onPaginate(event: Event, btn: IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
  }

  onStepPage(event: Event, step: number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
  }
}
