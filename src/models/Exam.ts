import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import User from './User';

@Entity('exams')
class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @Column()
  cocaine: number;

  @Column()
  amphetamine: number;

  @Column()
  methamphetamine: number;

  @Column()
  mda: number;

  @Column()
  mdma: number;

  @Column()
  thc: number;

  @Column()
  morphine: number;

  @Column()
  codeine: number;

  @Column()
  heroin: number;

  @Column()
  benzoylecgonine: number;

  @Column()
  cocaethylene: number;

  @Column()
  norcocaine: number;

  @Column()
  exam_result: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Exam
