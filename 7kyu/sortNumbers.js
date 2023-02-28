// Kata # 49 of 7kyu
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const sortNumbers = (arr) => {
    return arr ? arr.sort((a, b) => +a - +b) : [];
}

console.log(sortNumbers([1, 2, 10, 50, 5]));
console.log(sortNumbers(null));
console.log(sortNumbers([]));
console.log(sortNumbers([20, 2, 10]));
console.log(sortNumbers([2, 20, 10]));
console.log(sortNumbers([1,2,3,10,5]));
