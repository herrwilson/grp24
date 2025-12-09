import capitalize from '../../src/capitalize.js';

describe('capitalize.js – Unit tests (Must)', () => {
  test('CAP-001: capitalizes first letter and lowercases the rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('CAP-002: empty string and single character handling', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
  });

  test('CAP-003: forces non-string values via toString', () => {
    expect(capitalize(123)).toBe('123');
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
  });

  test('CAP-004: keeps already-capitalized words stable', () => {
    expect(capitalize('Fred')).toBe('Fred');
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  test('CAP-005: handles leading and trailing whitespace', () => {
    expect(capitalize('  hello')).toBe('  hello');      // leading space → no change to first letter
    expect(capitalize('hello  ')).toBe('Hello  ');      // only first visible letter is affected
  });

  test('CAP-006: strings starting with non-letters do not change the first symbol', () => {
    expect(capitalize('1apple')).toBe('1apple');
    expect(capitalize('-foo')).toBe('-foo');
  });

  test('CAP-007: supports non-ASCII letters', () => {
    expect(capitalize('éclair')).toBe('Éclair');
    expect(capitalize('über')).toBe('Über');
  });
});