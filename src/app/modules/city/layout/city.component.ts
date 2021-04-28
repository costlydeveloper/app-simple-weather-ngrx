import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {RequestCitiesWeatherAction} from '../../city-weather/store/cites-weather.actions';
import {ICity} from '../city.model';
import {RequestCityAction} from '../store/city.actions';
import {selectCitesLoader, selectCity} from '../store/city.selector';


@Component({
	selector: 'app-city',
	template: `
		<app-city-multiselect
				[cities$]="cities$"
				(selectedCities)="selectedCitiesTrigger($event)"
		></app-city-multiselect>`
})
export class CityComponent implements OnInit {

	selectedCities: ICity[] = [];
	cities$: Observable<ICity[]>;
	loader$: Observable<boolean>;

	constructor(private store: Store<any>) {
	}

	ngOnInit(): void {

		this.store.dispatch(new RequestCityAction());

		this.cities$ = this.store.pipe(select(selectCity));

		this.loader$ = this.store.pipe(select(selectCitesLoader));
		this.cities$.subscribe(
			val => {
				// console.log(val);
			});
		this.loader$.subscribe(
			val => {
				// console.log(val);
			});
	}

	selectedCitiesTrigger(cities: ICity[]): void {
		let string= '';
		 cities.forEach((item, index, array) => {
			 string += item.id;
		 	if(index < array.length -1 ){
			    string += ',';
			}
		});
		this.store.dispatch(new RequestCitiesWeatherAction({ids: string}));
	}

	stringMapper(): void {



	}
}
