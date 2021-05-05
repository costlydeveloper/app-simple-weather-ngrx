import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherPageComponent} from '../weather-page/weather-page.component';
import {FavoritesPageComponent} from './favorites-page.component';

const routes: Routes = [
  {
    path     : '',
    component: FavoritesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesPageRoutingModule { }
