import compact from '../../src/compact.js';

describe('compact.js – expected behavior, manual tests', () => {
  test('COMP-001: Removes all falsy values including NaN', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN]))
      .toEqual([1, 2, 3]);
  });

  test('COMP-002: Empty input returns empty', () => {
    expect(compact([])).toEqual([]);
  });
});