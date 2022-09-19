let hourDigits = '';
let minuteDigits = '';
hourNow < 10 ? hourDigits = `0${hourNow}` : hourDigits = hourNow
minuteNow < 10 ? minuteDigits = `0${minuteNow}` : minuteDigits=minuteNow
console.log(`${yearNow}-${monthNow}-${dayNow} ${hourDigits}:${minuteDigits}`)
