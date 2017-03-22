import React, { Component, PropTypes } from 'react';

import './Slide.css';

import {
  calculateBlur,
  calculateOpacityBlur,
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

const renderOpacityBackground = (properties) => {
  const {
    backgroundImage,
    blurredImage,
  } = properties;

  const opacity = calculateOpacityBlur({ ...properties });
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const blurredBackgroundStyle = {
    backgroundImage: `url(${blurredImage})`,
    opacity,
  };

  return (
    <div>
      <div className="slideBackground" style={backgroundStyle} />
      <div className="slideBackground blurred" style={blurredBackgroundStyle} />
    </div>
  );
};

const alwaysBlurBackgrond = (properties) => {
  const {
    blurredImage,
  } = properties;

  const blurredBackgroundStyle = {
    backgroundImage: `url(${blurredImage})`,
  };

  return (
    <div>
      <div className="slideBackground blurred" style={blurredBackgroundStyle} />
    </div>
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
      case 'opacity': return renderOpacityBackground(this.props);
      case 'mobil': return alwaysBlurBackgrond(this.props);
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
  blurredImage: PropTypes.string,
  transitionEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
