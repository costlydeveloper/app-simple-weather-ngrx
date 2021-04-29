import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICity} from './city.model';

@Injectable({
	providedIn: 'root'
})
export class CityService {

	constructor() {
	}

	getCities(): Observable<ICity[]> {

		const cities: ICity[] = [
			{
				'id'     : 3186886,
				'name'   : 'Zagreb',

			},
			{
				'id'     : 3193935,
				'name'   : 'Osijek',
			},
			{
				'id'     : 3190261,
				'name'   : 'Split',

			},
			{
				'id'     : 3188383,
				'name'   : 'Varaždin',

			},
			{
				'id'     : 3188395,
				'name'   : 'Valpovo',
			},
			{
				'id'     : 3202184,
				'name'   : 'Daruvar',
			},
			{
				'id'     : 3215454,
				'name'   : 'Gospić',
			},
			{
				'id'     : 3195890,
				'name'   : 'Makarska',

			},
			{
				'id'     : 3194475,
				'name'   : 'Njivice',

			}
		];

		return of(cities);
	}
}
