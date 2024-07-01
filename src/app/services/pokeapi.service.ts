import {Injectable} from '@angular/core';
import {Observable, of, switchMap, tap} from 'rxjs';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {LoadingState} from "../interfaces/loading-state.interface";
import {toLoadingStateStream} from '../to-loading-state-stream';
import {map} from "rxjs/operators";
import {Pokemon, PokemonListItem, PokemonSpecies} from "../interfaces/pokemon.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private pokeApiFetchService: PokeapiFetchService) {
  }

  getAllPokemon(): Observable<LoadingState<PokemonListItem[]>> {
    const data$ = this.pokeApiFetchService.getAllPokemon().pipe(
      tap(response => console.log('pokeapi.service.ts getAllPokemon response:', response.results)),
      map(response => response.results)
    );

    return toLoadingStateStream(data$);
  }

  getPokemonDetails(url: string): Observable<LoadingState<Pokemon>> {
    const data$ = this.pokeApiFetchService.getPokemonDetails(url).pipe(
      tap(response => console.log('pokeapi.service.ts getPokemonDetails response:', response))
    );
    return toLoadingStateStream(data$);
  }

  getPokemonDetailsById(id: number): Observable<LoadingState<Pokemon>> {
    const data$ = this.pokeApiFetchService.getPokemonDetailsById(id);
    return toLoadingStateStream(data$);
  }

  getAllPokemonSpecies(): Observable<LoadingState<PokemonListItem[]>> {
    const data$ = this.pokeApiFetchService.getAllPokemonSpecies().pipe(
      tap(response => console.log('pokeapi.service.ts getAllPokemonSpecies response:', response.results)),
      map(response => response.results)
    );
    return toLoadingStateStream(data$);
  }

  getPokemonSpeciesDetails(url: string): Observable<LoadingState<PokemonSpecies>> {
    const data$ = this.pokeApiFetchService.getPokemonSpeciesDetails(url).pipe(
      tap(response => console.log('pokeapi.service.ts getPokemonSpeciesDetails response:', response))
    );
    return toLoadingStateStream(data$);
  }

  /*
  * Get combined pokemon + pokemon species data by pokemon api url
   */
  getPokemonFullDetails(url: string): Observable<LoadingState<Pokemon>> {
    const data$ = this.pokeApiFetchService.getPokemonWithSpeciesDetails(url).pipe(
      tap(response => console.log('pokeapi.service.ts getPokemonFullDetails response:', response))
    );
    return toLoadingStateStream(data$);
  }

}
