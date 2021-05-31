import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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
import { I18nSuperclass } from '../../modules/i18n/superclass/i18n.superclass';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent
  extends I18nSuperclass
  implements OnInit, OnDestroy {
  cities$: Observable<ICity[]>;

  citiesDailyWeather$: Observable<ICityDailyWeather>;
  dailyWeatherLoader$: Observable<boolean>;
  cityParam: string;
  dayParam: string;
  city: ICity;
  #subscriptions: Subscription = new Subscription();

  constructor(
    readonly translate: TranslateService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    super(store, translate);
  }

  ngOnInit(): void {
    this.store.dispatch(new RequestFavoritesAction());
    this.cities$ = this.store.pipe(select(selectCity));
    this.dailyWeatherLoader$ = this.store.pipe(
      select(selectDailyWeatherLoader)
    );
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
