//Number 1
let grade2 = 87
switch (true) {
    case grade2 > 90:
        console.log("A")
        break;
    case grade2 > 70:
        console.log("B")
        break;
    case grade2 > 60:
        console.log("C")
        break;
    case  grade2 > 50:
        console.log("D")
        break;
    case ( grade2 < 50 ):
        console.log("F")
        break;
    default:
        console.log("not value")
        break;
}

//Number 2
let months2 =  'September'
switch(true){
    case (months2 == 'September' || months2 == 'October' || months2 == 'November'):
        console.log('the season is autumn')
        break;
    case (months2 == 'December' || months2 == 'January' || months2 == 'February'):
        console.log('the season is winter')
        break;
    case (months2 == 'March' || months2 == 'April' || months2 == 'May'):
        console.log('the season is spring')
        break;
    case (months2 == 'June' || months2 == 'July' || months2 == 'August'):
        console.log('the season is summer')
        break;
}

//Number 3
// let propmtDay2 = prompt("Enter day: ")
// let day2 = propmtDay2.toLowerCase();

// switch(true) {
//     case day2 == 'saturday':
//         console.log('Saturday is a weekend');
//         break;
//     case day2 == 'sunday':
//         console.log('Sunday is a weekend');
//         break;
//         break;
//     case (day2 == 'monday' || day2 == 'tuesday' || day2 == 'wednesday' || day2 == 'thursday' || day2 == 'friday'):
//         console.log(`${day2} is a weekday`);
//         break;
// }

console.log("============================")