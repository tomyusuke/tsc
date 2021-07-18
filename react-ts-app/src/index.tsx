import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function formatName(user: User){
  return `${user.firstName} ${user.lastName}`;
}

interface User {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

const user: User = {
  firstName: "toma",
  lastName: "yu",
  avatarUrl: "https://placehold.jp/150x150.png"
}

function getGreeting() {
  const greetingName = user? formatName(user): "stranger";
  return <h1>hello, {greetingName}!</h1>
}

const elementGreeting = getGreeting();
const elementImg = <img src={user.avatarUrl} alt="test" />
const elementCreateElement = React.createElement(
  "h1",
  {className: "greeting"},
  "こんにちは"
)

const element = (
  <div>
    <div id="1">{elementGreeting}</div>
    <div id="2">{elementImg}</div>
    <div id="3">{elementCreateElement}</div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
