const { solvePyramid, findRow, findChildren } = require('./pyramidDescent');

describe('findRow', () => {
  test('returns a number when the index exists', () => {
    expect(typeof findRow(0, 3)).toBe('number');
  });

  test('returns null when index is out of bounds', () => {
    expect(findRow(5, 3)).toBe(null);
  });

  test('returns the row in a small pyramid', () => {
    const pyramid = [0, 1, 2, 3, 4, 5]
    expect(findRow(0, pyramid.length)).toBe(0);
    expect(findRow(3, pyramid.length)).toBe(2);
    expect(findRow(5, pyramid.length)).toBe(2);
  });

  test('returns the row in a large pyramid', () => {
    const pyramidSize = 5150;
    expect(findRow(0, pyramidSize)).toBe(0);
    expect(findRow(328, pyramidSize)).toBe(25);
    expect(findRow(5000, pyramidSize)).toBe(99);
    expect(findRow(5150, pyramidSize)).toBe(100);
  });

});

describe('findChildren', () => {
  test('returns an array when children exist', () => {
    expect(Array.isArray(findChildren(0, [1, 2, 3]))).toBe(true);
  });

  test('returns null when children do not exist', () => {
    expect(findChildren(0, [1])).toBe(null);
    expect(findChildren(3, [1, 2, 3])).toBe(null);
  });
});

describe('solvePyramid', () => {
  test('returns a string', () => {
    expect(typeof solvePyramid([1])).toBe('string');
  });
});

/*

*/
