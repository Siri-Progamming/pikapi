import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {LoadingState} from "../models/loading-state.interface";
import {toLoadingStateStream} from '../to-loading-state-stream';
import {Pokemon} from "../models/pokemon.interfaces";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private pokeApiFetchService: PokeapiFetchService) {
  }

  /*
  * Get combined pokemon + pokemon species data by pokemon api url
   */
  getPokemonFullDetails(url: string): Observable<LoadingState<Pokemon>> {
    const data$ = this.pokeApiFetchService.getPokemonFullDetails(url).pipe(
      tap(response => console.log('pokeapi.service.ts getPokemonFullDetails response:', response))
    );
    return toLoadingStateStream(data$);
  }
}
