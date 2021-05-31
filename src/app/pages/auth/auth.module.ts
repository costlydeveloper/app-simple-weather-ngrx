import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nJsonLoader } from '../../modules/i18n/i18n-json-loader';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: new I18nJsonLoader().set('auth'),
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class AuthModule {}
