import { useContext, useEffect } from 'react';
import { usersContext } from '../reducer/userReducer';
import axios from 'axios';

export const TodoUserSelectBox = () => {
  const { userState, userDispatch } = useContext(usersContext);

  useEffect(() => {
    axios.get('http://localhost:3001/user/').then((users) => {
      userDispatch({
        type: 'SetUsers',
        payload: users.data,
      });
    });
  }, []);

  const selectUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUser = userState.users.find((a) => {
      return a.id === e.target.value;
    });
    if (selectedUser === undefined) throw new Error('user undefined');
    userDispatch({
      type: 'SelectedUser',
      payload: selectedUser,
    });
  };

  const options = userState.users.map((user) => {
    console.log('optionsRender');
    return (
      <option key={user.id} value={user.id}>
        {user.firstName}
      </option>
    );
  });

  return (
    <div>
      <select
        name="user"
        id="userSelectBox"
        value={userState.selectedUser.id}
        onChange={(e) => {
          selectUser(e);
        }}
      >
        {options}
      </select>
    </div>
  );
};
