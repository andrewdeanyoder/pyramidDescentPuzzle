module.exports.solvePyramid = (pyramid, target, currentIndex = 0) => {

  const children = this.findChildren(currentIndex, pyramid.length);
  const newTarget = target / pyramid[currentIndex];
  //base case: there are no more children
  if(children === null) {
    //indicates the end of a valid path
    if(newTarget === 1) {
      return '';
    }
    //indicates a failed path
    return null;
  }

  //recursive case
  //recurse on the left and right children
  const left = this.solvePyramid(pyramid, newTarget, children[0]);
  //if a left child exists
  if(typeof left === 'string') {
    return 'L' + left;
  } else {
    const right = this.solvePyramid(pyramid,newTarget, children[1]);
    //if a right child exists
    if(typeof right === 'string') {
      return 'R' + right;
    }
  }
  return null;
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
  const offset = this.findRow(index, pyramidSize);
  if(offset === null) return null;
  index = index + offset;
  //checking if the potential children are beyond the pyramid's bounds
  if(index + 1 >= pyramidSize || index + 2 >= pyramidSize) return null;
  else return [index + 1, index + 2];
};

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
