import { Component, OnInit } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { ToastNotification } from '../../../library/popups/toast';
import { LoggedUserPermissionsService } from '../../../library/secure-data/logged-user-permissions.service';
import { LibraryValidation } from '../../../library/validation/vaidation';
import { IUser, User } from '../../../modules/user/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  user: IUser = new User();
  toastValidationIsReady = true;
  stringValidation: LibraryValidation.Class.StringValidation = new LibraryValidation.Class.StringValidation();
  toastNotification = new ToastNotification();

  constructor(
    private loggedUserPermissionService: LoggedUserPermissionsService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  validation(): boolean {
    return (
      this.stringValidation.email(this.user.email) &&
      this.stringValidation.password(this.user.password)
    );
  }

  onSubmit(): void {
    if (this.validation()) {
      this.loggedUserPermissionService.setLoggedUser(this.user);
    } else {
      this.toastNotification.forceSingleToast(
        'Warning!',
        'Form is not valid!',
        DialogLayoutDisplay.WARNING
      );
    }
  }
}
