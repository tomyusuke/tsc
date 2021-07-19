import React from 'react';


type Props = {}
type State = {date : Date}
class Clock extends React.Component<Props, State> {
	
  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;