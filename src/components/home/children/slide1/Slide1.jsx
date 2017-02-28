import React, { Component, PropTypes } from 'react';

import Slide from '../../../_reusable/slide';

import {
  calculateBlur,
} from '../../helpers';

import './Slide1.css';

export default class Slide1 extends Component {
  render() {
    const {
      style,
      ...filteredProps
    } = this.props;

    const filter = calculateBlur({ ...filteredProps });
    const backgroundStyle = {
      filter,
    };

    return (
      <Slide style={style}>
        <div className="slideBody slide-1">
          <div className="background" style={backgroundStyle}/>
          <h1>Slide 1</h1>
          <p>This should be rendered in the Home Page</p>
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
