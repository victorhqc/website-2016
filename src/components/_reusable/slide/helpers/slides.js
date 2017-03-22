/* eslint import/prefer-default-export: 0 */
import React from 'react';

const easeInOutCubic = (value) => {
  if (value < 0.5) {
    return 4 * value * value * value;
  }

  return ((value - 1) * ((2 * value) - 2) * ((2 * value) - 2)) + 1;
};
//
// const easeInOutQuart = (value) => {
//   if (value < 0.5) {
//     return 8 * (value ** 4);
//   }
//
//   return 1 - (8 * (value - 1) * ((value - 1) ** 3));
// };
//
// const easeInOutQuint = (value) => {
//   if (value < 0.5) {
//     return 16 * (value ** 5);
//   }
//
//   return 1 + (16 * (value - 1) * ((value - 1) ** 4));
// };


export const calculateBlur = (props) => {
  const {
    height,
    scroll,
  } = props;

  if (scroll >= height) {
    return 'blur(10px)';
  }

  if (scroll <= 0) {
    return '';
  }

  const linearCalculation = (scroll / height) - 0.5; // Offset by half

  if (linearCalculation < 0) {
    return '';
  }

  const easedValue = easeInOutCubic(linearCalculation);

  return `blur(${easedValue * 20}px)`;
};

export const calculateOpacityBlur = (props) => {
  const {
    height,
    scroll,
  } = props;

  if (scroll >= height) {
    return 1;
  }

  if (scroll <= 0) {
    return 0;
  }

  const linearCalculation = (scroll / height);

  if (linearCalculation < 0) {
    return 0;
  }

  const easedValue = easeInOutCubic(linearCalculation);

  return easedValue;
};


export const calculateStyle = ({
  zIndex,
  height,
  nextTransform,
  scroll,
}) => {
  if (scroll <= 0) {
    return {};
  }

  if (scroll >= height) {
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
    scrollY,
  } = state;

  return slides.reduce((visible, slide, index) => {
    const zIndex = slides.length - index;
    const nextTransform = height * (zIndex - 1);

    const scroll = scrollY - nextTransform;


    const style = calculateStyle({
      zIndex,
      height,
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
          scroll,
          zIndex,
          ...state,
        },
      ),
    ];
  }, []);
};
