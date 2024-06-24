export interface Pokemon {
  types: Type[] | null;
}

export interface Type {
  //https://pokeapi.co/api/v2/type/10/
  id: number;
  name: string;
  //TRAD : names
  double_damage_from: Type[];
  double_damage_to: Type[];
  half_damage_from: Type[];
  half_damage_to: Type[];
  no_damage_from: Type[];
  no_damage_to: Type[];
}
