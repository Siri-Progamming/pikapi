import { Injectable } from '@angular/core';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {Observable, tap} from "rxjs";
import {LoadingState} from "../models/loading-state.interface";
import {Pokemon, PokemonListItem} from "../models/pokemon.interfaces";
import {map} from "rxjs/operators";
import {toLoadingStateStream} from "../to-loading-state-stream";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
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
}
