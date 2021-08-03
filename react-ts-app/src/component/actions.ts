type AddTodo = {
  type: 'AddTodo';
  payload: { id: number; title: string };
};

type FinishTodo = {
  type: 'FinishTodo';
  payload: { id: number };
};

type DeleteTodo = {
  type: 'DeleteTodo';
  payload: { id: number };
};

export type Actions = AddTodo | FinishTodo | DeleteTodo;
