import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PokeapiFetchService {
  private baseUrl = API_CONFIG.baseURL;

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number = 0, limit: number): Observable<any> {
    //https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }
}
