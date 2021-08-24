import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/Todo';
import { UserAccount } from 'src/entities/UserAccount';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, UserAccount])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
