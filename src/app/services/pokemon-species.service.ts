import {Injectable} from '@angular/core';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {Observable, tap} from "rxjs";
import {LoadingState} from "../models/loading-state.interface";
import {PokemonListItem, PokemonSpecies} from "../models/pokemon.interfaces";
import {map} from "rxjs/operators";
import {toLoadingStateStream} from "../to-loading-state-stream";

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  constructor(private pokeApiFetchService: PokeapiFetchService) {
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
}
