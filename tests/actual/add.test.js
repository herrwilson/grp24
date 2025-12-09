import add from '../../src/add.js';

describe('add.js – Manual tests from Part 1 Test Plan (Group 24)', () => {
  test('ADD-001: Verify basic addition logic for cart total', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('ADD-002: Ensure correct two-decimal precision in price calculations', () => {
    expect(add(1.23, 1.23)).toBeCloseTo(2.46, 10);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  test('ADD-003: String inputs are concatenated, not summed', () => {
    expect(add('67', 3)).toBe('673');
    expect(add('abc', 5)).toBe('abc5');
  });

  test('ADD-004: Handle undefined input simulating missing cart item price', () => {
    expect(add(undefined, 15)).toBe(15);
    expect(add(10, undefined)).toBe(10);
  });

  test('ADD-005: Prevent silent failure on invalid input types', () => {
    expect(add(null, 1500)).toBe(1500);
    expect(add({}, 5)).toBeNaN();
  });
});

describe('add.js – AI-generated tests (Grok 4)', () => {
  test('ADD-AI-001: handles negative numbers correctly', () => {
    expect(add(-10, 25)).toBe(15);
    expect(add(-5.5, -3.2)).toBeCloseTo(-8.7);
  });

  test('ADD-AI-002: works with very large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1))
      .toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  test('ADD-AI-003: returns NaN when both arguments are non-numeric (non-string)', () => {
    expect(add('hello', 'world')).toBe('helloworld');
    expect(add([], {})).toBeNaN();
  });

  test('ADD-AI-004: is commutative', () => {
    const a = 13.37;
    const b = 42.01;
    expect(add(a, b)).toBe(add(b, a));
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
    expect(add(9007199254740991, 1))
      .toBe(9007199254740992);
  });

  test('ADD-009: single argument: missing addend is treated as 0', () => {
    expect(add(5)).toBe(5);
  });

  test('ADD-010: no arguments: both values default to 0', () => {
    expect(add()).toBe(0);
  });

  test('ADD-011: propagates NaN when either argument is NaN', () => {
    expect(add(NaN, 10)).toBeNaN();
    expect(add(10, NaN)).toBeNaN();
  });

  test('ADD-012: booleans are coerced like numbers (true → 1, false → 0)', () => {
    expect(add(true, false)).toBe(1);
    expect(add(true, true)).toBe(2);
    expect(add(false, 5)).toBe(5);
  });

  test('ADD-013: can be safely used with Array.reduce for cart totals', () => {
    const cartPrices = [1.99, 3.50, 4.51];
    const total = cartPrices.reduce((sum, price) => add(sum, price), 0);
    expect(total).toBeCloseTo(10.00, 10);
  });

  test('ADD-014: adding opposite numbers cancels to zero', () => {
    expect(add(10, -10)).toBe(0);
    expect(add(3.33, -3.33)).toBeCloseTo(0, 10);
  });
});