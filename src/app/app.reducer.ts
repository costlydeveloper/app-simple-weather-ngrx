import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

export function debugMetaReducer(
  reducer: ActionReducer<object>
): ActionReducer<object> {
  // @ts-ignore
  return function (oldState: object, action: Action): object {
    const newState = reducer(oldState, action);
    const actionTypeSplit = action.type.split('] ');
    const moduleName =
      actionTypeSplit.length > 1 ? `${actionTypeSplit[0]}]` : '';
    const actionName =
      actionTypeSplit.length > 1 ? `${actionTypeSplit[1]}` : '';

    const logData = {
      prefixColor: `background: #610b0b; color: #cc3333`,
      suffixColor: `background: #610b0b; color: #cc6666`,
      prefixText: `${moduleName}`,
      suffixText: ` ${actionName} `,
    };

    if (actionTypeSplit.length < 2) {
      logData.prefixColor = `color: #961515`;
      logData.suffixColor = '';
      logData.suffixText = '';
      logData.prefixText = `${actionTypeSplit[0]}`;
    }

    if (environment.ngrxLog) {
      console.groupCollapsed(
        `%c update %c${logData.prefixText}%c %c${logData.suffixText}`,
        `color: #961515`,
        `${logData.prefixColor}`,
        ``,
        `${logData.suffixColor}`
      );

      console.log('Old state: ', oldState);
      console.log('Action: ', action);
      console.log('New state: ', newState);
      console.groupEnd();
    }

    return newState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debugMetaReducer];
