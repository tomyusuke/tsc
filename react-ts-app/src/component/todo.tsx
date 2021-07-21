import { useState, ChangeEvent } from 'react';
import '../styles/todo.css';

type Todo = {
  id: number;
  title: string;
  isFinished: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      title: 'title1',
      isFinished: false,
    },
  ]);

  const [inputVal, setInputVal] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const onClickAddTodo = () => {
    if (inputVal === '') {
      return;
    }
    const i = new Date().getTime();
    const todolist = todos;
    todolist.push({
      id: i,
      title: inputVal,
      isFinished: false,
    });
    setInputVal('');
    setTodos(todolist);
  };

  const doneTodo = (key: Todo['id']) => {
    const remainingTodos = todos.map((todo: Todo) => {
      const isFinish = todo.id === key ? !todo.isFinished : todo.isFinished;
      const newTodo = {
        ...todo,
        isFinished: isFinish,
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
    <div className="todolist">
      <h1 className="title">TODOLIST</h1>
      <div className="input_container">
        <input type="text" value={inputVal} onChange={onChangeInput} />
        <button onClick={() => onClickAddTodo()}>追加</button>
      </div>
      <hr />
      <div className="todo_container">
        {todos.map((todo: Todo) => {
          return (
            <div key={todo.id} className={todo.isFinished ? 'todo done' : 'todo'}>
              <button
                className="btn_done"
                onClick={() => {
                  doneTodo(todo.id);
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
    </div>
  );
};
