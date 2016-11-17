const app = "I don't do much.";
const React = require('react');

// import React from 'react';
// import ReactDOM from 'react-dom';

class ImageSlider extends React.Component {
  constructor(props) {
    super();
    this.state = {currentSlideIndex: 0}
  }

  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}


module.exports= ImageSlider;
