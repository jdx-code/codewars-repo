// Kata # 29 of 8kyu
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = (x) => {    
    // Method #1: Using map(Number)
    // return x.map(Number).reduce((acc, ele) => acc + ele, 0);

    // Method #2: Using map with Unary operator
    return x.map(item => +item).reduce((acc, item) => acc + item, 0);
}

console.log(sumMix([9, 3, '7', '3']));