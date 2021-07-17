import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function formatName(user: Obj_user){
  return user.firstName + " " + user.lastName;
}

interface Obj_user {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

const user: Obj_user = {
  firstName: "toma",
  lastName: "yu",
  avatarUrl: "https://placehold.jp/150x150.png"
}

function getGreeting(user: Obj_user) {
  if(user){
    return <h1>hello, {formatName(user)}!</h1>
  }
  return <h1>hello, stranger!</h1>
}

const element_div = (
  <div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
  </div>
);
const element_img = <img src={user.avatarUrl} alt="test" />
const element = getGreeting(user);
const element_createElement = React.createElement(
  "h1",
  {className: "greeting"},
  "こんにちは"
)

ReactDOM.render(
  element_div,
  document.getElementById("root")
)

ReactDOM.render(
  element,
  document.getElementById("1")
);

ReactDOM.render(
  element_img,
  document.getElementById("2")
);

ReactDOM.render(
  element_createElement,
  document.getElementById("3")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
