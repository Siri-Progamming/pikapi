export interface PokemonListItem {
  name:string;
  url:string;
}

export interface Pokemon {
  id: number;
  is_default: boolean;
  name: string;
  species: PokemonSpecies;
  sprites: sprites;
  types: Type[] | null;
  weight: number;
  height: number;
}

export interface sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  //y'en a d'autres
}
export interface PokemonSpecies {
  id: number;
  name: string; //trad! names/language name fr -> /name
  capture_rate: number;
  color: string; //trad sur https://pokeapi.co/api/v2/pokemon-color/5/
  //evolution_chain
  //evolves_from_species
  //flavor_text_entries
  gender_rate: number;
  genera:string; //trad! /language contains fr -> /genus
  generation: string;
  growth_rate: string; //trad https://pokeapi.co/api/v2/growth-rate/4/
  habitat: string; //trad https://pokeapi.co/api/v2/pokemon-habitat/4/
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  shape: string; //trad https://pokeapi.co/api/v2/pokemon-shape/8/
  url: string;
}
export interface Type {
  //https://pokeapi.co/api/v2/type/10/
  slot: number;
  id: number;
  name: string; //TRAD : names
  double_damage_from: Type[];
  double_damage_to: Type[];
  half_damage_from: Type[];
  half_damage_to: Type[];
  no_damage_from: Type[];
  no_damage_to: Type[];
}
