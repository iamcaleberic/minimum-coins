import { parseInput } from '../util/parse_input'

test('it can handle blank currency input', () => {
  expect(parseInput('£p')).toBe('invalid input');
});

test('it can handle invalid input', () => {
  expect(parseInput('13.x')).toBe('invalid input');
});

test('it can handle values with no currency values', () => {
  expect(parseInput('200')).toBe(200);
});

test('it can handle sterling value on input', () => {
  expect(parseInput('£200')).toBe(20000);
});

test('it can handle pence value on input', () => {
  expect(parseInput('500p')).toBe(500);
});

test('it can handle both sterling and pence values', () => {
  expect(parseInput('£20.50p')).toBe(2050);
});

test('it can handle null values', () => {
  expect(parseInput(null)).toBe('invalid input');
});


test('it can handle random values passed', () => {
  expect(parseInput('jkfhsdjkhfkjshdjkfhsjkd')).toBe('invalid input');
});
