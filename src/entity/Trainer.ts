import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { List } from "./List";

import * as bcrypt from "bcrypt";
@Entity("trainer")
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => List, (pokemons) => pokemons.trainer)
  trainer: List[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
