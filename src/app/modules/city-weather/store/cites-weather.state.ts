import {ICityWeather} from '../cites-weather.model';

export const cityWeatherStateName = 'city-weather-module';

export interface ICityWeatherModuleState {
	citiesWeather: ICityWeather[];
	cityWeatherLoader: boolean
}

export const initialCityWeatherModuleState: ICityWeatherModuleState = {
	citiesWeather: [],
	cityWeatherLoader: false
};
