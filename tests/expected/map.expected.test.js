import map from '../../src/map.js';

describe('map.js – Expected behavior', () => {
  test('MAP-EXP-001: Maps values correctly', () => {
    expect(map([4, 8], n => n * n)).toEqual([16, 64]);
  });

  test('MAP-EXP-002: Handles null/undefined', () => {
    expect(map(null, x => x)).toEqual([]);
  });
});