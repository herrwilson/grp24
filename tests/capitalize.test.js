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
});