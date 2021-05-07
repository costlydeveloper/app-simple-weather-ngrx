import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICity } from '../../modules/city/city.model';
import { selectCity } from '../../modules/city/store/city.selector';
import { ICityDailyWeather } from '../../modules/daily-wether/daily-weather.model';
import { RequestDailyWeatherAction } from '../../modules/daily-wether/store/daily-weather.actions';
import {
  selectDailyWeather,
  selectDailyWeatherLoader,
} from '../../modules/daily-wether/store/daily-weather.selector';
import { RequestFavoritesAction } from '../../modules/favorites/store/favorites.actions';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  cities$: Observable<ICity[]>;

  citiesDailyWeather$: Observable<ICityDailyWeather>;
  dailyWeatherLoader$: Observable<boolean>;
  cityParam: string;
  dayParam: string;
  city: ICity;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new RequestFavoritesAction());
    this.cities$ = this.store.pipe(select(selectCity));
    this.dailyWeatherLoader$ = this.store.pipe(
      select(selectDailyWeatherLoader)
    );
    this.citiesDailyWeather$ = this.store.pipe(select(selectDailyWeather));

    this.subscriptions.push(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.cityParam = params.get('city-name');
        this.dayParam = params.get('day');

        this.subscriptions.push(
          this.cities$.subscribe((items) => {
            this.city = items.find((item) => {
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
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
