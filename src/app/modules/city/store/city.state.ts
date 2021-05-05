import {ICity} from '../city.model';

export const cityStateName = 'city-module';


export interface ICityModuleState {
	cities: ICity[];
	cityLoader: boolean
}

export const initialCityModuleState: ICityModuleState = {
	cities: [],
	cityLoader: false
};
