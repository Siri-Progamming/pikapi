import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG} from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.initTranslation();
  }

  private initTranslation() {
    this.translate.addLangs(APP_CONFIG.SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang(APP_CONFIG.DEFAULT_LANGUAGE);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
