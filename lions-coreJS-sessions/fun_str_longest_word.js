// 8. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


const strn = 'web development';

const string_to_array = str => str.split(' ')

const findLongestWord_reduceMethod = str => {
    const arr = string_to_array(str)
    return arr.reduce((longest, currentWord) => {
        return longest.length > currentWord.length ? longest : currentWord
    })
}

const findLongestWord_traditionalMethod = str => {
    const arr = string_to_array(str);
    let longestWord = arr[0];
    for(let x = 0; x < arr.length; x++) {
        if(x === 0) { longestWord = arr[0]} 
        longestWord = (longestWord.length > arr[x].length) ? longestWord : arr[x]
    }
    return longestWord
}

console.log(`Reduce method longest word:  ** ${findLongestWord_reduceMethod(strn)} **`)
console.log(`Traditional method longest word:  ** ${findLongestWord_traditionalMethod(strn)} **`)