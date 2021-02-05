import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ITableCol } from 'src/app/service/config.service';
import { Product } from '../../../../src/app/model/product';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  cols: ITableCol[] = this.config.tableCols;
  col: Product = new Product();

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

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
