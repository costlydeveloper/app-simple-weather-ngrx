import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { NotificationsService } from '../../../library/popups/notifications.service';
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
        }),
        catchError(() =>
          of({
            type: DailyWeatherActionType.RESPONSE_DAILY_WEATHER_ERROR,
          }).pipe(
            tap((resp) => {
              this.notificationsService.evokeToast(
                'Error',
                'API error!',
                DialogLayoutDisplay.DANGER
              );
            })
          )
        )
      );
    })
  );

  constructor(
    private notificationsService: NotificationsService,
    private readonly actions$: Actions,
    private readonly dailyWeatherService: DailyWeatherService
  ) {}
}
