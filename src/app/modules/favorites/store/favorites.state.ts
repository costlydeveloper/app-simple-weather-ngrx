import {Favorites, IFavorites} from '../favorites.model';

export const favoritesStateName = 'favorites-module';

export interface IFavoritesModuleState {
	favorites: IFavorites;
}

export const initialFavoritesModuleState: IFavoritesModuleState = {
	favorites: new Favorites()
};
