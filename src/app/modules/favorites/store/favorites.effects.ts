import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { NotificationsService } from '../../../library/popups/notifications.service';
import { IFavorites } from '../favorites.model';
import { FavoritesService } from '../favorites.service';
import {
  AddFavoriteAction,
  AddFavoriteResponseAction,
  FavoritesActionTypes,
  RemoveFavoriteAction,
  RemoveFavoriteResponseAction,
  RequestFavoritesAction,
  RespondFavoritesAction,
} from './favorites.actions';

@Injectable()
export class FavoritesEffects {
  @Effect()
  requestFavorites$: Observable<Action> = this.actions$.pipe(
    ofType<RequestFavoritesAction>(FavoritesActionTypes.REQUEST_FAVORITES),
    switchMap((action) => {
      return this.favoritesService.getFavorites().pipe(
        map(
          (response: IFavorites) =>
            new RespondFavoritesAction({ favorites: response })
        ),
        catchError(() =>
          of({ type: FavoritesActionTypes.RESPONSE_FAVORITES_ERROR }).pipe(
            tap((resp) => {
              this.notificationsService.evokeToast(
                'Error',
                'API error!',
                DialogLayoutDisplay.DANGER
              );
            })
          )
        )
      );
    })
  );
  @Effect()
  addFavorite$: Observable<Action> = this.actions$.pipe(
    ofType<AddFavoriteAction>(FavoritesActionTypes.ADD_FAVORITE),
    switchMap((action) => {
      const favorite: number = (action as AddFavoriteAction).payload;
      return this.favoritesService.addFavorite(favorite).pipe(
        map((response: number) => new AddFavoriteResponseAction(response)),
        catchError(() =>
          of({ type: FavoritesActionTypes.ADD_FAVORITE_RESPONSE_ERROR }).pipe(
            tap((resp) => {
              this.notificationsService.evokeToast(
                'Error',
                'API error!',
                DialogLayoutDisplay.DANGER
              );
            })
          )
        )
      );
    })
  );
  @Effect()
  removeFavorite$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveFavoriteAction>(FavoritesActionTypes.REMOVE_FAVORITE),
    switchMap((action) => {
      const favorite: number = (action as RemoveFavoriteAction).payload;
      return this.favoritesService.removeFavorite(favorite).pipe(
        map((response: number) => new RemoveFavoriteResponseAction(response)),
        catchError(() =>
          of({
            type: FavoritesActionTypes.REMOVE_FAVORITE_RESPONSE_ERROR,
          }).pipe(
            tap((resp) => {
              this.notificationsService.evokeToast(
                'Error',
                'API error!',
                DialogLayoutDisplay.DANGER
              );
            })
          )
        )
      );
    })
  );

  constructor(
    private notificationsService: NotificationsService,
    private readonly actions$: Actions,
    private readonly favoritesService: FavoritesService
  ) {}
}
