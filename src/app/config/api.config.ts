const baseURL = 'https://pokeapi.co/api/v2';
export const API_CONFIG = {
  baseURL: baseURL,
  pokemon: baseURL + '/pokemon',
  //https://pokeapi.co/api/v2/type?offset=0&limit=21
  poke_type: baseURL + '/type',
  pokemon_species: baseURL + '/pokemon-species',
};


//https://pokeapi.co/api/v2/pokemon/10034/
// Cool pour les sprites, cries, forms pour la traduction du nom (/pokemon-form/), stats, types

//https://pokeapi.co/api/v2/pokemon-species/6/
// Cool pour les traductions des noms, evolutions, la génération d'apparition, habitat, id, is_baby, is_legendary, is_mythical, varieties (méga évolutions etc)
