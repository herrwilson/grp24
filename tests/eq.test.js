import eq from '../src/eq.js';

describe('eq.js – Unit tests (Should)', () => {
  test('performs SameValueZero comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq('a', Object('a'))).toBe(true);
    const obj = {}; 
    expect(eq(obj, obj)).toBe(true);
  });
});