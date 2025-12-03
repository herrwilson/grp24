import filter from '../src/filter.js';

describe('filter.js – Unit tests (Must)', () => {
  const users = [{ user: 'barney', active: true }, { user: 'fred', active: false }];

  test('returns array of elements where predicate is truthy', () => {
    expect(filter(users, o => o.active)).toEqual([{ user: 'barney', active: true }]);
  });

  test('returns empty array-like structure for null/undefined input', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });
});