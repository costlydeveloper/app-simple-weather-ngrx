import {createFeatureSelector, createSelector, Selector} from '@ngrx/store';
import {ICityDailyWeather} from '../daily-weather.model';
import {dailyWeatherStateName, IDailyWeatherModuleState} from './daily-weather.state';

const selectDailyCityWeatherModule= createFeatureSelector<IDailyWeatherModuleState>(dailyWeatherStateName);

export const selectDailyWeather: Selector<object, ICityDailyWeather> = createSelector(
	selectDailyCityWeatherModule,
	(state: IDailyWeatherModuleState) => {
		return state.dailyWeather
	}
);
export const selectDailyWeatherLoader: Selector<object, boolean> = createSelector(
	selectDailyCityWeatherModule,
	(state: IDailyWeatherModuleState) => {
		return state.dailyWeatherLoader
	}
);
