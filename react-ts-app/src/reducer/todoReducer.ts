import axios from 'axios';
import React, { Dispatch } from 'react';
import { User } from './userReducer';

///////

export type Todo = {
  id: number;
  title: string;
  isFinished: boolean;
};

export type TodoState = {
  todos: Todo[];
};

///////

type SetTodo = {
  type: 'SetTodo';
  payload: TodoState;
};

type AddTodo = {
  type: 'AddTodo';
  payload: { id: number; title: string };
};

type FinishTodo = {
  type: 'FinishTodo';
  payload: { id: number; isFinished: boolean };
};

type DeleteTodo = {
  type: 'DeleteTodo';
  payload: { id: number };
};

export type todoActions = SetTodo | AddTodo | FinishTodo | DeleteTodo;

///////

export const todoInitialState: TodoState = { todos: [] };

export const TodosContext = React.createContext<{
  todoState: TodoState;
  todoDispatch: Dispatch<todoActions>;
}>({
  todoState: todoInitialState,
  todoDispatch: () => undefined,
});

export const todoReducer = (state: TodoState, action: todoActions): TodoState => {
  switch (action.type) {
    case 'SetTodo': {
      return action.payload;
    }

    case 'AddTodo': {
      const { id, title } = action.payload;
      return { todos: [...state.todos, { id, title, isFinished: false }] };
    }

    case 'FinishTodo': {
      const { id, isFinished } = action.payload;
      axios
        .put(`http://localhost:3001/todo/update/${id}`, { isFinished: !isFinished })
        .then((res) => console.log(res));
      return {
        todos: state.todos.map((todo) => {
          const isFinished = todo.id === id ? !todo.isFinished : todo.isFinished;
          return { ...todo, isFinished };
        }),
      };
    }

    case 'DeleteTodo': {
      const { id } = action.payload;
      axios.delete(`http://localhost:3001/todo/${id}`).then((res) => {
        console.log(res);
      });
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      };
    }

    default:
      return state;
  }
};
