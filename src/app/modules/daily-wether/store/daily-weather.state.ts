import {ICityDailyWeather} from '../daily-weather.model';

export const dailyWeatherStateName = 'daily-weather-module';

export interface IDailyWeatherModuleState {
	dailyWeather: ICityDailyWeather;
	dailyWeatherLoader: boolean;
}

export const initialDailyWeatherModuleState: IDailyWeatherModuleState = {
	dailyWeather      : null,
	dailyWeatherLoader: false
};
