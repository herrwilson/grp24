import toNumber from '../../src/toNumber.js';

describe('toNumber.js – Expected behavior (Phase 1 Test Plan)', () => {
  test('TONUM-001: converts valid numeric strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0xFF')).toBe(255);
  });

  test('TONUM-002: preserves numeric constants', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('TONUM-003: handles invalid symbols and malformed numeric strings', () => {
    expect(toNumber(Symbol('x'))).toBeNaN();
    expect(toNumber('-0xGG')).toBeNaN();
  });

  test('TONUM-004: converts booleans to numbers', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('TONUM-005: handles null, undefined, and empty string', () => {
    expect(toNumber(null)).toBe(0);
    expect(toNumber('')).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('TONUM-006: handles arrays and objects via valueOf/toString', () => {
    expect(toNumber([5])).toBe(5);
    expect(toNumber(['10'])).toBe(10);
    expect(toNumber([1, 2])).toBeNaN();

    const objWithValueOf = { valueOf: () => 7 };
    expect(toNumber(objWithValueOf)).toBe(7);

    const objWithToString = { toString: () => '12.5' };
    expect(toNumber(objWithToString)).toBe(12.5);
  });
});
