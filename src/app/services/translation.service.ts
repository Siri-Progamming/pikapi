import {Injectable, signal, WritableSignal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG} from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: WritableSignal<string>;
  LANGUAGES = APP_CONFIG.SUPPORTED_LANGUAGES;
  constructor(private translate: TranslateService) {
    this.currentLang = signal<string>(this.translate.currentLang || APP_CONFIG.DEFAULT_LANGUAGE);

    this.initTranslation();

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });
  }

  private initTranslation() {
    Object.values(APP_CONFIG.SUPPORTED_LANGUAGES).forEach(lang => {
      this.translate.addLangs([lang]);
    });
    this.translate.setDefaultLang(APP_CONFIG.DEFAULT_LANGUAGE);
    this.translate.use(APP_CONFIG.DEFAULT_LANGUAGE);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  /*
* Translate for an object that contains Language interface in it.
 */
  getTranslation(items: any[], field: string, lang: string): string {
    const translation = items.find(item => item.language.name === lang);
    return translation ? translation[field] : 'N/A';
  }

  getTranslationAuto(items: any[], field: string): string {
    const translation = items.find(item => item.language.name === this.currentLang());
    return translation ? translation[field] : 'N/A';
  }

}
