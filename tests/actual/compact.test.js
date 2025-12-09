import compact from '../../src/compact.js';

describe('compact.js – Unit tests (Could)', () => {
  test('COMP-001: returns empty array when input is empty or all falsy', () => {
    expect(compact([])).toEqual([]);
    expect(compact([0, false, null])).toEqual([]);
  });
});