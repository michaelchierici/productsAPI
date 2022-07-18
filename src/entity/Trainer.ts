import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity("trainer")
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.trainer)
  @JoinColumn()
  pokemons: Pokemon[];
}
