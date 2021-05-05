import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
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
export class DailyWeatherComponent implements OnInit, OnDestroy {

	citiesDailyWeather$: Observable<ICityDailyWeather>;
	citiesDailyWeatherLoader$: Observable<boolean>;
	subscriptions: Subscription[] = [];

	@Input() cityID: number;
	@Input() dayParam: string;

	constructor(private store: Store<any>) {
		this.citiesDailyWeather$       = this.store.pipe(select(selectDailyWeather));
		this.citiesDailyWeatherLoader$ = this.store.pipe(select(selectDailyWeatherLoader));
	}

	ngOnInit(): void {
		this.subscriptions.push(this.citiesDailyWeather$.subscribe(
			val => {
				 // console.log('val', val);
			}));
	}
	ngOnDestroy() {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}
}
