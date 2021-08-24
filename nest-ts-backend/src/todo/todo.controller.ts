import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { DeleteResult } from 'typeorm';
import { Todo } from 'src/entities/Todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Post('create')
  async create(@Body() todoDto: TodoDto): Promise<Todo> {
    return this.service.create(todoDto);
  }

  @Get('/:id')
  async all(@Param('id') userId: string): Promise<Todo[]> {
    return this.service.allByUser(userId);
  }

  @Delete('/:id')
  async delete(@Param('id') userId: string): Promise<DeleteResult> {
    return this.service.deleteAllByUser(userId);
  }
}
