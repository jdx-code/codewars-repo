// Kata # 38 of 8kyu
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = (str) => {
    // Method #1: Solution by me
    // return Number(str);

    // Method #2: Solution found on Codewars
    // return parseInt(str);

    // Method #3: Solution found on Codewars
    return +str;
}

console.log(stringToNumber("1234"));
console.log(stringToNumber("-7"));