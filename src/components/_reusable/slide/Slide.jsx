import React, { Component, PropTypes } from 'react';

import './Slide.css';

import {
  calculateBlur,
} from './helpers';

const renderChildren = (children, filteredProps) => {
  const parsedChildren = Array.isArray(children) ? children : [children];

  return parsedChildren.reduce((accumulated, child, index) =>
    React.cloneElement(
      child,
      {
        ...filteredProps,
        key: `slide-children-${index}`,
      },
    ), []);
};

export default class Slide extends Component {
  render() {
    const {
      children,
      style,
      backgroundImage,
      ...filteredProps
    } = this.props;

    const filter = calculateBlur({ ...filteredProps });
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      filter,
    };

    return (
      <div className="Slide" style={style}>
        <div className="slideBody">
          <div className="slideBackground" style={backgroundStyle} />
          { renderChildren(children, filteredProps) }
        </div>
      </div>
    );
  }
}

Slide.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
