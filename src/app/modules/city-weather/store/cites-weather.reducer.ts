import {
  CityWeatherAction,
  CityWeatherActionType,
  RespondCitiesWeatherAction,
} from './cites-weather.actions';
import {
  ICityWeatherModuleState,
  initialCityWeatherModuleState,
} from './cites-weather.state';

export function citesWeatherReducer(
  oldState: ICityWeatherModuleState = initialCityWeatherModuleState,
  action: CityWeatherAction
): ICityWeatherModuleState {
  switch (action.type) {
    case CityWeatherActionType.REQUEST_CITIES_WEATHER: {
      const newState = {
        ...oldState,
        cityWeatherLoader: true,
      };

      return newState;
    }
    case CityWeatherActionType.RESPOND_CITIES_WEATHER: {
      const {
        citiesWeatherResponse,
      } = (action as RespondCitiesWeatherAction).payload;

      const newState = {
        ...oldState,
        citiesWeather: citiesWeatherResponse.list,
        cityWeatherLoader: false,
      };

      return newState;
    }
    default:
      return oldState;
  }
}
