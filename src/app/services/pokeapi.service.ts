import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PokeapiFetchService} from "./pokeapi.fetch.service";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  constructor(private pokeApiFetchService: PokeapiFetchService) {
  }

  getPokemonList(offset: number = 0, limit: number): Observable<any> {
    return this.pokeApiFetchService.getPokemonList(offset, limit);
  }
}
