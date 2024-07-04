import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import {TranslationService} from './services/translation.service';
import {PokeapiService} from "./services/pokeapi.service";
import {BehaviorSubject, combineLatest, Observable, of} from "rxjs";
import {LoadingState} from "./models/loading-state.interface";
import {AsyncPipe, CommonModule} from "@angular/common";
import {CardPokemonComponent} from "./components/card-pokemon/card-pokemon.component";
import {Pokemon, PokemonListItem} from "./models/pokemon.interfaces";
import {PokemonSearchBarComponent} from "./components/pokemon-search-bar/pokemon-search-bar.component";
import {map} from "rxjs/operators";
import {PokemonNameListComponent} from "./components/pokemon-name-list/pokemon-name-list.component";
import {PokemonService} from "./services/pokemon.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, AsyncPipe, CommonModule, CardPokemonComponent, PokemonSearchBarComponent, PokemonNameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService, private pokeApiService: PokeapiService,
              private pokemonService: PokemonService) {
  }

  title = 'pikapi';
  currentLang = '';
  childSearch = new BehaviorSubject<string>('');
  pokemonsState$: Observable<LoadingState<PokemonListItem[]>> = of({state: 'loading'});
  pokemonSelectedState$: Observable<LoadingState<Pokemon>> = of({state: 'loading'});
  pokemonFiltered$: Observable<LoadingState<PokemonListItem[]>> = of({state: 'loading'});

  ngOnInit(): void {
    this.pokemonsState$ = this.pokemonService.getAllPokemon();
    this.pokemonFiltered$ = combineLatest([this.pokemonsState$, this.childSearch.asObservable()]).pipe(
      map(([pokemonsState, searchValue]) => {
        if ((pokemonsState.state == 'loaded') && searchValue.trim() !== '') {
          const filteredData = pokemonsState.data.filter(pokemon =>
            pokemon.name.toLowerCase().startsWith(searchValue.toLowerCase())
          );
          return {...pokemonsState, data: filteredData};
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

  loadSelectedPokemon(url: string) {
    this.pokemonSelectedState$ = this.pokeApiService.getPokemonFullDetails(url);
  }

  receiveSearch(searchValue: string): void {
    this.childSearch.next(searchValue);
  }
}
