import React, { Component, PropTypes } from 'react';

import Slide from '../../../_reusable/slide';

export default class Slide1 extends Component {
  render() {
    const { style } = this.props;

    return (
      <Slide style={style}>
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
