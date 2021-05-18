import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { NotificationsService } from '../../../library/popups/notifications.service';
import { ICityWeatherAPIResponse } from '../cites-weather.model';
import { CitesWeatherService } from '../cites-weather.service';
import {
  CityWeatherActionType,
  RequestCitiesWeatherAction,
  RespondCitiesWeatherAction,
} from './cites-weather.actions';

@Injectable()
export class CitesWeatherEffects {
  @Effect()
  requestCities$: Observable<Action> = this.actions$.pipe(
    ofType<RequestCitiesWeatherAction>(
      CityWeatherActionType.REQUEST_CITIES_WEATHER
    ),
    switchMap((action: RequestCitiesWeatherAction) => {
      const { ids } = action.payload;
      return this.cityService.getCitiesWeather(ids).pipe(
        map(
          (citiesWeatherResponse: ICityWeatherAPIResponse) =>
            new RespondCitiesWeatherAction({ citiesWeatherResponse })
        ),
        catchError(() =>
          of({ type: CityWeatherActionType.RESPOND_CITIES_WEATHER_ERROR }).pipe(
            tap(resp => {
              this.notificationsService.evokeToast(
                'Error',
                'API error.',
                DialogLayoutDisplay.DANGER
              );
            })
          )
        )
      );
    })
  );
  /*	@Effect()
  requestCities$: Observable<Action> = this.actions$.pipe(
    ofType<RequestCitiesWeatherAction>(CityWeatherActionType.REQUEST_CITIES_WEATHER),
    switchMap((action:RequestCitiesWeatherAction) => {
      const {ids} = action.payload;
      return this.cityService.getCitiesWeatherJSON(ids).pipe(
        map((citiesWeatherResponse: ICityWeatherAPIResponse) => {
          return new RespondCitiesWeatherAction({citiesWeatherResponse});
        })
      );
    })
  );*/

  /*this.downLoadFile(JSON.stringify(citiesWeatherResponse), 'application/json');
  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }*/

  /*	@Effect()
  requestCities$: Observable<Action> = this.actions$.pipe(
    ofType<RequestCitiesWeatherAction>(CityWeatherActionType.REQUEST_CITIES_WEATHER),
    switchMap((action:RequestCitiesWeatherAction) => {
      const {ids} = action.payload;
      return this.cityService.getCitiesWeatherJSON().pipe(
        map((citiesWeatherResponse: ICityWeatherAPIResponse) => {
          return new RespondCitiesWeatherAction({citiesWeatherResponse});
        })
      );
    })
  );*/

  constructor(
    private notificationsService: NotificationsService,
    private readonly actions$: Actions,
    private readonly cityService: CitesWeatherService
  ) {}
}
