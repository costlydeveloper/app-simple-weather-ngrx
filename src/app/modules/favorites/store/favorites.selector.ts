import {createFeatureSelector, createSelector, Selector} from '@ngrx/store';
import {IFavorites} from '../favorites.model';
import {favoritesStateName, IFavoritesModuleState} from './favorites.state';

const selectFavoritesModule= createFeatureSelector<IFavoritesModuleState>(favoritesStateName);

export const selectFavorites: Selector<object, IFavorites> = createSelector(
	selectFavoritesModule,
	(state: IFavoritesModuleState) => state.favorites
)
