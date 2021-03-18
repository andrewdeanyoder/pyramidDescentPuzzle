module.exports.solvePyramid = (pyramid) => {
  const path = '';

  return path;
}

//given an index in the pyramid, returns the row of that entry
module.exports.findRow = (index, size) => {
  if(index > size) return null;
  if (index === 0) return 0;

  let rowCount = 0;
  while (index > 0) {
    rowCount++;
    index - rowCount - 1;
  }

  return rowCount + 1;
};

module.exports.findChildren = (index, pyramid) => {

};
//const array = [2, 4, 3, 3, 2, 6, 2, 9, 5, 2, 10, 5, 15, 5]

//given an index, return the children indicies
  //find the row
    //loop, subtracting increasing integers from index, until index is negative
  //add the row, then children are the next two
/*
0 -> 1, 2
1 -> 3, 4
3 -> 6, 7


Find the row: loop, subtract increasing integers, until you hit a negative number
8 - 0 - 1 = 7
7- 1 - 1 = 5
5 - 2 - 1 = 2
2 - 3 - 1 = -1

5-0 - 1 = 4
4-1 - 1 = 2
2- 2- 1 = -1

*/
