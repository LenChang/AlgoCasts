// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

//function steps(n, row = 1, col = 1, str = '') {
  /*--Pesudo Code: Solution (Recusive)--
  1. make it as a matrix, and you need to build a stair from 1 to n by row
  2. extend the function steps(n, row,col, str) that can fullfill the recursive criteria.
    2-a. if the col > n && row = n, then finish it
    2-b. if the col > row, then str append space ' ' and call steps(n, row+1, col, str)
    2-c. if the index of col <= row, then append signal '#' and call steps(n, row+1, col, str)
    2-d. if the col > n, then call steps(n, row+1, 1, '')
  
  
  if(col > n && row === n) return console.log(str)
  
  if(col > n){
      console.log(str)
      return steps(n, row+1, 1, '');
  }
  
  return col > row ? steps(n, row, col+1, str += ' ') : steps(n, row, col+1, str += '#');
  */
// }


// function steps(n) {
  /* --Pesudo Code: Solution (Nested loop)--
  1. A loop from 1 to number:N 
  2. loop
    a. decide how many signal # and space ' ' by the index
    b. make them to the different array, arrSignal and arrSpace
    c. concat arrSignal and arrSpace, and print it
  
  
  for(let numOfSignal = 1; numOfSignal<=n; numOfSignal++){
      const numOfSpace = n - numOfSignal;
      const arrSignal = new Array(numOfSignal).fill('#');
      const arrSpace = new Array(numOfSpace).fill(' ');
      console.log(arrSignal.concat(arrSpace).join(''))
  }
  */
// }
