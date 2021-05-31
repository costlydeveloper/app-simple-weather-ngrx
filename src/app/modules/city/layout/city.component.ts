import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { NotificationsService } from '../../../library/popups/notifications.service';
import { RequestCitiesWeatherAction } from '../../city-weather/store/cites-weather.actions';
import { ICity } from '../city.model';
import { RequestCityAction } from '../store/city.actions';
import { selectCitesLoader, selectCity } from '../store/city.selector';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
})
export class CityComponent implements OnInit, OnDestroy {
  selectedCities: ICity[] = [];
  cities$: Observable<ICity[]>;
  loader$: Observable<boolean>;
  #subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store<any>,
    private router: Router,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new RequestCityAction());
    this.cities$ = this.store.pipe(select(selectCity));
    this.loader$ = this.store.pipe(select(selectCitesLoader));
    this.#subscriptions.add(
      this.cities$.subscribe(val => {
        // console.log(val);
      })
    );
    this.#subscriptions.add(
      this.loader$.subscribe(val => {
        // console.log(val);
      })
    );

    // this.selectedCitiesTrigger([{id: 342, name: 'tmp'}]);
  }

  ngOnDestroy() {
    this.#subscriptions.unsubscribe();
  }

  selectedCitiesTrigger(cities: ICity[]): void {
    let string = '';
    cities.forEach((item, index, array) => {
      string += item.id;
      if (index < array.length - 1) {
        string += ',';
      }
    });
    if (string) {
      this.store.dispatch(new RequestCitiesWeatherAction({ ids: string }));
      this.router.navigateByUrl('/weather');
    } else {
      this.notificationsService.evokeToast(
        'Notice!',
        'City is not selected!',
        DialogLayoutDisplay.INFO
      );
    }
  }
}
