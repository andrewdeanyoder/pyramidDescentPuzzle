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
    expect(Array.isArray(findChildren(0, 3))).toBe(true);
  });

  test('result array has two elements', () => {
    const result = findChildren(0, 3);
    expect(result.length).toBe(2);
    expect(result[0]).not.toBe(undefined);
    expect(result[1]).not.toBe(undefined);
  });

  test('returns null when children do not exist', () => {
    expect(findChildren(0, 1)).toBe(null);
    expect(findChildren(3, 3)).toBe(null);
    expect(findChildren(1, 1)).toBe(null);
  });

  test('returns null when array is empty', () => {
    expect(findChildren(0, 0)).toBe(null);
  });

  test('returns the children in a small pyramid', () => {
    expect(findChildren(0, 3)).toEqual([1, 2]);
    expect(findChildren(1, 6)).toEqual([3, 4]);
    expect(findChildren(2, 6)).toEqual([4, 5]);
  });

  test('returns the children in a large pyramid', () => {
    expect(findChildren(5049, 5151)).toEqual([5149, 5150]);
    expect(findChildren(1275, 5151)).toEqual([1326, 1327]);
  });

  test('returns children correctly in an incomplete pyramid', () => {
    const pyramidSize = 11;
    expect(findChildren(7, pyramidSize)).toBe(null);
    expect(findChildren(4, pyramidSize)).toEqual([7, 8]);
  });

});

describe('solvePyramid', () => {
  test('returns a string', () => {
    expect(typeof solvePyramid([1])).toBe('string');
  });
});

/*

*/
