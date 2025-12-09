import filter from '../../src/filter.js';

describe('filter.js – test evidence of actual behaviour', () => {
  test('FIL-ACT-001: returns empty array-like structure for null/undefined input', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });
});