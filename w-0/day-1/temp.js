function subDigits(number) {
  if (number < 0) return 'Argument Error'

  let array = Array.from(String(number), Number)
  let result = number
  console.log(array)
  array.forEach((element) => {
    result -= element
  })
  // for (let i = 0; i < array.length; i++) result -= array[i];

  return result
}
// console.log(subDigits(0));
// console.log(subDigits(12));
// console.log(subDigits(4000));
// console.log(subDigits(-4));
