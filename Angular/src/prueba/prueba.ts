export function factorial(n: number) {
    if (n === 0 || n === 1) {
        return n;
    } else if (n > 1) {
        return n * factorial(n - 1);
    } else {
        throw new Error('No existe el factorial de un número negativo');
    }
}

/*
* Way two. Boolean function.
* Function isEven.
* @param num: number.
* @returns: boolean.
* Possible values:
*    true - even
*    false - odd
*/

export function isEven(num: number) {
    if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
        throw new Error('The value is not a number!')
    } else if (Math.floor(num) !== num) {
        throw new Error('The value is a decimal number!')
    }
    return !(num % 2)
}