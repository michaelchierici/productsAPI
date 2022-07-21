import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Trainer } from "./Trainer";

@Entity("refresh_token")
export class RefreshToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  experesIn: number;

  @Column()
  @CreateDateColumn()
  createdAt?: Date;

  @OneToOne(() => Trainer, (coach) => coach.refreshToken)
  @JoinColumn()
  trainer: Trainer;

  @Column()
  @UpdateDateColumn()
  updatedAt?: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt?: Date;
}
