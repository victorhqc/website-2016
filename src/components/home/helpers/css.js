/* eslint import/prefer-default-export: 0 */

export const calculateBlur = (props) => {
  const {
    nextTransform,
    isApplicableTransform,
    scrollY,
  } = props;

  const linearCalculation = (scrollY / nextTransform);
  const invertedCalculation = 1 - linearCalculation;
  console.log({ scrollY, nextTransform, linearCalculation, invertedCalculation });

  return !isApplicableTransform
    ? `blur(${invertedCalculation * 20}px)`
    : 'blur(0)';
};
