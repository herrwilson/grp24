describe('pipeline test', () => {
  test('ADD-ACT-001: String inputs are concatenated, not summed', () => {
    expect(true).toBe(true);
    expect(add('abc', 5)).toBe('abc5');
  });
});
