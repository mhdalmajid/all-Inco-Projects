/**
 *
Write a function `hasValue` that takes an object and a value as arguments,
and returns whether that value is found in the object.

The value must be found as a value, not as a key.


Here are a few test cases:


Test:   hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")
Return:
```true
```

Test:   hasValue({"hello": "bonjour", "my": "mon"}, "hello")
Return:
```false
```

Test:   hasValue({"hello": "bonjour", "my": "mon"}, "tasty")
Return:
```false
```
 */

const hasValue = (obj, value) => Object.values(obj).indexOf(value) > -1

console.log(
  hasValue({ hello: 'bonjour', my: 'mon' }, 'bonjour'),
  hasValue({ hello: 'bonjour', my: 'mon' }, 'hello'),
  hasValue({ hello: 'bonjour', my: 'mon' }, 'tasty')
)
