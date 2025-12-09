import eq from '../../src/eq.js';

describe('eq.js – Expected behavior', () => {
  test('EQ-EXP-001: SameValueZero comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq('a', Object('a'))).toBe(false);
  });
});