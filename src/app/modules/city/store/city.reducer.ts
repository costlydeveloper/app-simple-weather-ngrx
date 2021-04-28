import {CityAction, CityActionType, RespondCityAction} from './city.actions';
import {ICityModuleState, initialCityModuleState} from './city.state';


export function cityReducer(
	oldState: ICityModuleState = initialCityModuleState,
	action: CityAction
): ICityModuleState {
	switch (action.type) {
		case CityActionType.REQUEST_CITIES: {
			const newState = {
				...oldState,
				cityLoader: true
			};

			return newState;
		}
		case CityActionType.RESPOND_CITIES: {
			const {cities }= (action as RespondCityAction).payload;

			const newState = {
				...oldState,
				cities,
				cityLoader: false
			};

			return newState;
		}
		default:
			return oldState;
	}
}
