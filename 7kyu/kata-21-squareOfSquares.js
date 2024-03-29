// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// isSquare (-1) // => false
// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true
// isSquare  26  // => false

const isSquare = (n) => {
    // Method #1 : My way
    // let sq = Math.round(Math.sqrt(n));
    // return sq*sq === n;

    // Some other ways to solve the same problem 
    // Method #2 : Source >> Codewars
    // return Math.sqrt(n) % 1 === 0;              // if sqrt of n does not give a remainder of 0 then the number is not an integer number.

    // Method #3 : Source >> Codewars
    return Number.isInteger(Math.sqrt(n));         // checks if sqrt is integer type
}

// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
console.log(isSquare(25));
// console.log(isSquare(26));
// console.log(isSquare(88));