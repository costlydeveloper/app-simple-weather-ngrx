import {DailyWeatherAction, DailyWeatherActionType, RespondDailyWeatherAction} from './daily-weather.actions';
import {IDailyWeatherModuleState, initialDailyWeatherModuleState} from './daily-weather.state';

export function dailyWeatherReducer(
	oldState: IDailyWeatherModuleState = initialDailyWeatherModuleState,
	action: DailyWeatherAction): IDailyWeatherModuleState {
	switch (action.type) {
		case DailyWeatherActionType.REQUEST_DAILY_WEATHER: {
			const newState = {
				...oldState,
				dailyWeatherLoader: true
			};
			return newState;
		}
		case DailyWeatherActionType.RESPONSE_DAILY_WEATHER: {
			const {dailyWeatherResponse} = (action as RespondDailyWeatherAction).payload;

			const newState = {
				...oldState,

				// TODO napraviti immutable
				dailyWeather: [...oldState.dailyWeather, {
					list: dailyWeatherResponse.list,
					city: dailyWeatherResponse.city
				}],
				dailyWeatherLoader: false
			};

			return newState;
		}

		default:
			return oldState;

	}
}
