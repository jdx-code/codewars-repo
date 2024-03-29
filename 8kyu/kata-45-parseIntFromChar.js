// Kata # 45 of 8kyu
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

const getAge = (str) => {
    // Method #1 : Solution by me
    // return parseInt(str.split(' ')[0]);

    // Method #2 : Solution found on Codewars
    // return parseInt(str);

    // Method #3 : Solution found on Codewars
    return +str[0];

}

console.log(getAge("4 years old"));