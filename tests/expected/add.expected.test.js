import add from '../../src/add.js';

describe('add.js – expected behavior, manual tests', () => {
  test('ADD-001: Basic addition', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('ADD-002: Decimal precision', () => {
    expect(add(1.23, 1.23)).toBeCloseTo(2.46, 10);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  test('ADD-003: Non-numeric input handled safely', () => {
    expect(add('67', 3)).toBe(70);
    expect(add('abc', 5)).toBeNaN();
  });

  test('ADD-004: Undefined treated as 0', () => {
    expect(add(undefined, 15)).toBe(15);
    expect(add(10, undefined)).toBe(10);
  });

  test('ADD-005: Invalid types do not break addition', () => {
    expect(add(null, 1500)).toBe(1500);
    expect(add({}, 5)).toBe(5);
  });
});

describe('add.js – Additional exploratory tests', () => {
  test('ADD-006: zero + zero returns zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('ADD-007: handles Infinity correctly', () => {
    expect(add(Infinity, 100)).toBe(Infinity);
    expect(add(-Infinity, Infinity)).toBeNaN();
  });

  test('ADD-008: preserves exact integer addition within safe range', () => {
    expect(add(9007199254740991, 1)).toBe(9007199254740992);
  });

  test('ADD-009: single argument defaults missing addend to 0', () => {
    expect(add(5)).toBe(5);
  });

  test('ADD-010: no arguments defaults both values to 0', () => {
    expect(add()).toBe(0);
  });

  test('ADD-011: propagates NaN', () => {
    expect(add(NaN, 10)).toBeNaN();
    expect(add(10, NaN)).toBeNaN();
  });

  test('ADD-012: booleans coerced like numbers', () => {
    expect(add(true, false)).toBe(1);
    expect(add(true, true)).toBe(2);
    expect(add(false, 5)).toBe(5);
  });

  test('ADD-013: safe usage with Array.reduce for totals', () => {
    const cartPrices = [1.99, 3.50, 4.51];
    const total = cartPrices.reduce((sum, price) => add(sum, price), 0);
    expect(total).toBeCloseTo(10.00, 10);
  });

  test('ADD-014: adding opposite numbers cancels to zero', () => {
    expect(add(10, -10)).toBe(0);
    expect(add(3.33, -3.33)).toBeCloseTo(0, 10);
  });
});

describe('add.js – AI-generated tests', () => {
  test('ADD-AI-01: handles negative numbers', () => {
    expect(add(-10, 25)).toBe(15);
    expect(add(-5.5, -3.2)).toBeCloseTo(-8.7);
  });

  test('ADD-AI-02: works with very large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1))
      .toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  test('ADD-AI-03: returns NaN for non-numeric values', () => {
    expect(add([], {})).toBeNaN();
  });

  test('ADD-AI-04: addition is commutative', () => {
    const a = 13.37;
    const b = 42.01;
    expect(add(a, b)).toBe(add(b, a));
  });
});
