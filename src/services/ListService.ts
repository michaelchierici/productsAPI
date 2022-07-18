import { getRepository } from "typeorm";
import { List } from "../entity/List";
import { Pokemon } from "../entity/Pokemon";
import { Trainer } from "../entity/Trainer";

export class ListService {
  static async findList(trainerId: any) {
    const listRepository = getRepository(List);
    const lists = await listRepository.find({
      relations: ["pokemon"],
      where: {
        trainer: {
          id: trainerId,
        },
      },
    });
    console.log(lists.length, "pokemons encontrados na lista");
    return lists;
  }

  static add(trainer: any, pokemon: any) {
    const listRepository = getRepository(List);
    const list = listRepository.create({ trainer, pokemon });
    listRepository.save(list);
    console.log(list);
    return list;
  }

  static async delete(id: any) {
    const listRepository = getRepository(List);
    const list = await listRepository.findOne(id);
    const listDeleted = await listRepository.softRemove(list);
    console.log(`lista ${listDeleted} com sucesso`);
  }
}
