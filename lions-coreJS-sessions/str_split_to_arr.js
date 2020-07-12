// 4.Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh”]

const str = "Robin Singh"
const string_to_array = (str) => str.split(' ')

console.log(string_to_array(str));