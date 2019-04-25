//Present prime numbers from 1 to N.

/**
 * function isPrime
 * @param num : number
 * @returns : boolean
 */

function isPrime(num) {
    let r = true
    // if (num == 0) {
        if (!num) {
        return false
    } /* else if (num == 1) {
        return true
    } */
    for (let i = 2; i < num; i++) {
        // if(num % i == 0) {
        if ( !(num % i) ) {
            //not prime
            return false
        }
    }
    return r
}

let num = 0
num = 1
num = 2
num = 4
num = 9
num = 54
//etc
console.log(isPrime(num))

/**
 * Function primeList
 * @param limit : number
 * @returns : array[number]
 */

 function primeList(limit) {
     let primes = []
     for (let i = 0; i < limit; i++) {
         //console.log(isPrime(i))
         if (isPrime(i)) {
            // primes[primes.length] = i not the best way to add it to the array
            primes.push(i)
         }
     }
     return primes
 }

 console.log(`The primes up to 1000 are`, primeList(1000).join(', '))