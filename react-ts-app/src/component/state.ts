export type Todo = {
  id: number;
  title: string;
  isFinished: boolean;
};

export type State = {
  todos: Todo[];
};

export const initialState: State = { todos: [] };
