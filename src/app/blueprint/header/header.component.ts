/* tslint:disable */
import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IMenuItem } from './menu-items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  menuItems: IMenuItem[] = [
    {
      route: '/weather',
      name: this.translate.instant('MENU.HOME'),
    },
    {
      route: '/favorites',
      name: this.translate.instant('MENU.FAVORITES'),
    },
  ];
  #subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService) {
    this.#subscription.add(
      this.translate.stream('MENU').subscribe(menu => {
        this.menuItems[0].name = menu['HOME'];
        this.menuItems[1].name = menu['FAVORITES'];
      })
    );
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }
}
