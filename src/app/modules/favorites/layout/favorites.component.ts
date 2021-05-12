import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICityWeather } from '../../city-weather/cites-weather.model';
import { RequestCitiesWeatherAction } from '../../city-weather/store/cites-weather.actions';
import { selectCityWeather } from '../../city-weather/store/cites-weather.selector';
import { IFavorites } from '../../favorites/favorites.model';
import { selectFavorites } from '../../favorites/store/favorites.selector';
import { RemoveFavoriteAction } from '../store/favorites.actions';

@Component({
  selector: 'app-favorites-container',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit, OnDestroy {
  citiesWeather$: Observable<ICityWeather[]>;
  favorites$: Observable<IFavorites>;
  #subscriptions: Subscription = new Subscription();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.citiesWeather$ = this.store.pipe(select(selectCityWeather));
    this.favorites$ = this.store.pipe(select(selectFavorites));

    this.#subscriptions.add(
      this.citiesWeather$.subscribe((val) => {
        // console.log('citiesWeather$ ', val);
      })
    );

    this.#subscriptions.add(
      this.favorites$.subscribe((favorites) => {
        // console.log('favorites$', favorites);
        let string = '';
        favorites.cityIDs.forEach((item, index, array) => {
          string += item;
          if (index < array.length - 1) {
            string += ',';
          }
        });
        if (string) {
          this.store.dispatch(new RequestCitiesWeatherAction({ ids: string }));
        }
      })
    );
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }

  removeFavoriteID(_favoriteID: number) {
    this.store.dispatch(new RemoveFavoriteAction(_favoriteID));
  }
}
