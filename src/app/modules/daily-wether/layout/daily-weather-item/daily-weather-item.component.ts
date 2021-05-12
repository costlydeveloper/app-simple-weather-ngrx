import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ICityDailyWeather } from '../../daily-weather.model';
import { DisplayWeatherItem, OneDayWeather } from './interface';

@Component({
  selector: 'app-daily-weather-item',
  templateUrl: './daily-weather-item.component.html',
  styleUrls: ['./daily-weather-item.component.scss'],
})
export class DailyWeatherItemComponent implements OnInit, OnChanges {
  @Input() cityDailyWeather: ICityDailyWeather;
  @Input() dayParam: string;
  weatherList: DisplayWeatherItem[];
  specificDayWeatherList: OneDayWeather[];
  moduleRoute: string = this.router.url.split('/')[1];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.weatherList = this.cityDailyWeather.list
      .filter((item) => item.dt_txt.endsWith('12:00:00'))
      .map((item) => {
        const dayName = moment(item.dt_txt).format('ddd');
        return {
          dayName: dayName,
          iconURL: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          tempMax: `${item.main.temp_max}°`,
          tempMin: `${item.main.temp_min}°`,
        };
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dayParam'].currentValue && this.dayParam) {
      this.specificDayWeatherList = this.cityDailyWeather.list
        .filter((item) => moment(item.dt_txt).format('ddd') === this.dayParam)
        .map((item) => {
          const hour = moment(item.dt_txt).format('HH:mm');
          return {
            hour: hour,
            iconURL: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            temp: `${item.main.temp}°`,
          };
        });
    }
  }
}
