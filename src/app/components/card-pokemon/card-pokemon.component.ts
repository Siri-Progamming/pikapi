import {Component, Input} from '@angular/core';
import {Name, Pokemon} from "../../models/pokemon.interfaces";
import {NgForOf, NgIf} from "@angular/common";

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

  getTranslatedName(names: Name[], lang: string): string {
    const translatedName = names.find(name => name.language.name === lang);
    return translatedName ? translatedName.name : 'N/A';
  }
}
