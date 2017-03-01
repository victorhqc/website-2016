import React, { Component, PropTypes } from 'react';

import Slide from '../../../_reusable/slide';

import './Slide3.css';

export default class Slide1 extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div className="slide-3">
          <h1>Slide 3</h1>
          <p>Slide No. 3!</p>
        </div>
      </Slide>
    );
  }
}

Slide1.propTypes = {
  style: PropTypes.object,
};

Slide1.defaultProps = {
  style: {},
};
