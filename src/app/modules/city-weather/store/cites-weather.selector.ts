import {createFeatureSelector, createSelector, Selector} from '@ngrx/store';
import {ICityWeather} from '../cites-weather.model';
import {cityWeatherStateName, ICityWeatherModuleState} from './cites-weather.state';

const selectCityWeatherModule = createFeatureSelector<ICityWeatherModuleState>(cityWeatherStateName);

export const selectCityWeather: Selector<object, ICityWeather[]> = createSelector(
	selectCityWeatherModule,
	(state: ICityWeatherModuleState) => state.citiesWeather
);
export const selectCitesLoader: Selector<object, boolean>        = createSelector(
	selectCityWeatherModule,
	(state: ICityWeatherModuleState) => state.cityWeatherLoader
);
