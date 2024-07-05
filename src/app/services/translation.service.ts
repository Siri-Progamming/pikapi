import {Injectable, signal, WritableSignal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG} from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: WritableSignal<string>;

  constructor(private translate: TranslateService) {
    this.currentLang = signal<string>(this.translate.currentLang || APP_CONFIG.DEFAULT_LANGUAGE);

    this.initTranslation();

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });
  }

  private initTranslation() {
    this.translate.addLangs(APP_CONFIG.SUPPORTED_LANGUAGES);
    this.translate.setDefaultLang(APP_CONFIG.DEFAULT_LANGUAGE);
    this.translate.use(APP_CONFIG.DEFAULT_LANGUAGE);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
