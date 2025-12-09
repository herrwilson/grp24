import get from '../../src/get.js';

describe('get.js – Unit tests (Should)', () => {
  const object = { a: [{ b: { c: 3 } }] };

  test('GET-001: retrieves value at path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('GET-002: returns default value when path is undefined', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('GET-003: returns undefined when path does not exist and no default is provided', () => {
    expect(get(object, 'missing.prop')).toBeUndefined();
    expect(get(object, 'a[1].b')).toBeUndefined();
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
    // a is a number, attempting to go deeper should not throw
    expect(get(data, 'a.b.c', 'safe')).toBe('safe');
  });
});