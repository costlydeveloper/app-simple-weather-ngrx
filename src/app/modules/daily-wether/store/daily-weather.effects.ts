import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IDailyWeatherAPIResponse } from '../daily-weather.model';
import { DailyWeatherService } from '../daily-weather.service';
import {
  DailyWeatherActionType,
  RequestDailyWeatherAction,
  RespondDailyWeatherAction,
} from './daily-weather.actions';

@Injectable()
export class DailyWeatherEffects {
  @Effect()
  requestDailyWeather$: Observable<Action> = this.actions$.pipe(
    ofType<RequestDailyWeatherAction>(
      DailyWeatherActionType.REQUEST_DAILY_WEATHER
    ),
    switchMap((action: RequestDailyWeatherAction) => {
      const { id } = action.payload;

      return this.dailyWeatherService.getDailyCityWeather(id).pipe(
        map((dailyWeatherResponse: IDailyWeatherAPIResponse) => {
          return new RespondDailyWeatherAction({ dailyWeatherResponse });
        })
      );
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dailyWeatherService: DailyWeatherService
  ) {}
}
