import { Language } from '../language.model';

export const languageStateName: string = 'language-module';

export interface ILanguageModuleState {
  language: Language;
}

export const initialLanguageModuleState: ILanguageModuleState = {
  language: 'en',
};
