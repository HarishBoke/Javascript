// 1. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// Date: 12 July 2020 
// Topic: Array

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];

const checkNaN = (item) => isNaN(item) ? 0 : item

const sum = (index1, index2 ) => checkNaN(index1) + checkNaN(index2)

const computeSum = (arr1, arr2) => {
    const len = (arr1.length >= arr2.length) ? arr1.length : arr2.length
    let result = []
    for(let i = 0; i < len; i++){
        result.push(sum(arr1[i], arr2[i]))
    }
    return result;
}
console.log(`output of computation is: ${computeSum(array1, array2)}`)