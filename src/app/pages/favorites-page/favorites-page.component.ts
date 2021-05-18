import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICity } from '../../modules/city/city.model';
import { RequestCityAction } from '../../modules/city/store/city.actions';
import { selectCity } from '../../modules/city/store/city.selector';
import { ICityDailyWeather } from '../../modules/daily-wether/daily-weather.model';
import { RequestDailyWeatherAction } from '../../modules/daily-wether/store/daily-weather.actions';
import { selectDailyWeather } from '../../modules/daily-wether/store/daily-weather.selector';
import { RequestFavoritesAction } from '../../modules/favorites/store/favorites.actions';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  cities$: Observable<ICity[]>;
  citiesDailyWeather$: Observable<ICityDailyWeather>;
  cityParam: string;
  dayParam: string;
  city: ICity;
  #subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new RequestCityAction());
    this.store.dispatch(new RequestFavoritesAction());
    this.cities$ = this.store.pipe(select(selectCity));
    this.citiesDailyWeather$ = this.store.pipe(select(selectDailyWeather));

    this.#subscriptions.add(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.cityParam = params.get('city-name');
        this.dayParam = params.get('day');

        this.#subscriptions.add(
          this.cities$.subscribe(items => {
            this.city = items.find(item => {
              return item.name.toLowerCase() === this.cityParam.toLowerCase();
            });

            if (this.city) {
              this.store.dispatch(
                new RequestDailyWeatherAction({ id: this.city.id })
              );
            }
          })
        );
      })
    );
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }
}
