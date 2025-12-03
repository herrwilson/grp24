import toString from '../src/toString.js';

describe('toString.js – Unit tests (Should)', () => {
  test('returns string representation for null and undefined', () => {
    expect(toString(null)).toBe('null');
    expect(toString(undefined)).toBe('undefined');
  });

  test('preserves -0 sign and handles symbols', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
  });
});