// Write a function `evenIndexes` that takes a word as argument, and returns an array of the letters situated at even indexes.

// Here are the test cases:

// Test:   evenIndexes("lol")
// Return:
// ```[ 'l', 'l' ]
// ```

// Test:   evenIndexes("You're weird")
// Return:
// ```[ 'Y', 'u', 'r', ' ', 'e', 'r' ]
// ```

// Test:   evenIndexes("")
// Return:
// ```[]
// ```

function evenIndexes(word) {
  let newArr = []
  for (let i = 0; i < word.length; i += 2) {
    newArr.push(word[i])
  }
  return newArr
}

console.log(evenIndexes("You're weird"))
console.log(evenIndexes('lol'))
console.log(evenIndexes(''))
