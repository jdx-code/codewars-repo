// Kata # 50 of 8kyu
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
//     The first argument can be an empty string
//     The second string argument will always be of length 1

const allStarCode = (string1, string2) => {
    // Method #1 : Solution by me
    // return string1.split('').filter(item=>item === string2).length;

    // Method #2 : Solution found on Codewars
    return string1.split(string2).length-1;
}

console.log(allStarCode("Hello", "o"));
console.log(allStarCode("Hello", "l"));
console.log(allStarCode("", "z"));