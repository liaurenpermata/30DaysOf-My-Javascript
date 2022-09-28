const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Number 1
console.log("ini 1a", ages.sort())
console.log(ages[0])
console.log(ages[ages.length-1])


console.log("length ages", ages.length)
let median;
if(ages.length%2 ==0){
    median = (ages[ages.length/2] + ages[(ages.length/2)+1]) / 2;
    console.log("median data genap", median)
} else {
    median = ages[Math.round(ages.length/2)]
    console.log("median data ganjil", median)
}

let sum = 0;
for(let i=0;i<ages.length;i++){
    sum = sum + ages[i]
}
sum = sum/ages.length
console.log("ini nomor 1c", sum)

console.log("ini nomor 1d", ages[ages.length-1]-ages[0])

console.log("ini nomor 1e", ages[0]-sum)
console.log("ini nomor 1e", ages[ages.length-1]-sum)

//Number 3
console.log(countries.slice(0,10))

//Number 4
let countries3Length = countries.length;
if(countries3Length%2 == 0){
  console.log("ini nomor 19 genap", countries.slice((countries3Length/2)-1, (countries3Length/2)+1))
} else {
  console.log("ini nomor 19 ganjil", countries.slice(Math.floor(countries3Length/2), Math.floor(countries3Length/2)+1))
}

//Number 5
if(countries3Length%2==0) {
    console.log("ini array pertama genap")
    for(let i=0;i<countries3Length/2;i++){
        console.log(countries[i])
    }
    console.log("ini array kedua genap")
    for(let i=(countries3Length/2)+1;i<countries3Length-1;i++){
        console.log(countries[i])
    }
} else {
    console.log("ini array pertama ganjil")
    for(let i=0;i<Math.floor(countries3Length/2);i++){
        console.log(countries[i])
    }
    console.log("ini array kedua ganjil")
    for(let i=Math.floor(countries3Length/2+1);i<countries3Length;i++){
        console.log(countries[i])
    }
}