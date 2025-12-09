import toString from '../../src/toString.js';

describe('toString.js – Expected behavior', () => {
  test('TOSTR-EXP-001: null and undefined return empty string', () => {
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });

  test('TOSTR-EXP-002: Preserves -0', () => {
    expect(toString(-0)).toBe('-0');
  });
});