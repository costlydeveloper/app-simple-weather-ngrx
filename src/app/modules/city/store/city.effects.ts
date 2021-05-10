import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { NotificationsService } from '../../../library/popups/notifications.service';
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
    switchMap((action) => {
      return this.cityService.getCities().pipe(
        map((response: ICity[]) => {
          return new RespondCityAction({ cities: response });
        }),
        catchError(() =>
          of({ type: CityActionType.RESPOND_CITIES_ERROR }).pipe(
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
    private readonly cityService: CityService
  ) {}
}
