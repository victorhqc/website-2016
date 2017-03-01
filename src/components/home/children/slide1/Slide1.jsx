import React, { Component, PropTypes } from 'react';

import Slide from '../../../_reusable/slide';

import './Slide1.css';

export default class Slide1 extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div className="slide-1">
          <h1>Slide 1</h1>
          <p>This should be rendered in the Home Page</p>
        </div>
      </Slide>
    );
  }
}

Slide1.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
};

Slide1.defaultProps = {
  style: {},
};
