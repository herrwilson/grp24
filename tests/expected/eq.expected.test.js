import eq from '../../src/eq.js';

describe('eq.js – expected behavior, manual tests', () => {
  test('EQ-001: performs SameValueZero comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq('a', Object('a'))).toBe(false);
  });
  
  test('EQ-002: compares primitive values correctly', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('foo', 'foo')).toBe(true);
    expect(eq(true, true)).toBe(true);

    expect(eq(1, 2)).toBe(false);
    expect(eq('foo', 'bar')).toBe(false);
    expect(eq(true, false)).toBe(false);
  });

  test('EQ-003: treats wrapper objects consistently with primitives', () => {
    expect(eq('a', Object('a'))).toBe(true);
    const numObj = Object(5);
    expect(eq(5, numObj)).toBe(true);
  });

  test('EQ-004: compares object references, not structure', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 1 };
    const sameRef = obj1;

    expect(eq(obj1, sameRef)).toBe(true);
    expect(eq(obj1, obj2)).toBe(false);
  });

  test('EQ-005: is reflexive and symmetric', () => {
    const obj = { x: 1 };

    expect(eq(obj, obj)).toBe(true);
    expect(eq('abc', 'abc')).toBe(true);
    expect(eq(2, '2')).toBe(eq('2', 2));
    expect(eq(NaN, 0 / 0)).toBe(eq(0 / 0, NaN));
  });
});