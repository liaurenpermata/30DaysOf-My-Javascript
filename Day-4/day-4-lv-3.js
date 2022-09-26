//Number 1
let months3 = 'November'
switch(true){
    case (months3 == 'January' || months3 == 'March' || months3 == 'Mei' || months3 == 'July' || months3 == 'Agustus' || months3 == 'October' || months3 == 'December'):
        console.log(`${months3} has 31 days`);
        break;
    case (months3 == 'April' || months3 == 'June' || months3 == 'September' || months3 == 'November'):
        console.log(`${months3} has 30 days`);
        break;
    case months3 == 'February':
        console.log('February has 28 days')
        break;
    default:
        console.log('not months')
        break;
}

//Number 2
let year3 = 2022

if((year3%100 != 0) && (year3%400 == 0) || (year3%4 == 0)){
    console.log(`${year3} is a leap year`)
} else {
    console.log(`${year3} is not a leap year`)
}