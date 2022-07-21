import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pokemon } from "./Pokemon";
import { Trainer } from "./Trainer";

@Entity("List")
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, (list) => list.pokemon)
  @JoinColumn()
  pokemon: Pokemon[];

  @ManyToOne(() => Trainer, (list) => list.trainer)
  @JoinColumn()
  trainer: Trainer[];

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;
}
