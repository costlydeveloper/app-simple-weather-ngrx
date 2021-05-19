import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAwesomePopupModule, ToastNotificationConfigModule } from '@costlydeveloper/ngx-awesome-popup';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers } from './app.reducer';
import { LoginContainerComponent } from './layout/auth/login-container/login-container.component';
import { LoginFormComponent } from './layout/auth/login-form/login-form.component';
import { FavoritesContainerComponent } from './layout/weather/favorites-container/favorites-container.component';
import { CitesWeatherModule } from './modules/city-weather/cites-weather.module';
import { CityModule } from './modules/city/city.module';
import { DailyWeatherModule } from './modules/daily-wether/daily-weather.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { I18nJsonLoader } from './modules/i18n/i18n-json-loader';
import { PagesModule } from './pages/pages.module';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { SharedModule } from './shared.module';

/*export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/app/', suffix: '.json' },
    { prefix: './assets/i18n/notifications/', suffix: '.json' },
  ]);
}*/

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginFormComponent,
    WeatherPageComponent,
    FavoritesContainerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    FormsModule,
    SharedModule,
    NgxAwesomePopupModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: new I18nJsonLoader().set('app', 'notifications'),
        deps: [HttpClient],
      },
      isolate: true,
    }),
    StoreModule.forRoot(
      {
        routerReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
        metaReducers,
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    CityModule,
    CitesWeatherModule,
    DailyWeatherModule,
    FavoritesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
