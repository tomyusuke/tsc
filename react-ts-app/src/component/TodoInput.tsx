import { useState, ChangeEvent, useContext, useRef } from 'react';
import { TodosContext } from './TodoApp';

export const TodoInput = () => {
  const context = useContext(TodosContext);
  const todos = context.todos;
  const setTodos = context.setTodos;
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const submitFormAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      return;
    }
    const i = new Date().getTime();
    const todolist = [...todos];
    todolist.push({
      id: i,
      title: inputRef.current.value,
      isFinished: false,
    });
    inputRef.current.value = '';
    setTodos(todolist);
  };

  return (
    <div className="input_container">
      <form onSubmit={submitFormAddTodo}>
        {<input ref={inputRef} type="text" />}
        <button>追加</button>
      </form>
    </div>
  );
};
