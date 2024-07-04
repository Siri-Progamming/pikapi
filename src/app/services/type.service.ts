import {Injectable} from '@angular/core';
import {PokeapiFetchService} from "./pokeapi.fetch.service";
import {Observable, tap} from "rxjs";
import {LoadingState} from "../models/loading-state.interface";
import {Type} from "../models/pokemon.interfaces";
import {toLoadingStateStream} from "../to-loading-state-stream";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private pokeApiFetchService: PokeapiFetchService) {
  }

  getType(url: string): Observable<LoadingState<Type>> {
    const data$ = this.pokeApiFetchService.getType(url).pipe(
      tap(response => console.log('type.service.ts getType response:', response))
    );
    return toLoadingStateStream(data$);
  }

}
