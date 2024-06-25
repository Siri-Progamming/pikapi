import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import {TranslationService} from './services/translation.service';
import {PokeapiService} from "./services/pokeapi.service";
import {Observable, of} from "rxjs";
import {LoadingState} from "./interfaces/loading-state.interface";
import {AsyncPipe} from "@angular/common";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService, private pokeApiService: PokeapiService) {
  }
  title = 'pikapi';
  pokemonsState$: Observable<LoadingState<any[]>> = of({ state: 'loading' });

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }

  ngOnInit(): void {
    this.pokemonsState$ = this.pokeApiService.getPokemonList(0, 1500);
  }
}
