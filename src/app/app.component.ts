import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import { TranslationService } from './services/TranslationService';
import {PokeapiService} from "./services/pokeapi.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translationService: TranslationService, private pokeApiService: PokeapiService) {}
  title = 'pikapi';
  pokemons = this.pokeApiService.getPokemonList(0,1500).subscribe((response) =>{
    //response.results.map(p => p.name)
  });

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
