import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import {Pokemon, PokemonListItem} from "../interfaces/pokemon.interfaces";
import {TranslationService} from "./translation.service";

@Injectable({
  providedIn: 'root'
})
export class PokeapiFetchService {
  constructor(private http: HttpClient, private translationService: TranslationService) { }
  private baseUrl = API_CONFIG.baseURL;

  /*
  * Get all pokemons (name / url)
   */
  getAllPokemon(): Observable<{ results: PokemonListItem[] }> {
    console.log('fetching all pokemons');
    return this.http.get<{ results: PokemonListItem[] }>(`${API_CONFIG.pokemon}?offset=0&limit=10000`);
  }

  /*
  * Get all details of a pokemon by api url
   */
  getPokemonDetails(url:string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  /*
 * Get all details of a pokemon by id
 */
  getPokemonDetailsById(id:number): Observable<any> {
    return this.http.get(`${API_CONFIG.pokemon}/${id}`);
  }

  getAllPokemonSpecies(): Observable<{ results: PokemonListItem[] }> {
    console.log('fetching all pokemon species');
    return this.http.get<{ results: PokemonListItem[] }>(`${API_CONFIG.pokemon_species}?offset=0&limit=10000`);
  }

  /*
  * Get all details of a pokemon species by api url
   */
  getPokemonSpeciesDetails(url:string): Observable<any> {
    return this.http.get(url);
  }

  /*
  * Get all details of a pokemon species by id
   */
  getPokemonSpeciesDetailsById(id:number): Observable<any> {
    return this.http.get(`${API_CONFIG.pokemon_species}/${id}`);
  }
}
