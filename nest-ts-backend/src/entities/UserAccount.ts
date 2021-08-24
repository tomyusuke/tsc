import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from './Todo';

@Entity()
export class UserAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Todo, (todo) => todo.userAccount)
  todos: Todo[];

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt?: Date;
}
