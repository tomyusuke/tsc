import * as React from 'react';
import { useReducer, Dispatch } from 'react';
import { TodoTab } from './TodoTab';
import '../styles/todo.css';
import { TodoInput } from './TodoInput';
import { todoReducer } from './todoReducer';
import { initialState, State } from './state';
import { Actions } from './actions';

export const TodosContext = React.createContext<{
  state: State;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoInput />
      <TodoTab />
    </TodosContext.Provider>
  );
};
