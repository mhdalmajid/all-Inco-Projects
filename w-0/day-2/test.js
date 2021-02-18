function Create2DArray(rows, columns) {
  let x = new Array(columns)
  let count = 0
  for (let i = 1; i <= rows; i++) {
    x[count] = new Array(rows)
  }

  return x
}
let array = Create2DArray(5, 4)
console.log(array)
