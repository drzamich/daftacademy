import {fib} from './index';

const fibonacciArrayOfFifteen = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

test('Generated array has correct values', () => {
  expect(fib(15)).toEqual(fibonacciArrayOfFifteen);
});

// useful if the parameter is taken from <input>
test('Array is generated for `num` parameter being a integer-like string', () => {
  expect(fib('15')).toEqual(fibonacciArrayOfFifteen);
});

test('Error is thrown when `num` is not a number', () => {
  const errorMsg = 'Parameter `num` must be a number of a number-like string';
  expect(() => fib('foo')).toThrow(errorMsg);
});

test('Error is thrown when `num` is lower than zero', () => {
  const errorMsg = 'Parameter `num` must be greater than 0';
  expect(() => fib(-3)).toThrow(errorMsg);
  expect(() => fib('-3')).toThrow(errorMsg);
});

test('Error is thrown when `num` is a floating-point number', () => {
  const errorMsg = 'Parameter `num` must be an integer';
  expect(() => fib(6.7)).toThrow(errorMsg);
  expect(() => fib(-6.7)).toThrow(errorMsg);
  expect(() => fib('6.7')).toThrow(errorMsg);
  expect(() => fib('-6.7')).toThrow(errorMsg);
});
