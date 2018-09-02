import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);

    this.state = {
      timeLeft: null,
      timer: null
    };
  }

  setTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;

      if (timeLeft === 0) {
        clearInterval(timer);
      }

      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);

    return this.setState({ timeLeft: timeLeft, timer: timer });
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <Button timeLeft="5" startTimer={this.setTimer} />
        <Button timeLeft="10" startTimer={this.setTimer} />
        <Button timeLeft="15" startTimer={this.setTimer} />
        <StartTimer timeLeft={this.state.timeLeft} />
      </div>
    );
  }
}

class StartTimer extends React.Component {
  render() {
    if (this.props.timeLeft === 0) {
      return <div />;
    }

    return <h3>Time left: {this.props.timeLeft}</h3>;
  }
}

class Button extends React.Component {
  beginTimer() {
    return this.props.startTimer(this.props.timeLeft);
  }

  render() {
    return (
      <button onClick={this.beginTimer.bind(this)}>
        {this.props.timeLeft} seconds
      </button>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);
