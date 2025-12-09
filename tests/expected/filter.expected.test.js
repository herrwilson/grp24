import filter from '../../src/filter.js';

describe('filter.js – Expected behavior', () => {
  const users = [{ user: 'barney', active: true }, { user: 'fred', active: false }];

  test('FIL-001: Filters correctly', () => {
    expect(filter(users, o => o.active)).toEqual([{ user: 'barney', active: true }]);
  });

  test('FIL-002: Handles null/undefined gracefully', () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test('FIL-003: works with simple numeric arrays', () => {
    const nums = [1, 2, 3, 4, 5];
    const evens = filter(nums, n => n % 2 === 0);
    expect(evens).toEqual([2, 4]);
  });

  test('FIL-004: does not mutate the original array', () => {
    const nums = [1, 2, 3];
    const copy = [...nums];
    const res = filter(nums, n => n > 1);

    expect(res).toEqual([2, 3]);
    expect(nums).toEqual(copy);
  });
});