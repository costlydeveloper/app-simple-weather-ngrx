import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ICityDailyWeather} from '../daily-weather.model';
import {selectDailyWeather, selectDailyWeatherLoader} from '../store/daily-weather.selector';

@Component({
	selector: 'app-daily-weather',
	template: `
		<app-daily-weather-item
				*ngIf="!(citiesDailyWeatherLoader$ | async)"
				[cityDailyWeather]="citiesDailyWeather$ | async"
				[dayParam]="dayParam"
		></app-daily-weather-item>`
})
export class DailyWeatherComponent implements OnInit {

	citiesDailyWeather$: Observable<ICityDailyWeather>;
	citiesDailyWeatherLoader$: Observable<boolean>;
	@Input() cityID: number;
	@Input() dayParam: string;

	constructor(private store: Store<any>) {
		this.citiesDailyWeather$       = this.store.pipe(select(selectDailyWeather));
		this.citiesDailyWeatherLoader$ = this.store.pipe(select(selectDailyWeatherLoader));
	}

	ngOnInit(): void {
		this.citiesDailyWeather$.subscribe(
			val => {
				 console.log('val', val);
			});
	}

}
