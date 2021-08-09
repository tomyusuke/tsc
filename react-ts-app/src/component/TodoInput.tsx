import { css } from '@emotion/react';
import { useContext, useRef } from 'react';
import { TodosContext } from './TodoApp';

export const TodoInput = () => {
  const { dispatch } = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const submitFormAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      return;
    }
    const id = new Date().getTime();
    dispatch({
      type: 'AddTodo',
      payload: {
        id,
        title: inputRef.current.value,
      },
    });
    inputRef.current.value = '';
  };

  const Test = css({
    color: 'red',
  });

  return (
    <div className="input_container">
      <form onSubmit={submitFormAddTodo}>
        {<input ref={inputRef} type="text" />}
        <button css={Test}>追加</button>
      </form>
    </div>
  );
};
