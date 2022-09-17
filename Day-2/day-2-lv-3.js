//Number 1
let level3String1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(level3String1.match(/love/gi))
//Number 2
let level3String2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(level3String2.match(/because/gi))
//Number 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanString = sentence.replace(/([^a-z0-9 ]+)/gi, '')
console.log(cleanString)
//Number 4
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log((5000*12)+(10000)+(15000*12))
let number = (5000*12)+(10000)+(15000*12)
console.log(eval(number))