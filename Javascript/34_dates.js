let today = new Date()
console.log(today)

let date = new Date(747898787238)
console.log(date)
console.log(date.getFullYear())
console.log(date.toDateString())

let birthday = new Date(1996, 9, 29, 12)
console.log(birthday.toLocaleDateString())
console.log(birthday.toLocaleTimeString())
console.log(birthday.toLocaleString())//to local hour
console.log(birthday.toDateString())

/**Show date as "week day, day of the month, of year" */

/**
 * function weekDay
 * @param date date 
 * @returns string
 */
function weekDay(date = new Date()) {
    aDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    aMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateToString = ''
    dateToString += aDays[date.getDay()] + ','
                    + date.getDate() + ' of '
                    + aMonths[date.getMonth()] + ' of '
                    + date.getFullYear()
    return dateToString
}

console.log(weekDay(date))