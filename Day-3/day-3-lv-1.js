//Number 1
let firstName = 'Lia'
let lastName = 'aaa'
let country = 'Indonesia'
let city = 'Jakarta'
let age = 20
let isMarried = 'single'
let year = 2022

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//Number 2
let number10 = 10
let string10 = '10'
console.log(number10 == string10)
console.log(number10 === string10)

//Number 3
let number98 = '9.8'
console.log(parseInt(number98) == number10)
console.log(parseInt(number98) === number10)

//Number 4
console.log(3<4)
console.log(undefined === null)

//Number 5
//Below is the hypothesis before console.log
// 4 > 3 true
// 4 >= 3 true
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false 
// 4 !== 4 false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false
// Find the length of python and jargon and make a falsy comparison statement.  true
console.log('Number 5')
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let python = 'python'
let jargon = 'jargon'
console.log(python.length == jargon.length)
console.log(python.length === jargon.length)

//Number 6
// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12) false
// !(4 > 3 && 10 > 12) true
// !(4 === '4') true
// There is no 'on' in both dragon and python true
console.log('Number 6')
console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4 === '4'))

let dragon = 'dragon'
console.log(python.includes('on') && dragon.includes('on'))

//Number 7
let now = new Date();
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
let datePast = new Date('1970-01-01')
console.log(datePast.getSeconds())
let timeInSecond = new Date().getTime()
console.log(timeInSecond)
let allSecond = Date.now()
console.log(allSecond)


console.log('===================================================')