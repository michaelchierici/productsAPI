import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { Trainer } from "./Trainer";

@Entity("List")
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (list) => list.product)
  @JoinColumn()
  product: Product[];

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
