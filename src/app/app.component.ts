import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import {TranslationService} from './services/translation.service';
import {PokeapiService} from "./services/pokeapi.service";
import {BehaviorSubject, combineLatest, filter, Observable, of, switchMap, tap} from "rxjs";
import {LoadingState} from "./models/loading-state.interface";
import {AsyncPipe} from "@angular/common";
import {CommonModule} from '@angular/common';
import {CardPokemonComponent} from "./components/card-pokemon/card-pokemon.component";
import {Pokemon, PokemonListItem} from "./models/pokemon.interfaces";
import {PokemonSearchBarComponent} from "./components/pokemon-search-bar/pokemon-search-bar.component";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, AsyncPipe, CommonModule, CardPokemonComponent, PokemonSearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService, private pokeApiService: PokeapiService) {
  }

  title = 'pikapi';
  currentLang = '';
  childSearch = new BehaviorSubject<string>('');
  pokemonsState$: Observable<LoadingState<PokemonListItem[]>> = of({state: 'loading'});
  pokemonSelectedState$: Observable<LoadingState<Pokemon>> = of({state: 'loading'});
  pokemonFiltered$: Observable<LoadingState<PokemonListItem[]>> = of({state: 'loading'});

  ngOnInit(): void {
    this.pokemonsState$ = this.pokeApiService.getAllPokemon();
    this.pokemonFiltered$ = combineLatest([this.pokemonsState$, this.childSearch.asObservable()]).pipe(
      map(([pokemonsState, searchValue]) => {
        if (pokemonsState.state == 'loaded') {
          if (searchValue.trim() !== '') {
            const filteredData = pokemonsState.data.filter(pokemon =>
              pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase())
            );
            return {...pokemonsState, data: filteredData};
          }
        }
        return pokemonsState;
      })
    );
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }

  handleClickOnPokemonListItem(url: string) {
    this.pokemonSelectedState$ = this.pokeApiService.getPokemonFullDetails(url);
  }

  receiveSearch(searchValue: string): void {
    this.childSearch.next(searchValue);
  }
}
