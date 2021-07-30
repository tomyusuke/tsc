import * as React from 'react';
import { useState } from 'react';
import { TodoTab } from './TodoTab';
import '../styles/todo.css';
import { TodoInput } from './TodoInput';

export type Todo = {
  id: number;
  title: string;
  isFinished: boolean;
};

export const TodosContext = React.createContext(
  {} as {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }
);

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: 'title1',
      isFinished: false,
    },
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <TodoInput />
      <TodoTab />
    </TodosContext.Provider>
  );
};
