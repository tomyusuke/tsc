import * as express from 'express';
import { TodoController, UpdateTodoInput } from '../controller/TodoController';
import { Request } from 'express';

const todoRouter = express.Router();

todoRouter.post('/create/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { title } = req.body;
    const todoController = new TodoController();
    const todo = await todoController.createTodo(userId, title);
    res.status(200).send(todo);
  } catch {
    res.status(500).end();
  }
});

todoRouter.put('/update/:todoId', async (req, res) => {
  try {
    const currentKeys = ['title', 'isFinished'];
    let updateTodoInput = Object.keys(req.body).reduce(
      (acc, cur) => {
        return currentKeys.includes(cur) ? { ...acc, [cur]: req.body[cur] } : acc;
      },
      { id: req.params.todoId } as UpdateTodoInput
    );
    if (Object.keys(updateTodoInput).length === 1) throw 'no update contents';
    const todoController = new TodoController();
    const todo = await todoController.updateTodo(updateTodoInput);
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

todoRouter.get('/all', async (req, res) => {
  try {
    const todoController = new TodoController();
    const todo = await todoController.all();
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

todoRouter.get('/:todoId', async (req, res) => {
  try {
    const todoController = new TodoController();
    const todo = await todoController.oneByTodoId(req.params.todoId);
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

todoRouter.get('/user/:userId', async (req, res) => {
  try {
    const todoController = new TodoController();
    const todo = await todoController.allByUserId(req.params.userId);
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

todoRouter.delete('/:todoId', async (req, res) => {
  try {
    const todoController = new TodoController();
    const todo = await todoController.deleteTodoByTodoId(req.params.todoId);
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

todoRouter.delete('/user/:userId', async (req, res) => {
  try {
    const todoController = new TodoController();
    const todo = await todoController.deleteTodoByUserId(req.params.userId);
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
});

export { todoRouter };
