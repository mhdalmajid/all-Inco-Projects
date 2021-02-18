/* eslint-disable no-param-reassign */
let performance = require('./utils/performance')
let text = require('./utils/text')

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

performance(countOccurences, text)
