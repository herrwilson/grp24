import isEmpty from '../../src/isEmpty.js';

describe('isEmpty.js – Expected behavior (Phase 1 Test Plan)', () => {
  test('EMP-001: detects empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('EMP-002: whitespace-only string treated as empty', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('\t\n\r')).toBe(true);
  });

  test('EMP-003: zero-width Unicode treated as empty', () => {
    expect(isEmpty('\u200B')).toBe(true);
    expect(isEmpty('\u2060')).toBe(true);
  });

  test('EMP-004: valid non-empty string returns false', () => {
    expect(isEmpty('asd asd asd')).toBe(false);
    expect(isEmpty(' potato ')).toBe(false);
  });

  test('EMP-005: empty collections return true, almost-empty collections return false', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);

    expect(isEmpty({ length: 0 })).toBe(false);
    expect(isEmpty([null])).toBe(false);
  });
});

describe('isEmpty.js – AI-generated tests', () => {
  test('EMP-AI-001: considers null and undefined as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('EMP-AI-002: handles Map and Set correctly', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
  });

  test('EMP-AI-003: treats strings with only zero-width characters as non-empty', () => {
    expect(isEmpty('\uFEFF')).toBe(false);
    expect(isEmpty('\u200D\u200C')).toBe(false);
  });

  test('EMP-AI-004: treats boolean, number, function as empty if no own enumerable properties', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(() => {})).toBe(true);
  });
});

describe('isEmpty.js – Additional exploratory tests', () => {
  test('EMP-006: works with typed arrays and buffers', () => {
    expect(isEmpty(new ArrayBuffer(0))).toBe(true);
    expect(isEmpty(new Uint8Array([]))).toBe(true);
  });

  test('EMP-007: ignores prototype properties', () => {
    function Foo() {}
    Foo.prototype.x = 10;
    expect(isEmpty(new Foo())).toBe(true);
  });

  test('EMP-008: symbols as keys do not make object non-empty', () => {
    const sym = Symbol('test');
    expect(isEmpty({ [sym]: 123 })).toBe(true);
  });

  test('EMP-009: numeric edge cases: NaN, Infinity, -Infinity treated as empty', () => {
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty(Infinity)).toBe(true);
    expect(isEmpty(-Infinity)).toBe(true);
  });

  test('EMP-010: nested structures are not empty if they contain keys', () => {
    expect(isEmpty({ foo: {} })).toBe(false);
    expect(isEmpty({ foo: [] })).toBe(false);
  });

  test('EMP-011: unicode whitespace is NOT treated as empty', () => {
    expect(isEmpty('\u00A0')).toBe(false);
    expect(isEmpty('\u3000')).toBe(false);
  });

  test('EMP-012: string containing zero-width + visible characters is NOT empty', () => {
    expect(isEmpty('\u200B a')).toBe(false);
  });

  test('EMP-013: array-like objects with numeric length behave correctly', () => {
    expect(isEmpty({ length: 0 })).toBe(false);
    expect(isEmpty({ length: 1, 0: 'a' })).toBe(false);
  });

  test('EMP-014: function with properties is not empty', () => {
    function fn() {}
    fn.x = 123;
    expect(isEmpty(fn)).toBe(false);
  });

  test('EMP-015: symbol values are treated as empty', () => {
    expect(isEmpty(Symbol('x'))).toBe(true);
  });

  test('EMP-016: consistency: primitives vs boxed objects', () => {
    expect(isEmpty('a')).toBe(isEmpty(new String('a')));
    expect(isEmpty(5)).toBe(isEmpty(new Number(5)));
    expect(isEmpty(true)).toBe(isEmpty(new Boolean(true)));
  });

  test('EMP-017: object with non-enumerable properties is still empty', () => {
    const obj = {};
    Object.defineProperty(obj, 'x', { value: 10, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });

  test('EMP-018: File or Blob objects with no enumerable properties are empty', () => {
    if (typeof Blob === 'undefined') return;
    const blob = new Blob(['hello']);
    expect(isEmpty(blob)).toBe(true);
  });
});
