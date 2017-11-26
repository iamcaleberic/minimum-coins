import { handleCoin } from '../util/handle_coin'

test('it can handle pence values passed to it', () => {
  expect(handleCoin(1234)).toEqual([6, 0, 0, 1, 1, 0, 2, 0]);
});

test('it can handle pence values passed to it', () => {
  expect(handleCoin(4000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0]);
});

test('it can handle null values', () => {
  expect(handleCoin(null)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
});

test('it can handle zero values passed to it', () => {
  expect(handleCoin(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
});

test('it does not return null when null values are passed', () => {
  expect(handleCoin(null)).not.toBe(null);
});
