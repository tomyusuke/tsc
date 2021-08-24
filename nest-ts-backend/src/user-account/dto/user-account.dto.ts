import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Todo } from 'src/entities/Todo';

export class UserAccountDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  todos: Todo[];

  createdAt?: Date;

  updatedAt?: Date;
}
