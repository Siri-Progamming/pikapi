import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import {TranslationService} from './services/translation.service';
import {PokeapiService} from "./services/pokeapi.service";
import {Observable, of} from "rxjs";
import {LoadingState} from "./interfaces/loading-state.interface";
import {AsyncPipe} from "@angular/common";
import {CommonModule} from '@angular/common';
import {CardPokemonComponent} from "./components/card-pokemon/card-pokemon.component";
import {Pokemon, PokemonListItem} from "./interfaces/pokemon.interfaces";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, AsyncPipe, CommonModule, CardPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'pikapi';
  currentLang = '';
  pokemonsState$: Observable<LoadingState<PokemonListItem[]>> = of({state: 'loading'});
  pokemonSelectedState$: Observable<LoadingState<Pokemon>> = of({state: 'loading'});

  constructor(private translationService: TranslationService, private pokeApiService: PokeapiService) {
  }

  ngOnInit(): void {
    this.pokemonsState$ = this.pokeApiService.getAllPokemon();
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }

  handleClickOnPokemonListItem(url: string) {
    this.pokemonSelectedState$ = this.pokeApiService.getPokemonDetails(url);
  }
}
