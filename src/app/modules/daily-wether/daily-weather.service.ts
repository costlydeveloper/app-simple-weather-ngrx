import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ICityWeatherAPIResponse} from '../city-weather/cites-weather.model';
import {IDailyWeatherAPIResponse} from './daily-weather.model';

@Injectable({
  providedIn: 'root'
})
export class DailyWeatherService {

  constructor(private http: HttpClient) {
  }

  getDailyCityWeather(id: number): Observable<IDailyWeatherAPIResponse> {
    const url: string = `${environment.openWeatherURL}/forecast?id=${id}&appid=${environment.openWeatherAPIKey}&units=metric`;

    return this.http
    .get<IDailyWeatherAPIResponse>(url, {
      observe: 'response'
    })
    .pipe(map(res => res.body));
  }

}
