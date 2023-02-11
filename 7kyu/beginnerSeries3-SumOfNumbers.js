// Kata # 35 of 7kyu
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

const sumOfNumbers = (a, b) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    let arr = [];
    for(let i=min; i<=max; arr.push(i++));
    
    return arr.reduce((acc, ele) => acc + ele, 0);    
}

console.log(sumOfNumbers(1, 0));
console.log(sumOfNumbers(1, 2));
console.log(sumOfNumbers(0, 1));
console.log(sumOfNumbers(1, 1));
console.log(sumOfNumbers(-1, 0));
console.log(sumOfNumbers(-1, 2));