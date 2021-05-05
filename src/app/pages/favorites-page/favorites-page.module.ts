import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CitesWeatherModule} from '../../modules/city-weather/cites-weather.module';
import {DailyWeatherModule} from '../../modules/daily-wether/daily-weather.module';
import {FavoritesModule} from '../../modules/favorites/favorites.module';

import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { FavoritesPageComponent } from './favorites-page.component';


@NgModule({
  declarations: [FavoritesPageComponent],
	imports: [
		CommonModule,
		FavoritesPageRoutingModule,
		FavoritesModule,
		DailyWeatherModule,
		CitesWeatherModule
	]
})
export class FavoritesPageModule { }
