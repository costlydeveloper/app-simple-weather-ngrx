import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  CityWeatherAPIResponse,
  ICityWeatherAPIResponse,
} from './cites-weather.model';
import { citiesWeatherMockData } from './cities-weather-mock';

@Injectable({
  providedIn: 'root',
})
export class CitesWeatherService {
  constructor(private http: HttpClient) {}

  getCitiesWeather(ids: string): Observable<ICityWeatherAPIResponse> {
    if (ids) {
      const url: string = `${environment.openWeatherURL}/group?id=${ids}&appid=${environment.openWeatherAPIKey}&units=metric`;

      return this.http
        .get<ICityWeatherAPIResponse>(url, {
          observe: 'response',
        })
        .pipe(map(res => res.body))
        .pipe(delay(100));
    } else {
      return of(new CityWeatherAPIResponse());
    }
  }

  getCitiesWeatherJSON(ids: string): Observable<ICityWeatherAPIResponse> {
    return of(citiesWeatherMockData);
  }
}
