import { Injectable } from '@angular/core';
import {
  DialogLayoutDisplay,
  ToastNotificationInitializer,
} from '@costlydeveloper/ngx-awesome-popup';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private singleToastIsReady = true;

  forceSingleToast(
    _title: string,
    _message: string,
    _colorType: DialogLayoutDisplay
  ): void {
    if (this.singleToastIsReady) {
      this.singleToastIsReady = false;
      const newToastNotification = new ToastNotificationInitializer();
      newToastNotification.setTitle(_title);
      newToastNotification.setMessage(_message);
      newToastNotification.setConfig({
        LayoutType: _colorType,
      });
      const sub = newToastNotification
        .openToastNotification$()
        .subscribe(resp => {
          this.singleToastIsReady = true;
          sub.unsubscribe();
        });
    }
  }

  evokeToast(
    _title: string,
    _message: string,
    _colorType: DialogLayoutDisplay
  ): void {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle(_title);
    newToastNotification.setMessage(_message);
    newToastNotification.setConfig({
      LayoutType: _colorType,
    });
    newToastNotification.openToastNotification$();
  }
}
