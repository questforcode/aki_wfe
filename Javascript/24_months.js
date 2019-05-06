/**
 * We create an object with the months in english as properties and in japanese as values,
 * and add a function that shows it.
 */

let monthsJP = {
    january: '月',
    february: '二月',
    march: '三月',
    april: '四月',
    may: '五月',
    june: '六月',
    july: '七月',
    august: '八月',
    september: '九月',
    october: '十月',
    november: '十一月',
    december: '十二月',

    toString: function () {
        let output = ''
        for (const key in this) {
            const element = this[key]; 
            if (typeof element === 'function') {
                continue
            }
            output += `The month ${key} in Japanese is written as ${element}.` + '\n'
        }
        return output
    },

    show: function () {
        console.log(this.toString())
    }
}

monthsJP.show()