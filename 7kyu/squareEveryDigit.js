// Kata # 18 of 7kyu
// Description:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9 squares is 81 and 1 squared is 1.
// Note: The function accepts an integer and returns an integer

const squareEveryDigit = (num) => {

    // Method #1  
    return Number(num.toString().split('').map(item=>Number(item*item)).join(''));
}
 console.log(squareEveryDigit(9119));