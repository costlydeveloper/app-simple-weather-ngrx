import { Action } from '@ngrx/store';
import { Language } from '../language.model';

export const enum LanguageActionTypes {
  SET_LANGUAGE = '[LANGUAGE_MODULE] SET_LANGUAGE',
}

export class SetLanguageAction implements Action {
  readonly type: LanguageActionTypes = LanguageActionTypes.SET_LANGUAGE;

  constructor(public payload: Language) {}
}

export type LanguageAction = SetLanguageAction;
