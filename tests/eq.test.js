import eq from '../src/eq.js';

describe('eq.js – Unit tests (Should)', () => {
  test('performs SameValueZero comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq('a', Object('a'))).toBe(true);
    const obj = {}; 
    expect(eq(obj, obj)).toBe(true);
  });

    test('compares primitive values correctly', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('foo', 'foo')).toBe(true);
    expect(eq(true, true)).toBe(true);

    expect(eq(1, 2)).toBe(false);
    expect(eq('foo', 'bar')).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

   test('treats wrapper objects consistently with primitives', () => {
    expect(eq('a', Object('a'))).toBe(true);

    const numObj = Object(5);
    expect(eq(5, numObj)).toBe(true);
  });

  test('compares object references, not structure', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 1 };
    const sameRef = obj1;

    expect(eq(obj1, sameRef)).toBe(true);   // same reference
    expect(eq(obj1, obj2)).toBe(false);     // different objects with same shape
  });

  test('is reflexive and symmetric', () => {
    const obj = { x: 1 };

    expect(eq(obj, obj)).toBe(true);
    expect(eq('abc', 'abc')).toBe(true);

    // symmetry: eq(a, b) === eq(b, a)
    expect(eq(2, '2')).toBe(eq('2', 2));
    expect(eq(NaN, 0 / 0)).toBe(eq(0 / 0, NaN));
  });
});