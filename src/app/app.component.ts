import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import { TranslationService } from './services/TranslationService';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translationService: TranslationService) {}
  title = 'pikapi';

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
