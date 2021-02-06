import { Injectable } from '@angular/core';

export interface ITableCol {
    key: string,
    text: string,
    editable?: boolean,
  }

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Swindler\'s Paradise';

  tableCols: ITableCol[] = [
    {key: 'id', text: 'Id', editable: false},
    {key: 'catId', text: 'Category Id', editable: true},
    {key: 'name', text: 'Manufacturer', editable: true},
    {key: 'description', text: 'Model', editable: true},
    {key: 'price', text: 'Price', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'active', text: 'Active', editable: true},
  ];

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Premium', link: '/cat01' },
    { text: 'Hot', link: '/cat02' },
    { text: 'Join the secret club', link: '/cat03' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() { }
}
