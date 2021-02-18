// Write a function `averageMinMax` that takes an array of integers, and displays the minimum, the maximum, and the average of those integers.

// Reminder: the average of a series of integers is the total sum of those integers divided by the number of integers. You will floor the result.

// Here are a few test cases:

// Test:   averageMinMax([-42, 0, 42])
// Output:
// ```Min: -42
// Max: 42
// Average: 0
// ```

// Test:   averageMinMax([30, 20, 100])
// Output:
// ```Min: 20
// Max: 100
// Average: 50
// ```

// Test:   averageMinMax([-23, -4, -12])
// ```Min: -23
// Max: -4
// Average: -13
// ```

const averageMinMax = (arr) => {
  let Average = arr.reduce((tot, amount) => tot + amount) / arr.length
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return `Min: ${min} \nMax: ${max} \nTotal: ${Average}`
}

console.log(averageMinMax([30, 20, 100]))
