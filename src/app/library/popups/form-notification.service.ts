import { Injectable } from '@angular/core';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class FormNotificationService {
  #langs: any;

  constructor(
    readonly translate: TranslateService,
    private notificationsService: NotificationsService
  ) {
    this.translate.stream('FORM_VALIDATION').subscribe(context => {
      this.#langs = context;
    });
  }

  validationError() {
    this.notificationsService.forceSingleToast(
      this.#langs['ERROR']['TITLE'],
      this.#langs['ERROR']['MESSAGE'],
      DialogLayoutDisplay.WARNING
    );
  }
}
