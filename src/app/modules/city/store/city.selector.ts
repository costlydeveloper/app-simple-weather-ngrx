import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { ICity } from '../city.model';
import { cityStateName, ICityModuleState } from './city.state';

const selectCityModule = createFeatureSelector<ICityModuleState>(cityStateName);

export const selectCity: Selector<object, ICity[]> = createSelector(
  selectCityModule,
  (state: ICityModuleState) => state.cities
);
export const selectCitesLoader: Selector<object, boolean> = createSelector(
  selectCityModule,
  (state: ICityModuleState) => state.cityLoader
);
