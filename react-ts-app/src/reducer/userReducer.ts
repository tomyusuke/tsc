import React, { Dispatch } from 'react';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

export type UserState = {
  users: User[];
  selectedUser: User;
};

type SetUsers = {
  type: 'SetUsers';
  payload: User[];
};

type SelectedUser = {
  type: 'SelectedUser';
  payload: User;
};

type GetAllUsers = {
  type: 'GetAllUsers';
};

export type UserActions = SetUsers | GetAllUsers | SelectedUser;

export const userInitialState: UserState = {
  users: [],
  selectedUser: {} as User,
};

export const usersContext = React.createContext<{
  userState: UserState;
  userDispatch: Dispatch<UserActions>;
}>({
  userState: userInitialState,
  userDispatch: () => undefined,
});

export const userReducer = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {
    // case 'CreateUser': {
    //   const { firstName, lastName, age } = action.payload;
    //   return { users: [...state.users, { firstName, lastName, age }] };
    // }

    case 'SetUsers': {
      console.log([...state.users, ...action.payload]);
      return { users: [...action.payload], selectedUser: action.payload[0] };
    }

    case 'SelectedUser': {
      return { users: state.users, selectedUser: action.payload };
    }

    default:
      return state;
  }
};
