import toNumber from '../src/toNumber.js';

describe('toNumber.js – Unit tests (Must)', () => {
  test('converts valid strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0xFF')).toBe(255);
  });

  test('preserves number constants', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('handles symbols and bad hex/binary/octal', () => {
    expect(toNumber(Symbol('x'))).toBe(NaN);
    expect(toNumber('-0xGG')).toBe(NaN);
  });

  test('converts booleans to numbers', () => {
    // Common behaviour: true -> 1, false -> 0
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('handles null, undefined, and empty string', () => {
    // Typical lodash-style behaviour:
    // null -> 0, '' -> 0, undefined -> NaN
    expect(toNumber(null)).toBe(0);
    expect(toNumber('')).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('handles arrays and objects via valueOf/toString', () => {
    expect(toNumber([5])).toBe(5);
    expect(toNumber(['10'])).toBe(10);
    expect(toNumber([1, 2])).toBeNaN();

    const obj = { valueOf: () => 7 };
    expect(toNumber(obj)).toBe(7);

    const objStr = { toString: () => '12.5' };
    expect(toNumber(objStr)).toBe(12.5);
  });
})