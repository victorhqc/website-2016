import React, { Component, PropTypes } from 'react';
import './Slide.css';

export default class Slide extends Component {

  render() {
    const { children, style } = this.props;

    return (
      <div className="Slide" style={style}>
        { children }
      </div>
    );
  }
}

Slide.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
