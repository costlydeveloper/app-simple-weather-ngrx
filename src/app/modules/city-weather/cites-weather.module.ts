import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CitesWeatherEffects} from './store/cites-weather.effects';
import {citesWeatherReducer} from './store/cites-weather.reducer';
import {cityWeatherStateName} from './store/cites-weather.state';

@NgModule({
	declarations: [],
	exports     : [],
	imports     : [
		CommonModule,
		StoreModule.forFeature(cityWeatherStateName, citesWeatherReducer),
		EffectsModule.forFeature([CitesWeatherEffects])
	]
})
export class CitesWeatherModule {
}
