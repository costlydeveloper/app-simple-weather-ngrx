import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { fadeAnimation } from './library/animation/fade-in-out.animation';
import { I18nSuperclass } from './modules/i18n/superclass/i18n.superclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent extends I18nSuperclass {
  constructor(
    readonly translate: TranslateService,
    readonly store: Store<any>
  ) {
    super(store, translate);
  }

  public getRouterOutletState(outlet: RouterOutlet): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public onRouterOutletActivate(event: any): void {}
}
