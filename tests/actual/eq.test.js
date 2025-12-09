import eq from '../../src/eq.js';

describe('eq.js – test evidence of actual behaviour', () => {
  test('EQ-ACT-001: performs SameValueZero comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq('a', Object('a'))).toBe(true);
    const obj = {}; 
    expect(eq(obj, obj)).toBe(true);
  });
});