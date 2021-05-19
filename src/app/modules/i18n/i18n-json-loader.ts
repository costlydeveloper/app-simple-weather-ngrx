import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ITranslationResource } from 'ngx-translate-multi-http-loader/lib/multi-http-loader';

export class I18nJsonLoader {
  set = (..._sourceFolders) => (http: HttpClient): MultiTranslateHttpLoader => {
    const resources: ITranslationResource[] = [];
    _sourceFolders.forEach(folder => {
      resources.push({ prefix: `./assets/i18n/${folder}/`, suffix: '.json' });
    });

    return new MultiTranslateHttpLoader(http, resources);
  };
}
