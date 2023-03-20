// Kata # 12 of 6kyu
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const mexicanWave = (str) => {    

    // Method #1 : Solution found on Codewars
    return [...str].map((e, i) => str.slice(0,i) + e.toUpperCase() + str.slice(i+1)).filter(e=>e!=str);
}
console.log(mexicanWave("hello"));
console.log(mexicanWave("hello world"));