import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { UserAccount } from './UserAccount';

@Entity({ name: 'todo' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'is_finished', default: false })
  isFinished: boolean;

  @Column({ name: 'user_account_id' })
  userAccountId: string;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.todos)
  @JoinColumn({ name: 'user_account_id' })
  userAccount: UserAccount;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt?: Date;

  constructor(
    title: string,
    isFinished: boolean,
    userAccountId: string,
    userAccount: UserAccount,
  ) {
    this.title = title;
    this.isFinished = isFinished;
    this.userAccountId = userAccountId;
    this.userAccount = userAccount;
  }
}
