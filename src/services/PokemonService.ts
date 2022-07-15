import { getRepository } from "typeorm";
import { Pokemon } from "../entity/Pokemon";

export class PokemonService {
  static create(name: string, type: string, trainer: string) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = pokemonRepository.create({ name, type, trainer });
    pokemonRepository.save(pokemon);
    return pokemon;
  }

  static async findAll() {
    const pokemonRepository = getRepository(Pokemon);
    const pokemons = await pokemonRepository.find();
    console.log(pokemons, "pokemons encontrados");
    return pokemons;
  }

  static async findOne(id: number) {
    const pokemonRepository = getRepository(Pokemon);
    const pokemon = await pokemonRepository.findOne(id);
    console.log(pokemon, "um pokemon encontrado");
    return pokemon;
  }
}
