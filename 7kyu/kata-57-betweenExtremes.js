// Given an array of numbers, return the difference between the largest and smallest values.
// For example:
// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

const betweenExtremes = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    const minElement = sortedArr.slice(0,1);
    const maxElement = sortedArr.slice(-1);
    
    return maxElement - minElement;
}

console.log(betweenExtremes([23, 3, 19, 21, 16]));
console.log(betweenExtremes([1, 434, 555, 34, 112]));