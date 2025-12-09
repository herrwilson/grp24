import get from '../../src/get.js';

describe('get.js – Expected behavior (Unit tests)', () => {
  const obj = { a: [{ b: { c: 3 } }] };

  test('GET-001: retrieves nested value', () => {
    expect(get(obj, 'a[0].b.c')).toBe(3);
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('GET-002: returns default on missing path', () => {
    expect(get(obj, 'a.b.c', 'default')).toBe('default');
  });

  test('GET-003: returns undefined when path does not exist and no default is provided', () => {
    expect(get(obj, 'missing.prop')).toBeUndefined();
    expect(get(obj, 'a[1].b')).toBeUndefined();
  });

  test('GET-004: handles numeric indices in array paths', () => {
    const arrObj = { items: ['first', 'second', 'third'] };
    expect(get(arrObj, 'items[1]')).toBe('second');
    expect(get(arrObj, ['items', '2'])).toBe('third');
  });

  test('GET-005: returns default when object is null or undefined', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
  });

  test('GET-006: returns undefined when object is null/undefined and no default is provided', () => {
    expect(get(null, 'a.b')).toBeUndefined();
    expect(get(undefined, 'a.b')).toBeUndefined();
  });

  test('GET-007: handles non-object targets along the path gracefully', () => {
    const data = { a: 5 };
    expect(get(data, 'a.b.c', 'safe')).toBe('safe');
  });
});
