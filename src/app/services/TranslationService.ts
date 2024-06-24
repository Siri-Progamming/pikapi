import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.initTranslation();
  }

  private initTranslation() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('fr');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang); // Change la langue active
  }
}
