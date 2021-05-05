import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxAwesomePopupModule, ToastNotificationConfigModule} from '@costlydeveloper/ngx-awesome-popup';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {metaReducers} from './app.reducer';
import {CitesWeatherModule} from './modules/city-weather/cites-weather.module';
import {CityModule} from './modules/city/city.module';
import {DailyWeatherModule} from './modules/daily-wether/daily-weather.module';
import {FavoritesModule} from './modules/favorites/favorites.module';
import {PagesModule} from './pages/pages.module';
import { LoginContainerComponent } from './layout/auth/login-container/login-container.component';
import { LoginFormComponent } from './layout/auth/login-form/login-form.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavoritesContainerComponent } from './layout/weather/favorites-container/favorites-container.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginContainerComponent,
        LoginFormComponent,
        WeatherPageComponent,
        FavoritesContainerComponent
    ],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		PagesModule,
		FormsModule,
		NgxAwesomePopupModule.forRoot(),
		ToastNotificationConfigModule.forRoot(),
		StoreModule.forRoot(
			{
				routerReducer
			},
			{
				runtimeChecks: {
					strictStateImmutability : true,
					strictActionImmutability: true
				},
				metaReducers
			}
		),
		StoreDevtoolsModule.instrument({
			maxAge : 25, // Retains last 25 states
			logOnly: false // Restrict extension to log-only mode
		}),
		EffectsModule.forRoot([]),
		CityModule,
		CitesWeatherModule,
		DailyWeatherModule,
		FavoritesModule
	],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
