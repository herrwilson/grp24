import toNumber from '../../src/toNumber.js';

describe('toNumber.js – Expected behavior', () => {
  test('TONUM-EXP-001: Converts strings correctly', () => {
    expect(toNumber('3.2')).toBe(3.2);
  });

  test('TONUM-EXP-002: Handles special values', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber('0xFF')).toBe(255);
  });
});