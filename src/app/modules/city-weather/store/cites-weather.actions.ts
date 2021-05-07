import { Action } from '@ngrx/store';
import { ICityWeatherAPIResponse } from '../cites-weather.model';

export const enum CityWeatherActionType {
  REQUEST_CITIES_WEATHER = '[CITY_WEATHER MODULE] REQUEST_CITIES_WEATHER',
  RESPOND_CITIES_WEATHER = '[CITY_WEATHER MODULE] RESPOND_CITIES_WEATHER',
}

export class RequestCitiesWeatherAction implements Action {
  readonly type: CityWeatherActionType =
    CityWeatherActionType.REQUEST_CITIES_WEATHER;

  constructor(public payload: { ids: string }) {}
}

export class RespondCitiesWeatherAction implements Action {
  readonly type: CityWeatherActionType =
    CityWeatherActionType.RESPOND_CITIES_WEATHER;

  constructor(
    public payload: { citiesWeatherResponse: ICityWeatherAPIResponse }
  ) {}
}

export type CityWeatherAction =
  | RequestCitiesWeatherAction
  | RespondCitiesWeatherAction;
