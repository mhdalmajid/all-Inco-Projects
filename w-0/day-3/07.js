// Write a function `hasValueDepth` that takes a nested object and a value as arguments, and returns whether that value is found in the object.

// The value must be found as a value, not as a key.

// Here are a few test cases:

// Test:   hasValueDepth(obj, "hello")
// Return:
// ```false
// ```

// Test:   hasValueDepth(obj, "Elvis Presley")
// Return:
// ```true
// ```

// Test:   hasValueDepth(obj, "author")
// Return:
// ```false
// ```

// Test:   hasValueDepth(obj, "dystopia")
// Return:
// ```true
// We will test with the following object:

let obj = {
  hello: 'world',
  goDeeper: {
    1961: 'Barack Obama',
    1964: 'Michelle Obama',
    1935: 'Elvis Presley',
    1984: {
      author: 'George Orwell',
      genre: 'dystopia',
    },
  },
}
