const app = "I don't do much.";
const React = require('react');

// import React from 'react';
// import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    );
  }
}

module.exports= Bomb;
