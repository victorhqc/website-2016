import React, { Component, PropTypes } from 'react';

import './Slide.css';

import {
  calculateBlur,
} from './helpers';

const renderChildren = (children) => {
  const parsedChildren = Array.isArray(children) ? children : [children];

  return parsedChildren.reduce((accumulated, child, index) =>
    React.cloneElement(
      child,
      {
        key: `slide-children-${index}`,
      },
    ), []);
};

const renderBlurBackground = (properties) => {
  const {
    backgroundImage,
  } = properties;

  const filter = calculateBlur({ ...properties });
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    filter,
  };

  return (
    <div className="slideBackground" style={backgroundStyle} />
  );
};

export default class Slide extends Component {

  constructor(props) {
    super(props);

    this.renderBackground = this.renderBackground.bind(this);
  }

  renderBackground(transitionEffect) {
    switch (transitionEffect) {
      case 'blur': return renderBlurBackground(this.props);
      default: return null;
    }
  }

  render() {
    const {
      children,
      style,
      transitionEffect,
      ...filteredProps
    } = this.props;

    return (
      <div className="Slide" style={style}>
        <div className="slideBody">
          { this.renderBackground(transitionEffect) }
          { renderChildren(children, filteredProps) }
        </div>
      </div>
    );
  }
}

Slide.defaultProps = {
  transitionEffect: 'blur',
};

Slide.propTypes = {
  style: PropTypes.object,
  backgroundImage: PropTypes.string,
  transitionEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
