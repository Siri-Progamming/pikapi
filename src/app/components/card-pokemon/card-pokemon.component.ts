import {Component, Input} from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon.interfaces";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  @Input() pokemon!: Pokemon;
}
