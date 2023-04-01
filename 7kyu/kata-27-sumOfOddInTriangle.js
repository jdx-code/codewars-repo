// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (num) => {
    // Method #1 : Solution found on Codewars
    // return n * n * n;

    // Method #2 : Solution found on Codewars
    return Math.pow(num, 3);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));