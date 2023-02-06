// Kata # 51 of 8kyu
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//     If either input is an empty string, consider it as zero.
//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// Method #1 : Solutions by me
// const sumTheStrings = (str1, str2) => (parseInt(str1) + parseInt(str2)).toString();

// Method #2 : Solutions by me
const sumTheStrings = (str1, str2) => (+str1 + +str2).toString();

console.log(sumTheStrings("4", "5"));