import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ICityWeatherAPIResponse} from './cites-weather.model';

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

}
