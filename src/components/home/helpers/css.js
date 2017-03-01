/* eslint import/prefer-default-export: 0 */

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
