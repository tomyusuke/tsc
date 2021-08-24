import { IsNotEmpty } from 'class-validator';
import { Todo } from 'src/entities/Todo';

export class UserAccountDto {
  id: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  age: number;

  todos: Todo[];

  createdAt?: Date;

  updatedAt?: Date;
}
