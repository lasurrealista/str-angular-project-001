import { Injectable } from '@angular/core';

export interface ITableCol {
    key: string,
    text: string,
    editable?: boolean,
  }

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Swindler\'s Paradise';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Category01', link: '/cat01' },
    { text: 'Category02', link: '/cat02' },
  ];

  constructor() { }
}
