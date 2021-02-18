function displayName(name, surname) {
  return `My name is ${surname}, ${name} ${surname}`
}
const first = displayName('mohammed', 'almajid')

function rockPaperScissors(x, y) {
  if (x !== 'rock' && x !== 'paper' && x !== 'scissors') return `Argument error at First player: ${x}`
  if (y !== 'rock' && y !== 'paper' && y !== 'scissors') return `Argument error at Second player: ${x}`

  const concat = x + y

  const result = {
    rockrock: 'Draw',
    rockpaper: 'Second player wins',
    rockscissors: 'First player wins',
    paperpaper: 'Draw',
    paperscissors: 'Second player wins',
    paperrock: 'First player wins',
    scissorsscissors: 'Draw',
    scissorsrock: 'Second player wins',
    scissorspaper: 'First player wins',
  }

  return result[concat]
}

function printVowels(x) {
  const vowels = 'aeiouAEIOU'
  const result = x
    .split('')
    .filter((l) => vowels.includes(l))
    .join('')

  return result
}

function abbrev(str) {
  const { length } = str
  const substr = str.substr(0, 3)

  return `${substr} ${length}`
}

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    if (i * 2 - 1 > n) break
    let str = ' '.repeat(n - i)
    let str2 = '#'.repeat(i * 2 - 1)
    console.log(str + str2)
  }
}

function subDigits(number) {
  if (number < 0) return 'Argument Error'
  let array = Array.from(String(number), Number)
  let result = number
  array.forEach((element) => {
    result -= element
  })
  return result
}
console.log(subDigits(4000))
// console.log(displayName('Mohammed', 'Almajid'))
// console.log(printVowels('hello world'));
// console.log(rockPaperScissors('scissors', 'scissors'));
// console.log(abbrev('Nice'));
// pyramid(7);
console.log(subDigits(4000))
