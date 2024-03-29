// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const onesAndZeroes = (arr) => {
    // Method #1 : My solution
    // return arr.reverse().reduce((acc, currentVal, currentIndex) => {
    //   return acc + currentVal * Math.pow(2, currentIndex)
    // }, 0);

    // Method #2 : Solution found on Codewars
    return parseInt(arr.join(''), 2);

}

console.log(onesAndZeroes([0, 0, 0, 1]));
console.log(onesAndZeroes([0, 0, 1, 0]));
console.log(onesAndZeroes([0, 1, 0, 1]));
console.log(onesAndZeroes([1, 0, 0, 1]));
console.log(onesAndZeroes([0, 0, 1, 0]));
console.log(onesAndZeroes([0, 1, 1, 0]));
console.log(onesAndZeroes([1, 1, 1, 1]));
console.log(onesAndZeroes([1, 0, 1, 1]));