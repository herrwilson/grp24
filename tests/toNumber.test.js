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
})