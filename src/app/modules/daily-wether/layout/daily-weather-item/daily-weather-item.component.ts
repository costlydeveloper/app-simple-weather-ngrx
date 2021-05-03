import {Component, Input, OnInit} from '@angular/core';
import {ICityDailyWeather, IDailyWeatherList} from '../../daily-weather.model';
import * as moment from 'moment';

@Component({
  selector: 'app-daily-weather-item',
  templateUrl: './daily-weather-item.component.html',
  styleUrls: ['./daily-weather-item.component.scss']
})
export class DailyWeatherItemComponent implements OnInit {

  @Input() cityDailyWeather: ICityDailyWeather;

  weatherList: DisplayWeatherItem[];


  constructor() { }

  ngOnInit(): void {
    this.weatherList = this.cityDailyWeather.list.filter(item => item.dt_txt.endsWith('12:00:00')).map(item => {
        const dayName = moment(item.dt_txt).format('ddd');
        return {
          dayName: dayName,
          iconURL: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          tempMax: `${item.main.temp_max}°`,
          tempMin: `${item.main.temp_min}°`,
        }
    })
  }
}

interface DisplayWeatherItem {
  dayName: string;
  iconURL: string;
  tempMax: string;
  tempMin: string;
}
