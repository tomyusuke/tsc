import { useContext } from 'react';
import { Todo, TodosContext } from './TodoApp';
import * as React from 'react';

type Props = {
  isFinished: boolean;
};

export const TodoList: React.FC<Props> = ({ isFinished }) => {
  const context = useContext(TodosContext);
  const todos = context.todos;
  const displayTodos = context.todos.filter((todo: Todo) => {
    return todo.isFinished === isFinished;
  });
  const setTodos = context.setTodos;

  const finishTodo = (key: Todo['id']) => {
    const remainingTodos = todos.map((todo: Todo) => {
      const isFinished = todo.id === key ? !todo.isFinished : todo.isFinished;
      const newTodo = {
        ...todo,
        isFinished,
      };
      return newTodo;
    });
    setTodos(remainingTodos);
  };

  const deleteTodo = (key: Todo['id']) => {
    const remainingTodos = todos.filter((todo: Todo) => {
      return todo.id !== key;
    });
    setTodos(remainingTodos);
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
