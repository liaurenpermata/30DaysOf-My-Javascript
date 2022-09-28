//Number 1
console.log(countries)
console.log(webTechs)

//Number 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ')
console.log(words)
console.log(words.length)

//Number 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log("ini hasil nomor 3a", shoppingCart)

shoppingCart.push('Sugar')
console.log("ini hasil nomor 3b", shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log("ini hasil nomor 3c", shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log("ini hasil nomor 3d", shoppingCart)

//Number 4
console.log(countries.includes('Ethiopia'))

//Number 5
let sass = webTechs.includes('Sass')
if(!sass) {
    console.log(webTechs)
    webTechs.push('Sass')
    console.log(webTechs)
} else {
    console.log('Sass is a CSS preprocess')
}

//Number 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']


let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

console.log("================================")