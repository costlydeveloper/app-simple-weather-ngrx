import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nJsonLoader } from '../../modules/i18n/i18n-json-loader';
import { WeatherPageRoutingModule } from './weather-page-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WeatherPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: new I18nJsonLoader().set('weather'),
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class WeatherPageModule {}
