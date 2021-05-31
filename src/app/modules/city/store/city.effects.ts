import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { APINotificationService } from '../../../library/popups/api-notification.service';
import { ICity } from '../city.model';
import { CityService } from '../city.service';
import {
  CityActionType,
  RequestCityAction,
  RespondCityAction,
} from './city.actions';

@Injectable()
export class CityEffects {
  @Effect()
  requestCities$: Observable<Action> = this.actions$.pipe(
    ofType<RequestCityAction>(CityActionType.REQUEST_CITIES),
    switchMap(action => {
      return this.cityService.getCities().pipe(
        map((response: ICity[]) => new RespondCityAction({ cities: response })),
        catchError(() =>
          of({ type: CityActionType.RESPOND_CITIES_ERROR }).pipe(
            tap(resp => {
              this.apiNotificationsService.validationError();
            })
          )
        )
      );
    })
  );

  constructor(
    private apiNotificationsService: APINotificationService,
    private readonly actions$: Actions,
    private readonly cityService: CityService
  ) {}
}
