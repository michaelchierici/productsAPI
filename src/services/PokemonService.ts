export class PokemonService {
  static create(id: number, name: string, type: string, trainer: string) {
    console.log(id, name, type, trainer);
  }

  static findAll() {
    console.log("aqui está os pokemons");
  }
}
