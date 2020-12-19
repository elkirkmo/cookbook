import capitalize from './captalize';

it('capitalizes the first letter of a word', () => {
  expect(capitalize('test')).toBe('Test');
});

it('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('testing testing one two three')).toBe(
    'Testing Testing One Two Three'
  );
});

it('formats a Spongebob sentence correctly', () => {
  expect(capitalize('tEsTing TeSTiNg ONE two tHREe')).toBe(
    'Testing Testing One Two Three'
  );
});
