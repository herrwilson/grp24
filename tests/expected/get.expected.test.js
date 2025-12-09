import get from '../../src/get.js';

describe('get.js – Expected behavior', () => {
  const obj = { a: [{ b: { c: 3 } }] };

  test('GET-EXP-001: Retrieves nested value', () => {
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('GET-EXP-002: Returns default on missing path', () => {
    expect(get(obj, 'a.b.c', 'default')).toBe('default');
  });
});