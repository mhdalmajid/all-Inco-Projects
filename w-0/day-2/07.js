// Write a function `matrixGen` that takes an height and a width as arguments.
// It will return a two-dimensional array where the value in the cell at row i and column j is i x j.

// Here are a few test cases:

// Test:   matrixGen(1,5)
// Return:
// ```[ [ 1, 2, 3, 4, 5 ] ]
// ```

// Test:   matrixGen(5,4)
// Return:
// ```[
//   [ 1, 2, 3, 4 ],
//   [ 2, 4, 6, 8 ],
//   [ 3, 6, 9, 12 ],
//   [ 4, 8, 12, 16 ],
//   [ 5, 10, 15, 20 ]
// ]
// ```

// Test:   matrixGen(3,6)
// Return:
// ```[
//   [ 1, 2, 3, 4, 5, 6 ],
//   [ 2, 4, 6, 8, 10, 12 ],
//   [ 3, 6, 9, 12, 15, 18 ]
// ]
// ```

// Test:   matrixGen(0,0)
// Return:
// ```[]
// ```
function matrixGen(height, width) {
  let arr = []
  let tempArr
  for (let i = 1; i <= height; i++) {
    tempArr = []
    for (let j = 1; j <= width; j++) {
      tempArr.push(i * j)
    }
    arr.push(tempArr)
  }
  return arr
}

console.log(matrixGen(5, 4))
