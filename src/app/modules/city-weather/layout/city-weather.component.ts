import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { inOutAnimation } from '../../../library/animation/ngIf-animation';
import { IFavorites } from '../../favorites/favorites.model';
import { selectFavorites } from '../../favorites/store/favorites.selector';
import { ICityWeather } from '../cites-weather.model';
import { RequestCitiesWeatherAction } from '../store/cites-weather.actions';
import {
  selectCitesLoader,
  selectCityWeather,
} from '../store/cites-weather.selector';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  animations: [inOutAnimation],
})
export class CitiesWeatherComponent implements OnInit, OnDestroy {
  citiesWeather$: Observable<ICityWeather[]>;
  favorites$: Observable<IFavorites>;
  loader$: Observable<boolean>;
  #subscriptions: Subscription = new Subscription();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new RequestCitiesWeatherAction({ ids: '' }));
    this.citiesWeather$ = this.store.pipe(select(selectCityWeather));
    this.favorites$ = this.store.pipe(select(selectFavorites));
    this.loader$ = this.store.pipe(select(selectCitesLoader));

    /*		combineLatest([this.citiesWeather$, this.favorites$ ]).subscribe(results => {
      console.log('combineLatest ', results);
    });*/

    /*		this.citiesWeather$.doOnNext(favorites$,
      (list1, list2) => {
        //DiffUtil list1 and list2 and return the filtered list
      }
    );*/
    this.#subscriptions.add(
      this.citiesWeather$.subscribe((val) => {
        // console.log('citiesWeather$ ', val);
      })
    );

    this.#subscriptions.add(
      this.favorites$.subscribe((val) => {
        // console.log('favorites$', val);
      })
    );
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }
}
