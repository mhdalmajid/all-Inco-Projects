/**
 Write a function `concatArray` that takes an array of words, and return a single string made of those words.

The words will be separated by a space, and the string will end with a `.`.


Here are a couple of examples:

Test:   concatArray(["Hello", "this", "is", "dog"])
Return:
```'Hello this is dog.'
```

Test:   concatArray(["All", "I", "want", "for", "christmas", "is", "you"])
Return:
```'All I want for christmas is you.'
```

Test:   concatArray([])
Return:
```'.'
```
 */

let concatArray = (array) => `${array.join(' ')}.`

// console.log(concatArray(['Hello', 'this', 'is', 'dog']))
// console.log(concatArray([]))
