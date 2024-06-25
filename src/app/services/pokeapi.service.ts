import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {LoadingState} from "../interfaces/loading-state.interface";
import {toLoadingStateStream} from '../to-loading-state-stream';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private pokeApiFetchService: PokeapiFetchService) {
  }

  getPokemonList(offset: number, limit: number): Observable<LoadingState<any>> {
    const data$ = this.pokeApiFetchService.getPokemonList(offset, limit).pipe(
      map(response => response.results)
    );
    return toLoadingStateStream(data$);
  }
}
