const solvePyramid = require('./pyramidDescent');

describe('solvePyramid', () => {
  test('returns a string', () => {
    expect(typeof solvePyramid([1])).toBe('string');
  });
});