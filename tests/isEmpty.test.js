import isEmpty from '../src/isEmpty.js';

describe('isEmpty.js – Manual tests from Part 1 Test Plan (Group 24)', () => {
  test('EMP-01: Verify detection of empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('EMP-02: Whitespace-only string is NOT treated as empty', () => {
    expect(isEmpty('   ')).toBe(false);
    expect(isEmpty('\t\n\r')).toBe(false);
  });

  test('EMP-03: Zero-width characters are NOT treated as empty', () => {
    expect(isEmpty('\u200B')).toBe(false);
    expect(isEmpty('\u2060')).toBe(false);
  });

  test('EMP-04: Accept valid non-empty string', () => {
    expect(isEmpty('asd asd asd')).toBe(false);
    expect(isEmpty(' potato ')).toBe(false);
  });

  test('EMP-05: Check behavior for empty and “almost empty” collections', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);

    expect(isEmpty({ length: 0 })).toBe(false);
    expect(isEmpty([null])).toBe(false);
  });
});

describe('isEmpty.js – AI-generated tests (Grok 4)', () => {
  test('considers null and undefined as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('handles Map and Set correctly', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
  });

  test('treats strings with only zero-width characters as non-empty', () => {
    expect(isEmpty('\uFEFF')).toBe(false);
    expect(isEmpty('\u200D\u200C')).toBe(false);
  });

  test('treats boolean, number, function as empty (no own enumerable properties)', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(() => {})).toBe(true);
  });
});

describe('isEmpty.js – Additional exploratory tests', () => {
  test('works with typed arrays and buffers', () => {
    expect(isEmpty(new ArrayBuffer(0))).toBe(true);
    expect(isEmpty(new Uint8Array([]))).toBe(true);
  });

  test('considers prototype properties irrelevant', () => {
    function Foo() {}
    Foo.prototype.x = 10;
    expect(isEmpty(new Foo())).toBe(true);
  });

  test('handles symbols as keys as empty', () => {
    const sym = Symbol('test');
    expect(isEmpty({ [sym]: 123 })).toBe(true);
  });

  test('numeric edge cases: NaN, Infinity, -Infinity are treated as empty', () => {
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty(Infinity)).toBe(true);
    expect(isEmpty(-Infinity)).toBe(true);
  });

  test('nested structures are not empty if there is a key', () => {
    expect(isEmpty({ foo: {} })).toBe(false);
    expect(isEmpty({ foo: [] })).toBe(false);
  });

  test('unicode whitespace is NOT treated as empty', () => {
    expect(isEmpty('\u00A0')).toBe(false);
    expect(isEmpty('\u3000')).toBe(false);
  });

  test('string containing both zero-width and visible characters is NOT empty', () => {
    expect(isEmpty('\u200B a')).toBe(false);
  });

  test('array-like objects with numeric length behave correctly', () => {
    expect(isEmpty({ length: 0 })).toBe(false);
    expect(isEmpty({ length: 1, 0: 'a' })).toBe(false);
  });

  test('function with properties is not empty', () => {
    function fn() {}
    fn.x = 123;
    expect(isEmpty(fn)).toBe(false);
  });

  test('symbol values are treated as empty', () => {
    expect(isEmpty(Symbol('x'))).toBe(true);
  });

  test('consistency: isEmpty(x) === isEmpty(Object(x)) for primitives', () => {
    expect(isEmpty('a')).toBe(isEmpty(new String('a')));
    expect(isEmpty(5)).toBe(isEmpty(new Number(5)));
    expect(isEmpty(true)).toBe(isEmpty(new Boolean(true)));
  });

  test('object with non-enumerable properties is still treated as empty', () => {
    const obj = {};
    Object.defineProperty(obj, 'x', { value: 10, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });

  test('treats File objects or Blobs as empty (no enumerable props)', () => {
    if (typeof Blob === 'undefined') {
      return;
    }
    const blob = new Blob(['hello']);
    expect(isEmpty(blob)).toBe(true);
  });
});