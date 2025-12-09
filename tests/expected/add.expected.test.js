import add from '../../src/add.js';

describe('add.js – Expected behavior (Phase 1 Test Plan)', () => {
  test('ADD-EXP-01: Basic addition for cart total', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('ADD-EXP-02: Two-decimal precision in price calculations', () => {
    expect(add(1.23, 1.23)).toBeCloseTo(2.46, 10);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  test('ADD-EXP-03: Non-numeric input handled safely (coercion or NaN)', () => {
    expect(add('67', 3)).toBe(70);           // expected numeric coercion
    expect(add('abc', 5)).toBeNaN();
  });

  test('ADD-EXP-04: Undefined treated as 0 (missing price)', () => {
    expect(add(undefined, 15)).toBe(15);
    expect(add(10, undefined)).toBe(10);
  });

  test('ADD-EXP-05: Invalid types do not cause silent failure', () => {
    expect(add(null, 1500)).toBe(1500);      // null → 0
    expect(add({}, 5)).toBe(5);              // object → 0
  });
});