import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trainer")
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  pokemons: string;
}
