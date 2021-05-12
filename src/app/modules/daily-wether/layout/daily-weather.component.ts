import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICityDailyWeather } from '../daily-weather.model';
import {
  selectDailyWeather,
  selectDailyWeatherLoader,
} from '../store/daily-weather.selector';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
})
export class DailyWeatherComponent implements OnInit, OnDestroy {
  citiesDailyWeather$: Observable<ICityDailyWeather>;
  citiesDailyWeatherLoader$: Observable<boolean>;
  @Input() cityID: number;
  @Input() dayParam: string;
  #subscriptions: Subscription = new Subscription();

  constructor(private store: Store<any>) {
    this.citiesDailyWeather$ = this.store.pipe(select(selectDailyWeather));
    this.citiesDailyWeatherLoader$ = this.store.pipe(
      select(selectDailyWeatherLoader)
    );
  }

  ngOnInit(): void {
    this.#subscriptions.add(this.citiesDailyWeather$.subscribe((val) => {}));
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }
}
