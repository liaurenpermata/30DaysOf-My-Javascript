const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //Number 1
  let emptyArray = []

  //Number 2
  let number1 = [1,2,3,4,5,6,7,8,9]

  //Number 3
  console.log(number1.length)

  //Number 4
  console.log(number1[0])
  console.log(number1[number1.length-1])
  let lengthNumber1 = Math.floor(number1.length/2)
  console.log(number1[lengthNumber1])

  //Number 5
  let mixedDataTypes = ['halo',1,true,2.3]
  console.log(mixedDataTypes.length)

  //Number 6
  let company1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

  //Number 7
  console.log(company1)

  //Number 8
  console.log(company1.length)

  //Number 9
  console.log(company1[0])
  console.log(company1[company1.length-1])
  let lengthCompany1 = Math.floor(company1.length/2)
  console.log("ini nomor 9", company1[lengthCompany1])

  //Number 10
  console.log(company1.toString())
  console.log(company1.join(' '))

  //Number 11
  company1[0] = company1[0].toUpperCase()
  company1[1] = company1[1].toUpperCase()
  company1[2] = company1[2].toUpperCase()
  company1[3] = company1[3].toUpperCase()
  company1[4] = company1[4].toUpperCase()
  company1[5] = company1[5].toUpperCase()
  company1[6] = company1[6].toUpperCase()
  
  console.log(company1)

  //Number 12
  console.log(company1.join(', '))

  //Number 13
  console.log(company1.includes('TOKOPEDIA'))
  console.log(company1.includes('GOOGLE'))

  // //Number 14
  // let oo = []
  // for(let i=0;i<company1.length;i++) {
  //   if(company1[i].includes('oo')){
  //     oo.push(company1[i])
  //     console.log(company1[i])
  //   }
  // }
  // console.log(oo)
  //Number 15
  console.log(company1.sort())

  //Number 16
  console.log(company1.reverse())

  //Number 17
  console.log(company1.slice(0,3))

  //Number 18
  console.log(company1.slice(4, 7))// hanya memotong virtual
  console.log(company1.splice(4,3))//memotong sesungguhnya dari array

  console.log(company1)

  //Number 19
  let company1Length = company1.length;
  if(company1Length%2 == 0){
    console.log("ini nomor 19 genap", company1.slice((company1Length/2)-1, (company1Length/2)+1))
  } else {
    console.log("ini nomor 19 ganjil", company1.slice(Math.floor(company1Length/2), Math.floor(company1Length/2)+1))
  }

  //Number 20
  console.log(company1.shift())

  //Number 21
  //dah ada diulang lagi

  //Number 22
  console.log(company1.pop())

  //Number 23
  console.log(company1.splice(0, company1.length))

  console.log("====================================")