import filter from '../../src/filter.js';

describe('filter.js – Expected behavior', () => {
  const users = [{ user: 'barney', active: true }, { user: 'fred', active: false }];

  test('FIL-EXP-001: Filters correctly', () => {
    expect(filter(users, o => o.active)).toEqual([{ user: 'barney', active: true }]);
  });

  test('FIL-EXP-002: Handles null/undefined gracefully', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });
});