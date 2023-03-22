// Kata # 37 of 8kyu
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

const century = (year) => {
    // Method #1: Solution from Codewars   
    // return Math.ceil(year/100);

    // Method #2: Solution from Codewars
    return (year + 99) / 100 | 0;
}
console.log(century(89));
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(56.21));
console.log(century(-56));
console.log(century('hello'));

