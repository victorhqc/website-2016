import React, { Component, PropTypes } from 'react';

import Slide from '../../../_reusable/slide';

import './Slide2.css';

export default class Slide1 extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div className="slide-2">
          <h1>Slide 2</h1>
          <p>This should also be rendered in the Home Page</p>
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
