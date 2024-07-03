import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-search-bar.component.html',
  styleUrl: './pokemon-search-bar.component.css'
})
export class PokemonSearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  sendSearch(e: KeyboardEvent): void {
    const htmlElement = e.target as HTMLInputElement;
    this.search.emit(htmlElement.value);
  }
}
