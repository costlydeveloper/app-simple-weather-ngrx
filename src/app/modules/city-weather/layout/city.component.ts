/*
import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {ICity} from '../cites-weather.model';
import {RequestCityAction} from '../store/cites-weather.actions';
import {selectCitesLoader, selectCity} from '../store/cites-weather.selector';


@Component({
	selector: 'app-city',
	template: `
		<ng-template ngFor let-city [ngForOf]="cities$ | async">
			<!--<ng-container *ngIf="!(loader$ | async) && (cities$ | async)?.length > 0">-->
			<ng-container *ngIf="!(loader$ | async)">
				<app-city-item
				[city]="city"
				></app-city-item>
			</ng-container>
		</ng-template>`
})
export class CityComponent implements OnInit {
	// @ts-ignore
	cities$: Observable<ICity[]>;
	// @ts-ignore
	loader$: Observable<boolean>;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {

		this.store.dispatch(new RequestCityAction());

		this.cities$ = this.store.pipe(select(selectCity));

		this.loader$ = this.store.pipe(select(selectCitesLoader));
		this.cities$.subscribe(
			val => {
				console.log(val);
			});
		this.loader$.subscribe(
			val => {
				console.log(val);
			});
	}
}
*/
