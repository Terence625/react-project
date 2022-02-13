import React from "react";

export default class Clock extends React.Component<{}, {date: Date}> {
  private timerID: number;

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
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