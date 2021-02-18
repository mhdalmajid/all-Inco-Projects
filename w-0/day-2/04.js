// Write a function `replaceArray` that takes an array of words and returns it after replacing all words that start with `h` or `H` by their uppercase version.

// All other words will remain unchanged.

// Here are a few test cases:

// Test:   replaceArray(["banana", "suit", "hammer"])
// Return:
// ```[ 'banana', 'suit', 'HAMMER' ]
// ```

// Test:   replaceArray(["Hello", "there"])
// Return:
// ```[ 'HELLO', 'there' ]
// ```

// Test:   replaceArray(["Hey!", "hey..."])
// Return:
// ```[ 'HEY!', 'HEY...' ]
// ```
// arr.map((ele) => (ele[0] === 'h' || ele[0] === 'H' ? ele.toUpperCase() : ele))
const replaceArray = (arr) => arr.map((ele) => (ele[0] === 'h' || ele[0] === 'H' ? ele.toUpperCase() : ele))

// console.log(replaceArray(['Hey!', 'hey...']))
console.log(replaceArray(['Hello', 'there', 'hey']))
