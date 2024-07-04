import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PokemonListItem} from "../../models/pokemon.interfaces";

@Component({
  selector: 'app-pokemon-name-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pokemon-name-list.component.html',
  styleUrl: './pokemon-name-list.component.css'
})
export class PokemonNameListComponent {
  @Input() pokemons!: PokemonListItem[];
  @Output() selectPokemon: EventEmitter<string> = new EventEmitter<string>();

  sendSelectedPokemon(url: string): void {
    this.selectPokemon.emit(url);
  }

}
