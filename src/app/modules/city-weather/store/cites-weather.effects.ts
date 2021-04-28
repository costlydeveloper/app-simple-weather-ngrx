import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ICityWeatherAPIResponse} from '../cites-weather.model';
import {CitesWeatherService} from '../cites-weather.service';
import {CityWeatherActionType, RequestCitiesWeatherAction, RespondCitiesWeatherAction} from './cites-weather.actions';

@Injectable()
export class CitesWeatherEffects {

	@Effect()
	requestCities$: Observable<Action> = this.actions$.pipe(
		ofType<RequestCitiesWeatherAction>(CityWeatherActionType.REQUEST_CITIES_WEATHER),
		switchMap((action:RequestCitiesWeatherAction) => {
			const {ids} = action.payload;
			return this.cityService.getCitiesWeather(ids).pipe(
				map((citiesWeatherResponse: ICityWeatherAPIResponse) => {
					return new RespondCitiesWeatherAction({citiesWeatherResponse});
				})
			);
		})
	);

	constructor(
		private readonly actions$: Actions,
		private readonly cityService: CitesWeatherService
	) {
	}
}
