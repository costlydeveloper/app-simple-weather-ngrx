import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
  template: ` <div class="container">
    <div class="row hidden-md-up">
      <ng-template ngFor let-cityWeather [ngForOf]="citiesWeather$ | async">
        <!--<ng-container *ngIf="!(loader$ | async) && (cities$ | async)?.length > 0">-->
        <ng-container *ngIf="!(loader$ | async)">
          <div class="col-md-3 mb-4">
            <app-city-weather-item
              [isFavorite]="
                (favorites$ | async).cityIDs.indexOf(cityWeather.id) > -1
              "
              [cityWeatherItem]="cityWeather"
            ></app-city-weather-item>
          </div>
        </ng-container>
      </ng-template>
    </div>
  </div>`,
})
export class CitiesWeatherComponent implements OnInit, OnDestroy {
  citiesWeather$: Observable<ICityWeather[]>;
  favorites$: Observable<IFavorites>;
  loader$: Observable<boolean>;
  subscriptions: Subscription[] = [];

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
    this.subscriptions.push(
      this.citiesWeather$.subscribe((val) => {
        // console.log('citiesWeather$ ', val);
      })
    );

    this.subscriptions.push(
      this.favorites$.subscribe((val) => {
        // console.log('favorites$', val);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

interface MergedCitesWeatherFavorites extends ICityWeather {}
