import {Action} from '@ngrx/store';
import {IDailyWeatherAPIResponse} from '../daily-weather.model';

export const enum DailyWeatherActionType {
	REQUEST_DAILY_WEATHER  = '[DAILY_WEATHER MODULE] REQUEST_DAILY_WEATHER',
	RESPONSE_DAILY_WEATHER = '[DAILY_WEATHER MODULE] RESPONSE_DAILY_WEATHER',
}

export class RequestDailyWeatherAction implements Action {
	readonly type: DailyWeatherActionType = DailyWeatherActionType.REQUEST_DAILY_WEATHER;

	constructor(public payload: { id: number }) {
	}
}

export class RespondDailyWeatherAction implements Action {
	readonly type: DailyWeatherActionType = DailyWeatherActionType.RESPONSE_DAILY_WEATHER;

	constructor(public payload: { dailyWeatherResponse: IDailyWeatherAPIResponse }) {
	}
}

export type DailyWeatherAction =
	RequestDailyWeatherAction
	| RespondDailyWeatherAction;
