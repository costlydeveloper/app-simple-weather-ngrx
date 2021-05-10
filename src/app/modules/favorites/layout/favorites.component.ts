import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { NotificationsService } from '../../../library/popups/notifications.service';
import { ICityWeather } from '../../city-weather/cites-weather.model';
import { RequestCitiesWeatherAction } from '../../city-weather/store/cites-weather.actions';
import { selectCityWeather } from '../../city-weather/store/cites-weather.selector';
import { selectCitesLoader } from '../../city/store/city.selector';
import { IFavorites } from '../../favorites/favorites.model';
import { selectFavorites } from '../../favorites/store/favorites.selector';

@Component({
  selector: 'app-favorites-container',
  template: ` <div class="container">
    <div class="row hidden-md-up">
      <ng-template ngFor let-cityWeather [ngForOf]="citiesWeather$ | async">
        <!--<ng-container *ngIf="!(loader$ | async) && (cities$ | async)?.length > 0">-->
        <ng-container *ngIf="!(loader$ | async)">
          <div class="col-md-3 mb-4">
            <app-favorite-item
              [cityWeatherItem]="cityWeather"
            ></app-favorite-item>
            <!--	<app-city-weather-item
                        [isFavorite]="(favorites$ | async).cityIDs.indexOf(cityWeather.id) > -1"
                        [cityWeatherItem]="cityWeather"
                    ></app-city-weather-item>-->
          </div>
        </ng-container>
      </ng-template>
    </div>
  </div>`,
})
export class FavoritesComponent implements OnInit, OnDestroy {
  citiesWeather$: Observable<ICityWeather[]>;
  favorites$: Observable<IFavorites>;
  loader$: Observable<boolean>;
  #subscriptions: Subscription = new Subscription();

  constructor(
    private notificationsService: NotificationsService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.citiesWeather$ = this.store.pipe(select(selectCityWeather));
    this.favorites$ = this.store.pipe(select(selectFavorites));
    this.loader$ = this.store.pipe(select(selectCitesLoader));

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
        } else {
          this.notificationsService.evokeToast(
            'Notice!',
            'There are no favorites!',
            DialogLayoutDisplay.INFO
          );
        }
      })
    );
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }
}
