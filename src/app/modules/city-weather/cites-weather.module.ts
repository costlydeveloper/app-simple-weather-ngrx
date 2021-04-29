import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CityWeatherItemComponent} from './layout/city-weather-item/city-item.component';
import {CitiesWeatherComponent} from './layout/city-weather.component';
import {CitesWeatherEffects} from './store/cites-weather.effects';
import {citesWeatherReducer} from './store/cites-weather.reducer';
import {cityWeatherStateName} from './store/cites-weather.state';

@NgModule({
	declarations: [CityWeatherItemComponent, CitiesWeatherComponent],
	exports: [
		CitiesWeatherComponent
	],
	imports     : [
		CommonModule,
		StoreModule.forFeature(cityWeatherStateName, citesWeatherReducer),
		EffectsModule.forFeature([CitesWeatherEffects])
	]
})
export class CitesWeatherModule {
}
