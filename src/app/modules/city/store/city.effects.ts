import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
        })
      );
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly cityService: CityService
  ) {}
}
