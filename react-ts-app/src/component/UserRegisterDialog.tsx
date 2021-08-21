import { useState, ChangeEvent, useContext } from 'react';
import { User, usersContext } from '../reducer/userReducer';
import { css } from '@emotion/react';
import axios from 'axios';

export const UserRegisterDialog = () => {
  const { userState, userDispatch } = useContext(usersContext);

  const [isShown, setIsShown] = useState(false);
  const [user, setUser] = useState({ firstName: '', lastName: '', age: 0 });
  const [registerStatus, setregisterStatus] = useState<RegiStatus>('DEFFOLT');
  type RegiStatus = 'Ok' | 'ERROR' | 'DEFFOLT';

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitFormRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.firstName === '' || user.lastName === '' || user.age === 0) {
      return;
    }
    axios
      .post<User>(`http://localhost:3001/user/register`, {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
      })
      .then((user) => {
        axios.get('http://localhost:3001/user/').then((users) => {
          userDispatch({
            type: 'SetUsers',
            payload: users.data,
          });
        });
        setUser({ firstName: '', lastName: '', age: 0 });
        setregisterStatus('Ok');
      })
      .catch((e) => {
        setregisterStatus('ERROR');
        console.log(e);
      });
  };

  const overlay = css({
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const dialog = css({
    zIndex: 2,
    width: '50%',
    padding: '1em',
    backgroundColor: '#fff',
  });

  const invisible = css({
    visibility: 'hidden',
  });

  return (
    <>
      <button
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        ユーザー登録
      </button>
      <div css={isShown ? '' : invisible}>
        <div
          css={overlay}
          onClick={() => {
            setIsShown(!isShown);
            setregisterStatus('DEFFOLT');
          }}
        >
          <div
            css={dialog}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form action="" onSubmit={submitFormRegisterUser}>
              <p>
                <label>
                  性：
                  <input
                    type="text"
                    name="firstName"
                    onChange={onChangeInput}
                    value={user.firstName}
                  />
                </label>
              </p>
              <p>
                <label>
                  名：
                  <input
                    type="text"
                    name="lastName"
                    onChange={onChangeInput}
                    value={user.lastName}
                  />
                </label>
              </p>
              <p>
                <label>
                  歳：
                  <input type="number" name="age" onChange={onChangeInput} value={user.age} />
                </label>
              </p>
              <p>
                <button>登録</button>
                {registerStatus === 'Ok' && <span>登録しました</span>}
                {registerStatus === 'ERROR' && (
                  <span>登録に失敗しました。時間をおいてまたしてね。</span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
