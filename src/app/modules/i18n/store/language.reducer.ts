import {
  LanguageAction,
  LanguageActionTypes,
  SetLanguageAction,
} from './language.actions';
import {
  ILanguageModuleState,
  initialLanguageModuleState,
} from './language.state';

export function languageReducer(
  oldState: ILanguageModuleState = initialLanguageModuleState,
  action: LanguageAction
): ILanguageModuleState {
  switch (action.type) {
    case LanguageActionTypes.SET_LANGUAGE: {
      const language = (action as SetLanguageAction).payload;

      const newState: ILanguageModuleState = {
        ...oldState,
        language,
      };

      return newState;
    }
    default:
      return oldState;
  }
}
