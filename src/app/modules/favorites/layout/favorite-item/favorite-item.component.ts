import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICityWeather } from '../../../city-weather/cites-weather.model';
import { RemoveFavoriteAction } from '../../store/favorites.actions';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {
  @Input() cityWeatherItem: ICityWeather;

  constructor(private store: Store<any>) {}

  removeFavorite(_favoriteID) {
    this.store.dispatch(new RemoveFavoriteAction(_favoriteID));
  }
}
