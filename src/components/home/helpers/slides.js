/* eslint import/prefer-default-export: 0 */
import React from 'react';

const easeInOutCubic = (value) => {
  if (value < 0.5) {
    return 4 * value * value * value;
  }

  return ((value - 1) * ((2 * value) - 2) * ((2 * value) - 2)) + 1;
};


export const calculateBlur = (props) => {
  const {
    nextTransform,
    halfHeight,
    scroll,
  } = props;

  if (scroll >= halfHeight) {
    return 'blur(10px)';
  }

  if (scroll < 0) {
    return '';
  }

  const linearCalculation = (scroll / nextTransform);
  const easedValue = easeInOutCubic(linearCalculation);

  return `blur(${easedValue * 10}px)`;
};


export const calculateStyle = ({
  zIndex,
  height,
  halfHeight,
  nextTransform,
  scroll,
}) => {
  if (scroll <= 0) {
    return {
      display: 'none',
    };
  }

  if (scroll >= halfHeight) {
    return {
      height,
      zIndex,
      position: 'fixed',
      top: 0,
    };
  }

  return {
    height,
    zIndex,
    transform: `translate3d(0, ${nextTransform}px, 0)`,
  };
};


export const renderSlides = (state, slides) => {
  const {
    height,
    totalHeight,
    scrollY,
  } = state;

  const halfHeight = height / 2;

  return slides.reduce((visible, slide, index) => {
    const zIndex = slides.length - index;
    const nextTransform = (totalHeight - (height * index)) - scrollY;
    const scroll = scrollY - (halfHeight * (zIndex - 1));

    const style = calculateStyle({
      zIndex,
      height,
      halfHeight,
      nextTransform,
      scroll,
    });

    return [
      ...visible,
      React.cloneElement(
        slide,
        {
          key: `slide-${index}`,
          style,
          nextTransform,
          halfHeight,
          scroll,
        },
      ),
    ];
  }, []);
};
