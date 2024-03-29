// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const grasshopperSummation = (num) => {
    // Method #1 : Solution by me
    // let sum = 0;
    // for(let i=1; i<=num; i++){
    //     sum += i;
    // }
    // return sum;

    // Method #2 : Solution found on Codewars

    return Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
}

console.log(grasshopperSummation(2));
console.log(grasshopperSummation(8));