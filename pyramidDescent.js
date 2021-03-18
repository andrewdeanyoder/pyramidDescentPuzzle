module.exports.solvePyramid = (pyramid) => {
  const path = '';

  return path;
}

//given an index in the pyramid, returns the row of that entry
module.exports.findRow = (index, size) => {
  if (index > size) return null;
  if (index === 0) return 0;

  let rowCount = 0;
  while (index > 0) {
    rowCount++;
    index = index - rowCount - 1;
  }

  return rowCount;
};

//given an index in the pyramid, returns the indicies of it's children in an array
//returns null if one or more of the children don't exist
module.exports.findChildren = (index, pyramidSize) => {
  //finds the number of spaces between the parent and the children
  debugger;
  const offset = this.findRow(index, pyramidSize);
  if(offset === null) return null;
  index = index + offset;
  //checking if the potential children are beyond the pyramid's bounds
  if(index + 1 >= pyramidSize || index + 2 >= pyramidSize) return null;
  else return [index + 1, index + 2];
};

const result = module.exports.findChildren(0, 3);
console.log(result);
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
