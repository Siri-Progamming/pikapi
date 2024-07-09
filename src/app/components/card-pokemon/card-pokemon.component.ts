import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon.interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  @Input() pokemon!: Pokemon;

  constructor(protected translationService: TranslationService) {
  }

}
