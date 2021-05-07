import { Action } from '@ngrx/store';
import { IFavoritesModuleState } from './favorites.state';

export const enum FavoritesActionTypes {
  REQUEST_FAVORITES = '[FAVORITES_MODULE] REQUEST_FAVORITES',
  RESPONSE_FAVORITES = '[FAVORITES_MODULE] RESPONSE_FAVORITES',
  ADD_FAVORITE = '[FAVORITES_MODULE] ADD_FAVORITE',
  ADD_FAVORITE_RESPONSE = '[FAVORITES_MODULE] ADD_FAVORITE_RESPONSE',
  REMOVE_FAVORITE = '[FAVORITES_MODULE] REMOVE_FAVORITE',
  REMOVE_FAVORITE_RESPONSE = '[FAVORITES_MODULE] REMOVE_FAVORITE_RESPONSE',
}

export class RequestFavoritesAction implements Action {
  readonly type: FavoritesActionTypes = FavoritesActionTypes.REQUEST_FAVORITES;
}

export class RespondFavoritesAction implements Action {
  readonly type: FavoritesActionTypes = FavoritesActionTypes.RESPONSE_FAVORITES;

  constructor(public payload: IFavoritesModuleState) {}
}

export class AddFavoriteAction implements Action {
  readonly type: FavoritesActionTypes = FavoritesActionTypes.ADD_FAVORITE;

  constructor(public payload: number) {}
}

export class AddFavoriteResponseAction implements Action {
  readonly type: FavoritesActionTypes =
    FavoritesActionTypes.ADD_FAVORITE_RESPONSE;

  constructor(public payload: number) {}
}

export class RemoveFavoriteAction implements Action {
  readonly type: FavoritesActionTypes = FavoritesActionTypes.REMOVE_FAVORITE;

  constructor(public payload: number) {}
}

export class RemoveFavoriteResponseAction implements Action {
  readonly type: FavoritesActionTypes =
    FavoritesActionTypes.REMOVE_FAVORITE_RESPONSE;

  constructor(public payload: number) {}
}

export type FavoritesAction =
  | RequestFavoritesAction
  | AddFavoriteAction
  | AddFavoriteResponseAction
  | RemoveFavoriteAction
  | RemoveFavoriteResponseAction
  | RespondFavoritesAction;
