import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { Todo } from '../entity/Todo';
import { UserAccount } from '../entity/UserAccount';

export type UpdateTodoInput = {
  id: string;
  title?: string;
  isFinished?: boolean;
};

export class TodoController {
  private todoRepository = getRepository(Todo);
  private userRepository = getRepository(UserAccount);

  //CreateWithUser
  async createTodo(userId: string, title: string) {
    const user = await this.userRepository.findOne(userId);
    return this.todoRepository.save(new Todo(title, false, user.id, user));
  }

  //ReadAll
  async all() {
    return this.todoRepository.find();
  }

  //ReadAllByUser
  async allByUserId(userAccountId: string) {
    const userAccount = await this.userRepository.findOne(userAccountId);
    return this.todoRepository.find({ where: { userAccount }, relations: ['userAccount'] });
  }

  //ReadOneByTodoId
  async oneByTodoId(todoId: string) {
    return this.todoRepository.findOne(todoId);
  }

  //Update
  async updateTodo(input: UpdateTodoInput) {
    const todo = await this.todoRepository.findOneOrFail({ where: { id: input.id } });
    return this.todoRepository.save({
      ...todo,
      ...input,
    });
  }

  //DeleteAllByUser
  async deleteTodoByUserId(userAccountId: string) {
    const userAccount = await this.userRepository.findOne(userAccountId);
    let todosToDelete = [];
    await this.todoRepository
      .find({
        where: { userAccount },
        relations: ['userAccount'],
      })
      .then((arr) => {
        arr.forEach((obj) => {
          todosToDelete.push(obj.id);
        });
      });
    return this.todoRepository.delete(todosToDelete);
  }

  //DeleteOne
  async deleteTodoByTodoId(todoId: string) {
    return this.todoRepository.delete(todoId);
  }
}
