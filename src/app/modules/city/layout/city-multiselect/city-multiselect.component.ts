import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ICity} from '../../city.model';


@Component({
	selector   : 'app-city-multiselect',
	templateUrl: './city-multiselect.component.html',
	styleUrls  : ['./city-multiselect.component.scss']
})
export class CityMultiselectComponent {
	// @ts-ignore
	@Input() cities$: Observable<ICity[]>;
	// @ts-ignore
	@Output() selectedCities = new EventEmitter<ICity[]>();
	selected: ICity[]        = [];

	submit(): void {
		this.selectedCities.emit(this.selected);
	}
}
