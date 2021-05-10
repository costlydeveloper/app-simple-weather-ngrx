import { Component, OnInit } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { NotificationsService } from '../../../library/popups/notifications.service';
import { LoggedUserPermissionsService } from '../../../library/secure-data/logged-user-permissions.service';
import { IUser, User } from '../../../modules/user/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  user: IUser = new User();
  formIsValid: boolean = false;

  constructor(
    private loggedUserPermissionService: LoggedUserPermissionsService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  validation(_isValid?: boolean): void {
    this.formIsValid = _isValid;
  }

  onSubmit(): void {
    if (this.formIsValid) {
      this.loggedUserPermissionService.setLoggedUser(this.user);
    } else {
      this.notificationsService.forceSingleToast(
        'Warning!',
        'Form is not valid!',
        DialogLayoutDisplay.WARNING
      );
    }
  }
}
