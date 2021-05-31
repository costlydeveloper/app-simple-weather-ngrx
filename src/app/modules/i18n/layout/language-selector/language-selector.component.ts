import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { ILanguageDropdown, Language } from '../../language.model';
import { SetLanguageAction } from '../../store/language.actions';
import { selectLanguage } from '../../store/language.selector';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnDestroy {
  languagesDropDown: ILanguageDropdown[];
  selectedLanguage: Language;
  currentLanguage$: Observable<Language>;
  #subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService, private store: Store<any>) {
    this.currentLanguage$ = store.pipe(select(selectLanguage));
    this.languagesDropDown = [
      { name: this.translate.instant('LANG_SELECT.HR'), code: 'hr' },
      { name: this.translate.instant('LANG_SELECT.EN'), code: 'en' },
    ];
    this.#subscription.add(
      this.currentLanguage$.subscribe(lang => {
        this.selectedLanguage = lang;
      })
    );
    this.#subscription.add(
      this.translate.stream('LANG_SELECT').subscribe(menu => {
        this.languagesDropDown[0].name = menu['HR'];
        this.languagesDropDown[1].name = menu['EN'];
      })
    );
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe();
  }

  setLanguage(language: Language) {
    this.store.dispatch(new SetLanguageAction(language));
  }
}
