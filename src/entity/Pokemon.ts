import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pokemon")
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  trainer: string;
}
