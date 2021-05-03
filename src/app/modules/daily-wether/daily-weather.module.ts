import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {DailyWeatherItemComponent} from './layout/daily-weather-item/daily-weather-item.component';
import {DailyWeatherComponent} from './layout/daily-weather.component';
import {DailyWeatherEffects} from './store/daily-weather.effects';
import {dailyWeatherReducer} from './store/daily-weather.reducer';
import {dailyWeatherStateName} from './store/daily-weather.state';


@NgModule({
  declarations: [DailyWeatherItemComponent, DailyWeatherComponent],
  exports     : [
    DailyWeatherComponent
  ],
	imports: [
		CommonModule,
		StoreModule.forFeature(dailyWeatherStateName, dailyWeatherReducer),
		EffectsModule.forFeature([DailyWeatherEffects]),
		RouterModule
	]
})
export class DailyWeatherModule {
}
