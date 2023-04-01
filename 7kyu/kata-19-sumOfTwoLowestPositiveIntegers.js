// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumOfTwoLowestPositiveIntegers = (arr) => {    
    return arr.sort((a,b)=>a-b).filter((item, i)=>i<2).reduce((acc,item)=>acc+item, 0);
}

// console.log(sumOfTwoLowestPositiveIntegers([19, 5, 42, 2, 77]));
console.log(sumOfTwoLowestPositiveIntegers([10, 343445353, 3453445, 3453545353453]));