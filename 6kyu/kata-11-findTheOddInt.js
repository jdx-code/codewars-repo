// Kata # 11 of 6kyu
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findTheOddInt = (arr) => {
    // Method #1 : Solution found on Codewars
    // return arr.reduce((a,b) => a ^ b);

    // Method #2 : Solution found on Codewars
    let obj = {};
    arr.forEach(element => {
        obj[element] ? obj[element]++ : obj[element] = 1;
    });

    // console.log(obj);

    for(prop in obj){
        if(obj[prop] % 2 !== 0) return Number(prop);
    }
}

console.log(findTheOddInt([7]));
console.log(findTheOddInt([0]));
console.log(findTheOddInt([1,1,2]));
console.log(findTheOddInt([0,1,0,1,0]));
console.log(findTheOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]));