import { useContext, useEffect } from 'react';
import { TodosContext } from '../reducer/todoReducer';
import * as React from 'react';
import { Todo } from './state';
import axios from 'axios';
import { usersContext } from '../reducer/userReducer';

type Props = {
  isFinished: boolean;
};

export const TodoList: React.FC<Props> = ({ isFinished }) => {
  const { todoState, todoDispatch } = useContext(TodosContext);
  const { userState } = useContext(usersContext);

  useEffect(() => {
    if (userState.selectedUser.id) {
      axios
        .get<Todo[]>(`http://localhost:3001/todo/user/${userState.selectedUser.id}`)
        .then((todos) => {
          todoDispatch({ type: 'SetTodo', payload: { todos: todos.data } });
          console.log(todos);
        });
    }
  }, [userState]);

  const displayTodos = todoState.todos.filter((todo: Todo) => {
    return todo.isFinished === isFinished;
  });

  const finishTodo = (id: Todo['id'], isFinished: Todo['isFinished']) => {
    todoDispatch({
      type: 'FinishTodo',
      payload: { id, isFinished },
    });
  };

  const deleteTodo = (id: Todo['id']) => {
    todoDispatch({
      type: 'DeleteTodo',
      payload: { id },
    });
  };

  return (
    <div className="todo_container">
      {displayTodos.map((todo: Todo) => {
        return (
          <div key={todo.id} className={todo.isFinished ? 'todo done' : 'todo'}>
            <button
              className="btn_done"
              onClick={() => {
                finishTodo(todo.id, todo.isFinished);
              }}
            >
              ✔
            </button>
            <div>{todo.title}</div>
            <button
              className="btn_delete"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              削除
            </button>
          </div>
        );
      })}
    </div>
  );
};
