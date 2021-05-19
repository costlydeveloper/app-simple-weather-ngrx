import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CitesWeatherModule } from '../../modules/city-weather/cites-weather.module';
import { DailyWeatherModule } from '../../modules/daily-wether/daily-weather.module';
import { FavoritesModule } from '../../modules/favorites/favorites.module';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { FavoritesPageComponent } from './favorites-page.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/favorites/', '.json');
}

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
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class FavoritesPageModule {}
