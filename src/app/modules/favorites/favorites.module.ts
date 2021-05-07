import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CitesWeatherModule } from '../city-weather/cites-weather.module';
import { FavoriteItemComponent } from './layout/favorite-item/favorite-item.component';
import { FavoritesComponent } from './layout/favorites.component';
import { FavoritesEffects } from './store/favorites.effects';
import { favoritesReducer } from './store/favorites.reducer';
import { favoritesStateName } from './store/favorites.state';

@NgModule({
  declarations: [FavoriteItemComponent, FavoritesComponent],
  exports: [FavoritesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(favoritesStateName, favoritesReducer),
    EffectsModule.forFeature([FavoritesEffects]),
    CitesWeatherModule,
    RouterModule,
  ],
})
export class FavoritesModule {}
