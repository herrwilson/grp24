import compact from '../../src/compact.js';

describe('compact.js – test evidence of actual behaviour', () => {
  test('COMP-ACT-001: returns empty array when input is empty or all falsy', () => {
    expect(compact([])).toEqual([]);
    expect(compact([0, false, null])).toEqual([]);
  });
});