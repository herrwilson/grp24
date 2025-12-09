import map from '../../src/map.js';

describe('map.js – Expected behavior', () => {
  test('MAP-001: Maps values correctly', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64]);
  });

  test('MAP-002: Handles null/undefined', () => {
    expect(map(null, x => x)).toEqual([]);
  });

  test('MAP-003: does not mutate the original array', () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    const result = map(arr, n => n + 1);

    expect(result).toEqual([2, 3, 4]);
    expect(arr).toEqual(copy);
  });

  test('MAP-004: maps over strings as array-like (if supported)', () => {
    expect(map('abc', ch => ch.toUpperCase())).toEqual(['A', 'B', 'C']);
  });
});
