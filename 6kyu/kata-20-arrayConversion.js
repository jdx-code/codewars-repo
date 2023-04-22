// Vasya faced a serious problem: he has to work with a bunch of numbers. Since he has to print them out, he wants to use as little paper as possible. And that is why he came up with the following idea: convert array of numbers into a string by the following rule:
//     Converted each number to the base 26. To write a number, Vasya will use lowercase letters of Latin alphabet: 'a' = 0, 'b' = 1, ..., 'z' = 25;
//     Find the longest of the strings obtained by the conversion;
//     Transform all strings shorter than the longest one, by prepending as many "a" as required in front of the string, so their length is equal.;
//     Combine all strings into one by the order in which they were converted from left to right in the input;
//     Subtract one from the maximum length we found before, and convert it to base 26. Then prepend it to the resulting string.
// Your task is to convert the given array arr to a string as Vasya suggests.
// Check out the following example for better understanding.
// Example
// For arr = [1, 28, 55], the output should be "babbccd".
// Here's how the numbers are converted:
// 1 = "b";
// 28 = "bc";
// 55 = "cd".
// Since the longest string is of length 2, number 1 should be turned into "ab".
// The final answer is "babbccd", where:
// - the first letter 'b' stands for the length of the longest string;
// - the next two letters "ab" stand for the first number;
// - the following two letters "bc" stand for the second number;
// - the last two letters "cd" stand for the last number.
// Input/Output
// [input] integer array arr
// Array of integers.
// 1 ≤ a.length ≤ 100
// 1 ≤ a[i] ≤ 10^9
// [output] a string
// A string into which arr is converted.

