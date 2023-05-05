import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Skill } from "./Skill";
import { Wilder } from "./Wilder";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public wilderId: number;

  @Column()
  public skillId: number;

  @Column()
  public grade: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  public wilder: Wilder;

  @ManyToOne(() => Skill, (skill) => skill.grades)
  public skill: Skill;
}
