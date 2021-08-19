import { css } from '@emotion/react';
import { useContext, useRef } from 'react';
import { Todo, TodosContext } from '../reducer/todoReducer';
import axios from 'axios';
import { usersContext } from '../reducer/userReducer';

export const TodoInput = () => {
  const { todoDispatch } = useContext(TodosContext);
  const { userState } = useContext(usersContext);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const submitFormAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      return;
    }
    axios
      .post<Todo>(`http://localhost:3001/todo/create/${userState.selectedUser.id}`, {
        title: inputRef.current.value,
      })
      .then((res) => {
        const { title, id } = res.data;
        todoDispatch({
          type: 'AddTodo',
          payload: {
            id,
            title,
          },
        });
      });
    inputRef.current.value = '';
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
