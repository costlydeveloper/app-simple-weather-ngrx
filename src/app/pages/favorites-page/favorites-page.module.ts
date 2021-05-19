import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CitesWeatherModule } from '../../modules/city-weather/cites-weather.module';
import { DailyWeatherModule } from '../../modules/daily-wether/daily-weather.module';
import { FavoritesModule } from '../../modules/favorites/favorites.module';
import { I18nJsonLoader } from '../../modules/i18n/i18n-json-loader';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { FavoritesPageComponent } from './favorites-page.component';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [
    CommonModule,
    FavoritesPageRoutingModule,
    FavoritesModule,
    DailyWeatherModule,
    CitesWeatherModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: new I18nJsonLoader().set('favorites'),
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class FavoritesPageModule {}
