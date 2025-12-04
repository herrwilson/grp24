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

  test('converts primitive values to strings', () => {
    expect(toString(42)).toBe('42');
    expect(toString(3.14)).toBe('3.14');
    expect(toString('hello')).toBe('hello');
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('handles empty string and whitespace strings', () => {
    expect(toString('')).toBe('');
    expect(toString('   ')).toBe('   ');
  });

  test('converts arrays to comma-separated string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([])).toBe('');
  });
});