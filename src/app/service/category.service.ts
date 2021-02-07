import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  list: Category[] = [
    { id: 1, name: 'Premium', description: 'Premium cars'},
    { id: 2, name: 'Hot', description: 'Hot cars'},
  ]
  constructor() { }
}
