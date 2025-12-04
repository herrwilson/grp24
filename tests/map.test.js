import map from '../src/map.js';

describe('map.js – Unit tests (Could)', () => {
  test('creates array of iteratee results', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64]);
  });

  test('returns empty array for null/undefined', () => {
    expect(map(null, x => x)).toEqual([]);
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    const copy = [...arr];

    const result = map(arr, n => n + 1);

    expect(result).toEqual([2, 3, 4]);
    expect(arr).toEqual(copy);
  });

  test('maps over strings as array-like (if supported)', () => {
    // Adjust expectation to actual behaviour if needed
    expect(map('abc', ch => ch.toUpperCase())).toEqual(['A', 'B', 'C']);
  });


});