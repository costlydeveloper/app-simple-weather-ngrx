import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { citiesSettings } from './cites-settings';
import { ICity } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  getCities(): Observable<ICity[]> {
    return of(citiesSettings);
  }
}
