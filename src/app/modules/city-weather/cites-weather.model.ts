import {City, ICity} from '../city/city.model';

//Interface

export interface ICityWeatherAPIResponse extends ICity {
	cnt: number;
	list: ICityWeather[];
}

export interface ICityWeather extends ICity {
	coord: ICoordinates;
	sys: ISys;
	weather: IWeather;
	main: IMain;
	wind: IWind;
	clouds: IClouds;
	dt: number;
}

export interface ICoordinates {
	lat: number;
	lon: number;
}

export interface ISys {
	country: string;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface IWind {
	speed: number;
	deg: number;
}

export interface IMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface IClouds {
	all: number;
}

export interface IWeather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

// Classes
export class CityWeather extends City implements ICityWeather {
	coord: ICoordinates = new Coordinates();
	sys: ISys           = new Sys();
	weather: IWeather   = new Weather();
	main: IMain         = new Main();
	visibility: number  = null;
	wind: IWind         = new Wind();
	clouds: IClouds     = new Clouds();
	dt: number          = null;
}

export class Coordinates implements ICoordinates {
	lat: number = null;
	lon: number = null;
}

export class Sys implements ISys {
	country: string  = null;
	timezone: number = null;
	sunrise: number  = null;
	sunset: number   = null;
}

export class Weather implements IWeather {
	id: number          = null;
	main: string        = null;
	description: string = null;
	icon: string        = null;
}

export class Main implements IMain {
	temp: number       = null;
	feels_like: number = null;
	temp_min: number   = null;
	temp_max: number   = null;
	pressure: number   = null;
	humidity: number   = null;

}

export class Wind implements IWind {
	speed: number = null;
	deg: number   = null;
}

export class Clouds implements IClouds {
	all: number = null;
}
