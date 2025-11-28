import isEmpty from '../src/isEmpty.js';

describe('isEmpty.js – Manual tests from Part 1 Test Plan (Group 24)', () => {
  test('EMP-01: Verify detection of empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('EMP-02: Handle whitespace-only input (common user error)', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('\t\n\r')).toBe(true);
  });

  test('EMP-03: Detect malicious or invisible characters (Unicode zero-width)', () => {
    expect(isEmpty('\u200B')).toBe(true);  // zero-width space
    expect(isEmpty('\u2060')).toBe(true);  // word joiner
  });

  test('EMP-04: Accept valid non-empty string', () => {
    expect(isEmpty('asd asd asd')).toBe(false);
    expect(isEmpty(' potato ')).toBe(false);
  });

  test('EMP-05: Check behavior for empty array or object (e.g., no cart items)', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmptyButWithPropertiesToBeFalse();
  });

  function expectEmptyButWithPropertiesToBeFalse() {
    expect(isEmpty({ length: 0 })).toBe(false);  // has own property
    expect(isEmpty([null])).toBe(false);
  }
});

describe('isEmpty.js – AI-generated tests (Grok 4)', () => {
  test('considers null and undefined as empty', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('handles Map and Set correctly', () => {
    () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
  };

  test('treats strings with only zero-width characters as empty', () => {
    expect(isEmpty('\uFEFF')).toBe(true);        // BOM
    expect(isEmpty('\u200D\u200C')).toBe(true);  // joiners
  });

  test('does NOT treat boolean, number, function as empty', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
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

  test('handles symbols as keys', () => {
    const sym = Symbol('test');
    expect(isEmpty({ [sym]: 123 })).toBe(false);
  });
});