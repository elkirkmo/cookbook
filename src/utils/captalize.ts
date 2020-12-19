export const capitalize = (s: string) => {
  /***
   * Returns a formatted sentence where the first character of every word is capitalizaed and all other letters are lowercase
   * params(s: string)
   */
  return s
    .split(' ')
    .map((x) =>
      x
        .split('')
        .map((y, i) => (i === 0 ? y.toUpperCase() : y.toLowerCase()))
        .join('')
    )
    .join(' ');
};

export default capitalize;
