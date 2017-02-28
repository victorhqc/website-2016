import React, { Component, PropTypes } from 'react';
import './Slide.css';

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
    const { children, style, ...filteredProps } = this.props;

    return (
      <div className="Slide" style={style}>
        { renderChildren(children, filteredProps) }
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
