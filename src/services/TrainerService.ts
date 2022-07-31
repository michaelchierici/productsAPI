import { getRepository } from "typeorm";
import { AppError } from "../@types/AppError";
import { Pokemon } from "../entity/Pokemon";
import { Trainer } from "../entity/Trainer";

export class TrainerService {
  static async create(name: string, password: string) {
    const trainerRepository = getRepository(Trainer);
    const trainer = await trainerRepository.findOne({
      where: { name },
    });
    if (!trainer) {
      const user = trainerRepository.create({ name, password });
      await trainerRepository.save(user);
      console.log(user);
      return user;
    }
    if (trainer) {
      console.log(401, "usuário existente");
    }
  }

  static async findAll() {
    const trainerRepository = getRepository(Trainer);
    const trainers = await trainerRepository.find();
    return trainers;
  }

  static async findOne(id: any) {
    const trainerRepository = getRepository(Trainer);
    const trainer = await trainerRepository.findOne(id);
    console.log(trainer, `Esse treinador se chama ${trainer.name}`);
    return trainer;
  }

  static async update(id: any, name: string) {
    const trainerRepository = getRepository(Trainer);
    const trainer = await trainerRepository.findOne(id);
    const trainerUpdated = trainerRepository.merge(trainer, {
      name,
    });
    await trainerRepository.save(trainerUpdated);
    console.log(`alterou o nome para ${trainerUpdated.name}`);
    return trainerUpdated;
  }
  static async delete(id: any) {
    const trainerRepository = getRepository(Pokemon);
    const trainer = await trainerRepository.findOne(id);
    const trainerDeleted = await trainerRepository.softRemove(trainer);
    console.log(trainerDeleted, `${trainer.name} excluído com sucesso`);
  }
}
