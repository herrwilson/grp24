import isEmpty from '../../src/isEmpty.js';

describe('isEmpty.js – test evidence of actual behaviour', () => {
  test('EMP-ACT-001: Whitespace-only string is NOT treated as empty', () => {
    expect(isEmpty('   ')).toBe(false);
    expect(isEmpty('\t\n\r')).toBe(false);
  });

  test('EMP-ACT-002: Zero-width characters are NOT treated as empty', () => {
    expect(isEmpty('\u200B')).toBe(false);
    expect(isEmpty('\u2060')).toBe(false);
  });
});