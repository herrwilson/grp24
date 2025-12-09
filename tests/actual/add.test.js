import add from '../../src/add.js';

describe('add.js - test evidence of actual behaviour', () => {
  test('ADD-ACT-001: String inputs are concatenated, not summed', () => {
    expect(add('67', 3)).toBe('673');
    expect(add('abc', 5)).toBe('abc5');
  });

  test('ADD-ACT-002: Prevent silent failure on invalid input types', () => {
    expect(add(null, 1500)).toBe(1500);
    expect(add({}, 5)).toBeNaN();
  });
});