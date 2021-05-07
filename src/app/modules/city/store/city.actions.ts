import { Action } from '@ngrx/store';
import { ICity } from '../city.model';

export const enum CityActionType {
  REQUEST_CITIES = '[CITY MODULE] REQUEST_CITIES',
  RESPOND_CITIES = '[CITY MODULE] RESPOND_CITIES',
}

export class RequestCityAction implements Action {
  readonly type: CityActionType = CityActionType.REQUEST_CITIES;
}

export class RespondCityAction implements Action {
  readonly type: CityActionType = CityActionType.RESPOND_CITIES;

  constructor(public payload: { cities: ICity[] }) {}
}

export type CityAction = RequestCityAction | RespondCityAction;
