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
    { text: 'Premium', link: '/cat01' },
    { text: 'Hot', link: '/cat02' },
    { text: 'Join the secret club', link: '/cat03' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() { }
}
