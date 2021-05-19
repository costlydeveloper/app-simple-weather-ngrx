import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageSelectorComponent } from './layout/language-selector/language-selector.component';
import { languageReducer } from './store/language.reducer';
import { languageStateName } from './store/language.state';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule,
    DropdownModule,
    StoreModule.forFeature(languageStateName, languageReducer),
    FormsModule,
  ],
  exports: [LanguageSelectorComponent],
})
export class LanguageModule {}
