import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/entities/Todo';
import { Repository } from 'typeorm';
import { TodoDto } from './dto/todo.dto';
import { UserAccount } from '../entities/UserAccount';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
    @InjectRepository(UserAccount)
    private readonly userRepo: Repository<UserAccount>,
  ) {}

  async allByUser(id: string): Promise<Todo[]> {
    const userAccount = await this.userRepo.findOneOrFail(id);
    return this.todoRepo.find({
      where: { userAccount },
      relations: ['userAccount'],
    });
  }

  async create(data: TodoDto): Promise<Todo> {
    const userAccount = await this.userRepo.findOneOrFail(data.userAccountId);
    return this.todoRepo.save(
      new TodoDto(data.title, data.isFinished, data.userAccountId, userAccount),
    );
  }

  async deleteAllByUser(id: string) {
    const userAccount = await this.userRepo.findOneOrFail(id);
    const todosIdToDelete: string[] = [];
    await this.todoRepo
      .find({
        select: ['id'],
        where: { userAccount },
        relations: ['userAccount'],
      })
      .then((arr) => {
        arr.forEach((obj) => {
          todosIdToDelete.push(obj.id);
        });
      });
    return this.todoRepo.delete(todosIdToDelete);
  }
}
