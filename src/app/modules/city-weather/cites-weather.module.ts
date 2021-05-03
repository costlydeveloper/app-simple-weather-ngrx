import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {DataViewModule} from 'primeng/dataview';
import {CityWeatherItemComponent} from './layout/city-weather-item/city-weather-item.component';
import {CitiesWeatherComponent} from './layout/city-weather.component';
import {CitesWeatherEffects} from './store/cites-weather.effects';
import {citesWeatherReducer} from './store/cites-weather.reducer';
import {cityWeatherStateName} from './store/cites-weather.state';

@NgModule({
	declarations: [CityWeatherItemComponent, CitiesWeatherComponent],
	exports     : [
		CitiesWeatherComponent
	],
	imports: [
		CommonModule,
		DataViewModule,
		StoreModule.forFeature(cityWeatherStateName, citesWeatherReducer),
		EffectsModule.forFeature([CitesWeatherEffects]),
		RouterModule
	]
})
export class CitesWeatherModule {
}
