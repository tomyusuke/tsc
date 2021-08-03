import { State } from './state';
import { Actions } from './actions';
export const todoReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'AddTodo': {
      const { id, title } = action.payload;
      return { todos: [...state.todos, { id, title, isFinished: false }] };
    }

    case 'FinishTodo': {
      const { id } = action.payload;
      return {
        todos: state.todos.map((todo) => {
          const isFinished = todo.id === id ? !todo.isFinished : todo.isFinished;
          return { ...todo, isFinished };
        }),
      };
    }

    case 'DeleteTodo': {
      const { id } = action.payload;
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
