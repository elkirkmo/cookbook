export const capitalize = (string: String) => {
  return string
    .split('')
    .map((y, i) => (i === 0 ? y.toUpperCase() : y))
    .join('');
};

export default capitalize;
