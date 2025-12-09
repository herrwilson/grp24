import isEmpty from '../../src/isEmpty.js';

describe('isEmpty.js – Expected behavior (Phase 1 Test Plan)', () => {
  test('EMP-EXP-01: Empty string returns true', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('EMP-EXP-02: Whitespace-only string treated as empty', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('\t\n\r')).toBe(true);
  });

  test('EMP-EXP-03: Zero-width Unicode treated as empty', () => {
    expect(isEmpty('\u200B')).toBe(true);
    expect(isEmpty('\u2060')).toBe(true);
  });

  test('EMP-EXP-04: Valid non-empty string returns false', () => {
    expect(isEmpty('asd asd asd')).toBe(false);
    expect(isEmpty(' potato ')).toBe(false);
  });

  test('EMP-EXP-05: Empty collections return true', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });
});