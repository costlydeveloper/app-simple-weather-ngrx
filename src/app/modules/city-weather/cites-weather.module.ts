import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { SharedModule } from '../../shared.module';
import { CityWeatherItemComponent } from './layout/city-weather-item/city-weather-item.component';
import { CitiesWeatherComponent } from './layout/city-weather.component';
import { CitesWeatherEffects } from './store/cites-weather.effects';
import { citesWeatherReducer } from './store/cites-weather.reducer';
import { cityWeatherStateName } from './store/cites-weather.state';

@NgModule({
  declarations: [CityWeatherItemComponent, CitiesWeatherComponent],
  exports: [CitiesWeatherComponent, CityWeatherItemComponent],
  imports: [
    CheckboxModule,
    CommonModule,
    DataViewModule,
    StoreModule.forFeature(cityWeatherStateName, citesWeatherReducer),
    EffectsModule.forFeature([CitesWeatherEffects]),
    RouterModule,
    FormsModule,
    SharedModule,
    TranslateModule,
  ],
})
export class CitesWeatherModule {}
