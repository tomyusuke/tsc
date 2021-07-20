import ReactDOM from 'react-dom';
import React from 'react';

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


function tick(){
  const element = (
    <div>
      <h1>hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById("4"))
}
setInterval(tick, 1000)

function WelcomeFunc(props: WelcomeFuncProps) {
  return <h1>hello, {props.name}</h1>;
}

type WelcomeFuncProps = {
  name: string
}

const elementGreeting = getGreeting();
const elementImg = <img src={user.avatarUrl} alt="test" />
const elementCreateElement = React.createElement(
  "h1",
  {className: "greeting"},
  "こんにちは"
)

function App(){
  return (
    <div>
    <div id="1">{elementGreeting}</div>
    <div id="2">{elementImg}</div>
    <div id="3">{elementCreateElement}</div>
    <div id="4"></div>
    <div id="5">
      <WelcomeFunc name="tom" />
      <WelcomeFunc name="matsu" />
      <WelcomeFunc name="yus" />
      </div>
    </div>
  );
}
export default App;