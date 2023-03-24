// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const findTheStrayNumber = (arr) => {
    // Method #1 : My Solution
    return Number(arr.filter((e, i, arr) => arr.indexOf(e) == arr.lastIndexOf(e)).join(''));
}

console.log(findTheStrayNumber([1, 1, 2]));
console.log(findTheStrayNumber([17, 17, 3, 17, 17, 17, 17]));

