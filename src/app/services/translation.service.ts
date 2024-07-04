import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {APP_CONFIG} from '../config/app.config';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>(this.translate.currentLang || APP_CONFIG.DEFAULT_LANGUAGE);
  currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initTranslation();

    this.translate.onLangChange.subscribe((event) => {
      this.currentLangSubject.next(event.lang);
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

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

}
