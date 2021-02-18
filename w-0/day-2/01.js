/**
 Write a function `displayFullName` that takes a full name as argument, and displays them James Bond-style.

If the name has middle names or several surnames, only the last part will be repeated.

Here are a few test cases:

Test:   displayFullName("James Bond")
Output:
```My name is Bond, James Bond
```

Test:   displayFullName("Ada Lovelace")
Output:
```My name is Lovelace, Ada Lovelace
```

Test:   displayFullName("Salvador Felipe Jacinto Dalí")
Output:
```My name is Dalí, Salvador Felipe Jacinto Dalí
```
 */
function displayFullName(fullname) {
  let arr = fullname.split(' ')

  return `My Name ${arr[arr.length - 1]},${arr.join(' ')}`
}
console.log(displayFullName('Salvador Felipe Jacinto Dalí'))
