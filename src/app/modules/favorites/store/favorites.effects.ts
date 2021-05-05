import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {IFavorites} from '../favorites.model';
import {FavoritesService} from '../favorites.service';
import {AddFavoriteAction, AddFavoriteResponseAction, FavoritesActionTypes, RemoveFavoriteAction, RemoveFavoriteResponseAction, RequestFavoritesAction, RespondFavoritesAction} from './favorites.actions';

@Injectable()
export class FavoritesEffects {
	@Effect()
	requestFavorites$: Observable<Action> = this.actions$.pipe(
		ofType<RequestFavoritesAction>(FavoritesActionTypes.REQUEST_FAVORITES),
		switchMap(action => {
				return this.favoritesService.getFavorites().pipe(
					map((response: IFavorites) => {
						return new RespondFavoritesAction({favorites: response});
					})
				);
			}
		)
	);
	@Effect()
	addFavorite$: Observable<Action> = this.actions$.pipe(
		ofType<AddFavoriteAction>(FavoritesActionTypes.ADD_FAVORITE),
		switchMap(action => {
			const favorite: number = (action as AddFavoriteAction).payload;
				return this.favoritesService.addFavorite(favorite).pipe(
					map((response: number) => {
						return new AddFavoriteResponseAction(response);
					})
				);
			}
		)
	);
	@Effect()
	removeFavorite$: Observable<Action> = this.actions$.pipe(
		ofType<RemoveFavoriteAction>(FavoritesActionTypes.REMOVE_FAVORITE),
		switchMap(action => {
			const favorite: number = (action as RemoveFavoriteAction).payload;
				return this.favoritesService.removeFavorite(favorite).pipe(
					map((response: number) => {
						return new RemoveFavoriteResponseAction(response);
					})
				);
			}
		)
	);

	constructor(
		private readonly actions$: Actions,
		private readonly favoritesService: FavoritesService
	) {

	}
}
