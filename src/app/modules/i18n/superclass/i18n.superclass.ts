import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Language } from '../language.model';
import { selectLanguage } from '../store/language.selector';

@Injectable()
export abstract class I18nSuperclass {
  currentLanguage$: Observable<Language>;
  translate: TranslateService;

  protected constructor(store: Store<any>, translate: TranslateService) {
    this.translate = translate;
    this.currentLanguage$ = store.pipe(select(selectLanguage));
    this.translate.setDefaultLang('en');
    this.currentLanguage$.subscribe(language => this.translate.use(language));
  }
}
