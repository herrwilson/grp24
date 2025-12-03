import get from '../src/get.js';

describe('get.js – Unit tests (Should)', () => {
  const object = { a: [{ b: { c: 3 } }] };

  test('retrieves value at path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value when path is undefined', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});