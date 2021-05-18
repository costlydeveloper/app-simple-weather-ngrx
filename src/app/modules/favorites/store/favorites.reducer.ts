import produce from 'immer';
import {
  AddFavoriteResponseAction,
  FavoritesAction,
  FavoritesActionTypes,
  RemoveFavoriteResponseAction,
  RespondFavoritesAction,
} from './favorites.actions';
import {
  IFavoritesModuleState,
  initialFavoritesModuleState,
} from './favorites.state';

export function favoritesReducer(
  oldState: IFavoritesModuleState = initialFavoritesModuleState,
  action: FavoritesAction
): IFavoritesModuleState {
  switch (action.type) {
    case FavoritesActionTypes.ADD_FAVORITE_RESPONSE: {
      const favorite = (action as AddFavoriteResponseAction).payload;

      /*let newState: IFavoritesModuleState = {
        ...oldState,
        favorites: {
          cityIDs: [...oldState.favorites.cityIDs, favorite]
        }
      };*/

      const newState: IFavoritesModuleState = produce(oldState, draftState => {
        draftState.favorites.cityIDs.push(favorite);
      });

      return newState;
    }
    case FavoritesActionTypes.REMOVE_FAVORITE_RESPONSE: {
      const favorite = (action as RemoveFavoriteResponseAction).payload;

      const newState: IFavoritesModuleState = produce(oldState, draftState => {
        const index = draftState.favorites.cityIDs.indexOf(favorite);
        if (index > -1) {
          draftState.favorites.cityIDs.splice(index, 1);
        }
      });

      return newState;
    }
    case FavoritesActionTypes.REQUEST_FAVORITES: {
      const newState: IFavoritesModuleState = {
        ...oldState,
      };

      return newState;
    }
    case FavoritesActionTypes.RESPONSE_FAVORITES: {
      const { favorites } = (action as RespondFavoritesAction).payload;
      const newState: IFavoritesModuleState = {
        ...oldState,
        favorites,
      };
      return newState;
    }
    default:
      return oldState;
  }
}
