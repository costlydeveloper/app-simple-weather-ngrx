/* tslint:disable */
import { Component } from '@angular/core';
import { IMenuItem } from './menu-items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: IMenuItem[] = [
    {
      route: '/weather',
      name: 'Home',
    },
    {
      route: '/favorites',
      name: 'Favorites',
    },
  ];
}
