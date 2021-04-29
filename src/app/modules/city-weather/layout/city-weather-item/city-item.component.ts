
import {Component, Input} from '@angular/core';
import {ICityWeather} from '../../cites-weather.model';

@Component({
  selector: 'app-city-weather-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityWeatherItemComponent {
  @Input() cityWeatherItem: ICityWeather;
}
