import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, switchMap} from 'rxjs';
import {API_CONFIG} from '../config/api.config';
import {Pokemon, PokemonListItem, PokemonSpecies, Type, PokemonListItemMultiLang, Name} from "../models/pokemon.interfaces";
import {TranslationService} from "./translation.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeapiFetchService {
  constructor(private http: HttpClient, private translationService: TranslationService) {
  }

  private baseUrl = API_CONFIG.baseURL;

  /*
  * Get all pokemons (name / url)
   */
  getAllPokemon(): Observable<{ results: PokemonListItem[] }> {
    console.log('fetching all pokemons');
    return this.http.get<{ results: PokemonListItem[] }>(`${API_CONFIG.pokemon}?offset=0&limit=10000`);
  }

  //TODO
  /*
  * Get all names of a pokemon-species by pokemon url
   */
//   getAllNamesOfPokemon(url:string):Observable<{ results: Name[] }>{
//
// }
  //TODO
  // getAllPokemonNamesMultiLang(): Observable<{ results: PokemonListItemMultiLang }> {
  //
  //
  // }

  /*
  * Get all details of a pokemon by api url
   */
  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  /*
 * Get all details of a pokemon by id
 */
  getPokemonDetailsById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${API_CONFIG.pokemon}/${id}`);
  }

  getAllPokemonSpecies(): Observable<{ results: PokemonListItem[] }> {
    console.log('fetching all pokemon species');
    return this.http.get<{ results: PokemonListItem[] }>(`${API_CONFIG.pokemon_species}?offset=0&limit=10000`);
  }

  /*
  * Get all details of a pokemon species by api url
   */
  getPokemonSpeciesDetails(url: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(url);
  }

  /*
  * Get all details of a pokemon species by id
   */
  getPokemonSpeciesDetailsById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${API_CONFIG.pokemon_species}/${id}`);
  }

  /*
  * Get details of a type by api url
   */
  getType(url: string): Observable<Type> {
    return this.http.get<Type>(url);
  }

  // COMBINING //
  /*
  * Get combined pokemon + pokemon species + type data by pokemon api url
   */
  getPokemonFullDetails(url: string): Observable<Pokemon> {
    return this.getPokemonDetails(url).pipe(
      switchMap(pokemon => {
        return this.getPokemonSpeciesDetails(pokemon.species.url).pipe(
          switchMap(species => {
            pokemon.species = species;
            const typeRequests = pokemon.types!.map(type => this.getType(type.type.url));
            return forkJoin(typeRequests).pipe(
              map(types => {
                pokemon.types = types;
                return pokemon;
              })
            );
          })
        );
      })
    );
  }

}
