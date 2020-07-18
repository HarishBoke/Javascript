// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = num => {
    const len = Math.floor(num / 2)
    // Check for num data type
    // 1 is neither composite or nature number so cannot take one
     if (num > 1) {
        for(let i = 2; i <= len; i++) {
           return (num % i === 0) ? false : true
        }
     }
     return false
}

// console.log(`Is Prime ${isPrime(23)}`)
console.log(`Is number 1 Prime? =>  ${isPrime(1)}`)
console.log(`Is number 12 Prime? =>  ${isPrime(12)}`)
console.log(`Is number 17 Prime? =>  ${isPrime(17)}`)