import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggedUserPermissionsService } from '../../library/secure-data/logged-user-permissions.service';
import { Favorites, IFavorites } from './favorites.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private userService: LoggedUserPermissionsService) {}

  getFavorites(): Observable<IFavorites> {
    const key: string = `fav-${this.userService
      .getLoggedUserEmail()
      ?.toLowerCase()}`;
    let favorites = JSON.parse(localStorage.getItem(key));
    if (!favorites) {
      favorites = new Favorites();
      localStorage.setItem(key, JSON.stringify(favorites));
    }
    return of(favorites);
  }

  addFavorite(_favorite: number): Observable<number> {
    const key: string = `fav-${this.userService
      .getLoggedUserEmail()
      ?.toLowerCase()}`;
    let favorites: IFavorites = JSON.parse(localStorage.getItem(key));
    favorites.cityIDs.push(_favorite);
    localStorage.setItem(key, JSON.stringify(favorites));
    return of(_favorite);
  }

  removeFavorite(_favorite: number): Observable<number> {
    const key: string = `fav-${this.userService
      .getLoggedUserEmail()
      ?.toLowerCase()}`;
    let favorites: IFavorites = JSON.parse(localStorage.getItem(key));

    const index = favorites.cityIDs.indexOf(_favorite);
    if (index > -1) {
      favorites.cityIDs.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(favorites));
      return of(_favorite);
    }
  }
}
