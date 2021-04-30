import {IClouds, ICoordinates, IMain, IWeather, IWind} from '../city-weather/cites-weather.model';
import {ICity} from '../city/city.model';

export interface IDailyWeatherAPIResponse extends ICityDailyWeather{
	cod:     string;
	message: number;
	cnt:     number;
}

export interface ICityDailyWeather {
	list:    IDailyWeatherList[];
	city:    ICityDetails;
}

export interface ICityDetails extends ICity {
	coord:      ICoordinates;
	country:    string;
	population: number;
	timezone:   number;
	sunrise:    number;
	sunset:     number;
}

export interface IDailyWeatherList {
	dt:         number;
	main:       IMain;
	weather:    IWeather[];
	clouds:     IClouds;
	wind:       IWind;
	visibility: number;
	pop:        number;
	sys:        Sys;
	dt_txt:     string;
	rain?:      Rain;
}

export interface Rain {
	"3h": number;
}

export interface Sys {
	pod: string;
}
