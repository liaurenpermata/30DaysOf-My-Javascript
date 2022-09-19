//Number 1
// let base = prompt('Enter Base:')
// let height = prompt('Enter height:')
// console.log(`The area of the triangle is ` + base*height)

//Number 2
// let a = parseInt(prompt('Enter a:'))
// let b = parseInt(prompt('Enter b:'))
// let c = parseInt(prompt('Enter c:'))
// console.log('The perimeter of the triangle is ' + (a+b+c))

//Number 3
// let recA = parseInt(prompt('Enter recA:'))
// let recB = parseInt(prompt('Enter recB:'))
// console.log('Are Triangle : ' + (2*(recA+recB)))

//Number 4
// let circle = prompt('Enter r circle:')
// let pi = 3.14
// console.log(2*pi*circle)

//Number 5
// i dont know how to calculate but the answer is 2
//y=2x-2 -> m=2 yang menempel pada x
//y=mx-c
let m = 2

//Number 6
let y1 = 2
let x1 = 2
let y2 = 10
let x2 = 6
console.log((y2-y1)/(x2-x1))

//Number 7
console.log(m == (y2-y1)/(x2-x1))
console.log(m === (y2-y1)/(x2-x1))

//Number 8
// let x = prompt('Enter x: ')
// let y8= (x**2)+(6*x)+9
// console.log('Value of y is : ' + y8)

//Number 9
// let hours = prompt('Enter hours')
// let ratePerHours = prompt('Enter rate per hour : ')
// console.log('Your weekly earning is ' + (hours*ratePerHours))

//Number 10
let myName = 'lia'
myName.length > 7 ? console.log('long') : console.log('short')

//Number 11
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'
firstName2.length > lastName2.length ? console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`) : console.log('')

//Number 12
let myAge = 250
let yourAge = 25
console.log(`I am 225 years older than you.`)

//Number 13
// let birthYear = prompt('Enter birth year : ')
// 2022 - birthYear > 18 ? console.log(`You are ${2022 - birthYear}. You are old enough to drive
// `) : console.log(`You are ${2022 - birthYear}. You will be allowed to drive after ${18 - (2022 - birthYear)} years.
// `)

//Number 14
// let numberILive = prompt('Enter number of years you live: ')
// let secondsLive = ((numberILive*365)*24)*60*60
// console.log(`You lived ${secondsLive} seconds.`)

//Number 15
let date = new Date();
let yearNow = date.getFullYear()
let monthNow = date.getMonth()+1
let dayNow = date.getDate()
let hourNow = date.getHours()
let minuteNow = date.getMinutes()
console.log(`${yearNow}-${monthNow}-${dayNow} ${hourNow}:${minuteNow}`)
console.log(`${dayNow}-${monthNow}-${yearNow} ${hourNow}:${minuteNow}`)
console.log(`${dayNow}/${monthNow}/${yearNow} ${hourNow}:${minuteNow}`)

console.log('============================================')