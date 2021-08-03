import { useContext } from 'react';
import { TodosContext } from './TodoApp';
import * as React from 'react';
import { Todo } from './state';

type Props = {
  isFinished: boolean;
};

export const TodoList: React.FC<Props> = ({ isFinished }) => {
  const { state, dispatch } = useContext(TodosContext);
  const displayTodos = state.todos.filter((todo: Todo) => {
    return todo.isFinished === isFinished;
  });

  const finishTodo = (id: Todo['id']) => {
    dispatch({
      type: 'FinishTodo',
      payload: { id },
    });
  };

  const deleteTodo = (id: Todo['id']) => {
    dispatch({
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
                finishTodo(todo.id);
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
