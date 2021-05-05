import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IUser} from '../../modules/user/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoggedUserPermissionsService {

    private xToken: string | null = null;

    constructor(private router: Router, private store: Store<any>) {
        if (this.router.url.includes('auth')) {
            this.xToken = null;
            localStorage.clear();
        } else {
            if (!this.xToken) {
                this.xToken = localStorage.getItem('X-token');
            }
        }
    }

    async haveAccess(): Promise<boolean> {
        let securityLogoutCount = 0;

        while (this.xToken === null) {

            securityLogoutCount++;
            if (securityLogoutCount > 30) {
                // LOGOUT id data is missing
                this.logout();
                return false;
            } else {
                await this.__delay__(500);
            }
        }
        return true;
    }

    public logout(): void {
        this.router.navigate(['/']);
        localStorage.clear();
    }

    public setLoggedUser(_LoggedUser: IUser): void {
        this.xToken = _LoggedUser.email + new Date().toLocaleDateString();
        localStorage.setItem('X-token', this.xToken);
        this.router.navigate(['/weather']);
    }

    getLoggedUserToken(): string {
        return localStorage.getItem('X-token');
    }

    private __delay__(timer: number = 2000): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, timer);
        });
    }
}
