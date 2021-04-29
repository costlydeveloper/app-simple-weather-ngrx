import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ICityWeather} from '../cites-weather.model';
import {selectCitesLoader, selectCityWeather} from '../store/cites-weather.selector';


@Component({
	selector: 'app-city-weather',
	template: `
		<ng-template ngFor let-cityWeather [ngForOf]="citiesWeather$ | async">
			<!--<ng-container *ngIf="!(loader$ | async) && (cities$ | async)?.length > 0">-->
			<ng-container *ngIf="!(loader$ | async)">
				<app-city-weather-item
						[cityWeatherItem]="cityWeather"
				></app-city-weather-item>
			</ng-container>
		</ng-template>`
})
export class CitiesWeatherComponent implements OnInit {
	citiesWeather$: Observable<ICityWeather[]>;
	loader$: Observable<boolean>;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {

		this.citiesWeather$ = this.store.pipe(select(selectCityWeather));
		this.loader$ = this.store.pipe(select(selectCitesLoader));

		this.citiesWeather$.subscribe(
			val => {
				console.log(val);
				// this.downLoadFile(JSON.stringify(val), 'application/json');
			});
		this.loader$.subscribe(
			val => {
				console.log(val);
			});
	}


	downLoadFile(data: any, type: string) {
		let blob = new Blob([data], { type: type});
		let url = window.URL.createObjectURL(blob);
		let pwa = window.open(url);
		if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
			alert( 'Please disable your Pop-up blocker and try again.');
		}
	}

}
