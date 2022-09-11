import { getRepository } from "typeorm";
import { List } from "../entity/List";

export class ListService {
  static async findList(trainerId: any) {
    const listRepository = getRepository(List);
    const lists = await listRepository.find({
      relations: ["product"],
      where: {
        trainer: {
          id: trainerId,
        },
      },
    });
    return lists;
  }

  static add(trainer: any, product: any) {
    const listRepository = getRepository(List);
    const list = listRepository.create({ trainer, product });
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
