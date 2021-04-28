import {Component, OnInit} from '@angular/core';
import {DialogLayoutDisplay, ToastNotificationInitializer} from '@costlydeveloper/ngx-awesome-popup';
import {LoggedUserPermissionsService} from '../../../library/secure-data/logged-user-permissions.service';
import {LibraryValidation} from '../../../library/validation/vaidation';
import {IUser, User} from '../../../modules/user/user.model';

@Component({
	selector   : 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls  : ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

	user: IUser                                                = new User();
	toastValidationIsReady                                     = true;
	stringValidation: LibraryValidation.Class.StringValidation = new LibraryValidation.Class.StringValidation();

	constructor(private loggedUserPermissionService: LoggedUserPermissionsService) {
	}

	ngOnInit(): void {
		localStorage.clear();
	}


	validation(): boolean {
		return this.stringValidation.email(this.user.email)
			&& this.stringValidation.password(this.user.password);
	}

	onSubmit(): void {

		if (this.validation()) {
			this.loggedUserPermissionService.setLoggedUser(this.user);
		} else {
			this.toastValidationError();
		}

	}

	toastValidationError() {
		if (this.toastValidationIsReady) {
			this.toastValidationIsReady = false;
			const newToastNotification  = new ToastNotificationInitializer();
			newToastNotification.setTitle('Warning!');
			newToastNotification.setMessage('Form is not valid!');
			newToastNotification.setConfig({
				LayoutType: DialogLayoutDisplay.WARNING
			});
			newToastNotification.openToastNotification$().subscribe(resp => {
				this.toastValidationIsReady = true;
			});
		}
	}
}
