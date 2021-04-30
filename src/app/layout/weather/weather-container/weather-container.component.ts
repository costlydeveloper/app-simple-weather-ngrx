import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ICity} from '../../../modules/city/city.model';
import {selectCity} from '../../../modules/city/store/city.selector';
import {ICityDailyWeather} from '../../../modules/daily-wether/daily-weather.model';
import {RequestDailyWeatherAction} from '../../../modules/daily-wether/store/daily-weather.actions';
import {selectDailyWeather, selectDailyWeatherLoader} from '../../../modules/daily-wether/store/daily-weather.selector';

@Component({
	selector   : 'app-weather-container',
	templateUrl: './weather-container.component.html',
	styleUrls  : ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

	cities$: Observable<ICity[]>;
	citiesDailyWeather$: Observable<ICityDailyWeather[]>;
	dailyWeatherLoader$: Observable<boolean>;
	cityName: string;

	constructor(private route: ActivatedRoute, private store: Store<any>) {
	}

	ngOnInit(): void {
		this.cities$             = this.store.pipe(select(selectCity));
		this.dailyWeatherLoader$ = this.store.pipe(select(selectDailyWeatherLoader));
		this.citiesDailyWeather$ = this.store.pipe(select(selectDailyWeather));


		this.route.paramMap.subscribe((params: ParamMap) => {
			this.cityName = params.get('city-name');

			this.cities$.subscribe(items => {
				const city = items.find((item) => {

					return item.name.toLowerCase() === this.cityName.toLowerCase();
				});

				if (city) {
					console.log('WeatherContainerComponent');
					this.store.dispatch(new RequestDailyWeatherAction({id: city.id}));
				}
			});
		});


	}
}
