import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { Language } from '../language.model';
import { ILanguageModuleState, languageStateName } from './language.state';

const selectLanguageModule = createFeatureSelector<ILanguageModuleState>(
  languageStateName
);

export const selectLanguage: Selector<object, Language> = createSelector(
  selectLanguageModule,
  (state: ILanguageModuleState) => state.language
);
