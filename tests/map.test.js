import map from '../src/map.js';

describe('map.js – Unit tests (Could)', () => {
  test('creates array of iteratee results', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64]);
  });

  test('returns empty array for null/undefined', () => {
    expect(map(null, x => x)).toEqual([]);
  });
});