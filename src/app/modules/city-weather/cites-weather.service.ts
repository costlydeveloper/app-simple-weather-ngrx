import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ICityWeather, ICityWeatherAPIResponse} from './cites-weather.model';

@Injectable({
	providedIn: 'root'
})
export class CitesWeatherService {

	constructor(private http: HttpClient) {
	}

	getCitiesWeather(ids: string): Observable<ICityWeatherAPIResponse> {

		const url: string = `${environment.openWeatherURL}/group?id=${ids}&appid=${environment.openWeatherAPIKey}&units=metric`;

		return this.http
		.get<ICityWeatherAPIResponse>(url, {
			observe: 'response'
		})
		.pipe(map(res => res.body));
	}

	getCitiesWeatherJSON(ids: string): Observable<ICityWeatherAPIResponse> {
		const citiesWeatherJson: ICityWeatherAPIResponse = {
			cnt : 5,
			list: [
				{
					coord: {
						lon: 15.978,
						lat: 45.8144
					},
					sys: {
						country: 'HR',
						timezone: 7200,
						sunrise: 1619667984,
						sunset: 1619719213
					},
					weather: [
						{
							id: 801,
							main: 'Clouds',
							description: 'few clouds',
							icon: '02d'
						}
					],
					main: {
						temp: 18.71,
						feels_like: 18.28,
						temp_min: 18,
						temp_max: 19,
						pressure: 1009,
						humidity: 63
					},
					visibility: 10000,
					wind: {
						speed: 6.69,
						deg: 230
					},
					clouds: {
						all: 20
					},
					dt: 1619690862,
					id: 3186886,
					name: 'Zagreb'
				},
				{
					coord: {
						lon: 16.4392,
						lat: 43.5089
					},
					sys: {
						country: 'HR',
						timezone: 7200,
						sunrise: 1619668180,
						sunset: 1619718796
					},
					weather: [
						{
							id: 802,
							main: 'Clouds',
							description: 'scattered clouds',
							icon: '03d'
						}
					],
					main: {
						temp: 19,
						feels_like: 18.73,
						temp_min: 19,
						temp_max: 19,
						pressure: 1013,
						humidity: 68
					},
					visibility: 10000,
					wind: {
						speed: 2.57,
						deg: 110
					},
					clouds: {
						all: 40
					},
					dt: 1619690986,
					id: 3190261,
					name: 'Split'
				},
				{
					coord: {
						lon: 16.3378,
						lat: 46.3044
					},
					sys: {
						country: 'HR',
						timezone: 7200,
						sunrise: 1619667829,
						sunset: 1619719196
					},
					weather: [
						{
							id: 803,
							main: 'Clouds',
							description: 'broken clouds',
							icon: '04d'
						}
					],
					main: {
						temp: 20.28,
						feels_like: 19.15,
						temp_min: 20,
						temp_max: 20.56,
						pressure: 1006,
						humidity: 30
					},
					visibility: 10000,
					wind: {
						speed: 4.92,
						deg: 180
					},
					clouds: {
						all: 72
					},
					dt: 1619690986,
					id: 3188383,
					name: 'Varazdin'
				},
				{
					coord: {
						lon: 17.225,
						lat: 45.5906
					},
					sys: {
						country: 'HR',
						timezone: 7200,
						sunrise: 1619667716,
						sunset: 1619718883
					},
					weather: [
						{
							id: 802,
							main: 'Clouds',
							description: 'scattered clouds',
							icon: '03d'
						}
					],
					main: {
						temp: 20.56,
						feels_like: 20.45,
						temp_min: 20.56,
						temp_max: 20.56,
						pressure: 1011,
						humidity: 68
					},
					visibility: 10000,
					wind: {
						speed: 0.89,
						deg: 252
					},
					clouds: {
						all: 31
					},
					dt: 1619690864,
					id: 3202184,
					name: 'Daruvar'
				},
				{
					coord: {
						lon: 14.5386,
						lat: 45.1581
					},
					sys: {
						country: 'HR',
						timezone: 7200,
						sunrise: 1619668419,
						sunset: 1619719469
					},
					weather: [
						{
							id: 803,
							main: 'Clouds',
							description: 'broken clouds',
							icon: '04d'
						}
					],
					main: {
						temp: 14.98,
						feels_like: 14.67,
						temp_min: 12.78,
						temp_max: 16,
						pressure: 1012,
						humidity: 82
					},
					visibility: 10000,
					wind: {
						speed: 4.63,
						deg: 170
					},
					clouds: {
						all: 75
					},
					dt: 1619690862,
					id: 3194475,
					name: 'Njivice'
				}
			],
		};

		return of(citiesWeatherJson);
	}

}
