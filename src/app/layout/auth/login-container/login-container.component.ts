import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { FormNotificationService } from '../../../library/popups/form-notification.service';
import { LoggedUserPermissionsService } from '../../../library/secure-data/logged-user-permissions.service';
import { I18nSuperclass } from '../../../modules/i18n/superclass/i18n.superclass';
import { IUser, User } from '../../../modules/user/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent extends I18nSuperclass implements OnInit {
  user: IUser = new User();
  formIsValid: boolean = false;

  constructor(
    readonly translate: TranslateService,
    private store: Store<any>,
    private loggedUserPermissionService: LoggedUserPermissionsService,
    private formNotification: FormNotificationService
  ) {
    super(store, translate);
  }

  ngOnInit(): void {
    localStorage.removeItem('X-token');
  }

  validation(_isValid?: boolean): void {
    this.formIsValid = _isValid;
  }

  onFormChange(_formUser: IUser): void {
    this.user = _formUser;
  }

  onSubmit(): void {
    if (this.formIsValid) {
      this.loggedUserPermissionService.setLoggedUser(this.user);
    } else {
      this.formNotification.validationError();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }
}
