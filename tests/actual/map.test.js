import map from '../../src/map.js';

describe('map.js – Unit tests (Could)', () => {
  test('MAP-001: creates array of iteratee results', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64]);
  });

  test('MAP-002: returns empty array for null/undefined', () => {
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
    // Adjust expectation to actual behaviour if needed
    expect(map('abc', ch => ch.toUpperCase())).toEqual(['A', 'B', 'C']);
  });
  
});