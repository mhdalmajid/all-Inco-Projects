/* eslint-disable no-param-reassign */
// Write a function `countOccurences` that takes a string as argument, and returns an object.
// This object will associate the number of occurences of a word with an array of corresponding words.

// Here are a few test cases:

// Test:   countOccurences("hello is it you hello hello")
// Return:
// ```{ '1': [ 'is', 'it', 'you' ], '3': [ 'hello' ] }
// ```

// Test:   countOccurences("hey mama hey mama")
// Return:
// ```{ '2': [ 'hey', 'mama' ] }
// ```

// function countOccurences(str) {
//   let count
//   let obj = {}
//   let arr = str.split(' ').sort()
//   arr.forEach((element) => {
//     count = arr.lastIndexOf(element) - arr.indexOf(element) + 1
//     if (obj[count] === undefined) obj[count] = [element]
//     else if (obj[count].indexOf(element) === -1) obj[count].push(element)
//   })
//   return obj
// }

const countOccurences = (str) => {
  // done
  let done = []
  // split by space
  return str.split(' ').reduce((accum, word) => {
    // check done
    if (done.includes(word)) return accum
    // push to done
    done.push(word)
    // add count
    let count = str.split(' ').filter((w) => w === word).length
    // check count
    if (!accum[count]) accum[count] = []
    // add word to count
    accum[count].push(word)
    // return accumulator
    return accum
  }, {})
}
console.log(countOccurences('hello is it you hello hello'))
console.log(countOccurences('hey mama hey mama'))
