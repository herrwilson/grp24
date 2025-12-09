import capitalize from '../../src/capitalize.js';

describe('capitalize.js – Expected behavior', () => {
  test('CAP-EXP-001: Capitalizes first letter, lowercases rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('hello')).toBe('Hello');
  });

  test('CAP-EXP-002: Handles empty and single char', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
  });
});