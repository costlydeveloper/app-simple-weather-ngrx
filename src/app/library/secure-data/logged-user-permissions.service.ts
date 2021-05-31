import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from '../../modules/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserPermissionsService {
  private xToken: string = null;

  constructor(private router: Router, private store: Store<any>) {
    if (this.router.url.includes('auth')) {
      this.xToken = null;
      localStorage.removeItem('X-token');
    } else {
      if (!this.xToken) {
        this.xToken = localStorage.getItem('X-token');
      }
    }
  }

  async haveAccess(): Promise<boolean> {
    const isUserLogged: boolean = !!this.getLoggedUserToken();
    return Promise.resolve(isUserLogged);
  }

  public logout(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('X-token');
  }

  public setLoggedUser(_LoggedUser: IUser): void {
    this.xToken = _LoggedUser.email + new Date().toLocaleDateString();
    localStorage.setItem('X-token', this.xToken);
    this.router.navigate(['/weather']);
  }

  getLoggedUserToken(): string {
    const XToken = localStorage.getItem('X-token');
    if (XToken) {
      return localStorage.getItem('X-token');
    } else {
      this.logout();
      return null;
    }
  }

  getLoggedUserEmail(): string {
    const XToken = localStorage.getItem('X-token');
    if (XToken) {
      return localStorage.getItem('X-token').slice(0, -10);
    } else {
      this.logout();
      return null;
    }
  }
}
