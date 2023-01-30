// Kata # 40 of 8kyu
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumOfNegatives = (arr) => {    
    // Method #1 : My solution
    let result = [];    
    if(arr && arr.length){    // have to check if it's an array and if the array contains any element or not
        const countOfPositives = arr.filter(n => n > 0).length;
        result.push(countOfPositives);
        const sumOfNegatives = arr.filter(n => n < 0).reduce((acc, n) => acc + n, 0)
        result.push(sumOfNegatives);
        return result;      
    } else {
        return result;
    }     
}

console.log(countPositivesSumOfNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));