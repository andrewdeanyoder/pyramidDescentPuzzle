const { solvePyramid, findRow, findChildren } = require('./pyramidDescent');

describe('findRow', () => {
  test('returns a number when the index exists', () => {
    expect(typeof findRow(0, [1, 2, 3] )).toBe('number');
  });

  test('returns null when index is out of bounds', () => {
    expect(findRow(5, [1])).toBe(null);
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
