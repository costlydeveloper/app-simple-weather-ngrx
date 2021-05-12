import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICityWeather } from '../../../city-weather/cites-weather.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {
  @Input() cityWeatherItem: ICityWeather;
  @Output() removeFavoriteID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private store: Store<any>) {}

  removeFavorite(_favoriteID: number): void {
    this.removeFavoriteID.emit(_favoriteID);
  }
}
