import * as React from 'react';
import { useReducer } from 'react';
import { TodoTab } from './TodoTab';
import '../styles/todo.css';
import { TodoInput } from './TodoInput';
import { todoInitialState, todoReducer } from '../reducer/todoReducer';
import { TodosContext } from '../reducer/todoReducer';
import { TodoUserSelectBox } from './TodoUserSelectBox';
import { usersContext, userReducer, userInitialState } from '../reducer/userReducer';
import { UserRegisterDialog } from './UserRegisterDialog';

export const TodoApp = () => {
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  return (
    <TodosContext.Provider value={{ todoState, todoDispatch }}>
      <usersContext.Provider value={{ userState, userDispatch }}>
        <p>
          <TodoUserSelectBox />
          <UserRegisterDialog />
        </p>
        <TodoInput />
        <TodoTab />
      </usersContext.Provider>
    </TodosContext.Provider>
  );
};
