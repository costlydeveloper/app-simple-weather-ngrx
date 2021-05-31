import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AddFavoriteAction,
  RemoveFavoriteAction,
  RequestFavoritesAction,
} from '../../../favorites/store/favorites.actions';
import { ICityWeather } from '../../cites-weather.model';

@Component({
  selector: 'app-city-weather-item',
  templateUrl: './city-weather-item.component.html',
  styleUrls: ['./city-weather-item.component.scss'],
})
export class CityWeatherItemComponent {
  @Input() cityWeatherItem: ICityWeather;
  @Input() isFavorite: boolean;
  check: any = true;

  constructor(private store: Store<any>) {
    this.store.dispatch(new RequestFavoritesAction());
  }

  addRemoveFavorite(_cityID: number, _event: any): void {
    if (_event.target.checked) {
      this.store.dispatch(new AddFavoriteAction(_cityID));
    } else {
      this.store.dispatch(new RemoveFavoriteAction(_cityID));
    }
  }

  favoritesFormTrigger(_value: any) {
    // console.log(_value);
  }
}
