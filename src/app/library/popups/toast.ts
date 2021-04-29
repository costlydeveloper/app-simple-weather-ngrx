import {DialogLayoutDisplay, ToastNotificationInitializer} from '@costlydeveloper/ngx-awesome-popup';

export class ToastNotification {

	private singleToastIsReady = true;

	forceSingleToast(_title: string, _message: string, _colorType: DialogLayoutDisplay) {
		if (this.singleToastIsReady) {
			this.singleToastIsReady    = false;
			const newToastNotification = new ToastNotificationInitializer();
			newToastNotification.setTitle(_title);
			newToastNotification.setMessage(_message);
			newToastNotification.setConfig({
				LayoutType: _colorType
			});
			newToastNotification.openToastNotification$().subscribe(resp => {
				this.singleToastIsReady = true;
			});
		}
	}


}
