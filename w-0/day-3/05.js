/**
 Write a function `groupFamilies` that takes an array of objects with `name` and `surname` keys.

It will return an object with surnames as keys, and the associated names in an array.


Here are a few test cases:

Test:   groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])
Return:
```{ Obama: [ 'Barack', 'Michelle' ] }
```

Test:   groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}])
Return:
```{ Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
```
 */

function groupFamilies(array) {
  let newArr = {}
  array.forEach((item) => {
    if (newArr[item.surname])
      newArr = {
        ...newArr,
        [item.surname]: [...newArr[item.surname], item.name],
      }
    else newArr = { ...newArr, [item.surname]: [item.name] }
  })

  return newArr
}

console.log(
  groupFamilies([
    { name: 'Barack', surname: 'Obama' },
    { name: 'Michelle', surname: 'Obama' },
    { name: 'Donald', surname: 'Trump' },
  ])
)
