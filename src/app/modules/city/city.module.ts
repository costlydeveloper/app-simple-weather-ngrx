import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CityMultiselectComponent} from './layout/city-multiselect/city-multiselect.component';
import {CityComponent} from './layout/city.component';
import {CityEffects} from './store/city.effects';
import {cityReducer} from './store/city.reducer';
import {cityStateName} from './store/city.state';
import {MultiSelectModule} from 'primeng/multiselect';
@NgModule({
	declarations: [
		CityComponent,
		CityMultiselectComponent
	],
	exports     : [
		CityComponent
	],
	imports: [
		CommonModule,
		MultiSelectModule,
		StoreModule.forFeature(cityStateName, cityReducer),
		EffectsModule.forFeature([CityEffects]),
		FormsModule
	]
})
export class CityModule {
}
