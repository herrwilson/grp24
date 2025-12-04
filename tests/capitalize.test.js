import capitalize from '../src/capitalize.js';

describe('capitalize.js – Unit tests (Must)', () => {
  test('capitalizes first letter and lowercases the rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('empty string and single character handling', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
  });

  test('forces non-string values via toString', () => {
    expect(capitalize(123)).toBe('123');
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
  });

  test('keeps already-capitalized words stable', () => {
    expect(capitalize('Fred')).toBe('Fred');
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  test('handles leading and trailing whitespace', () => {
    expect(capitalize('  hello')).toBe('  hello');      // leading space → no change to first letter
    expect(capitalize('hello  ')).toBe('Hello  ');      // only first visible letter is affected
  });

  test('strings starting with non-letters do not change the first symbol', () => {
    expect(capitalize('1apple')).toBe('1apple');
    expect(capitalize('-foo')).toBe('-foo');
  });

  test('supports non-ASCII letters', () => {
    expect(capitalize('éclair')).toBe('Éclair');
    expect(capitalize('über')).toBe('Über');
  });
});