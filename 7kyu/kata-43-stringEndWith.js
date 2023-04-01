// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const stringEndWith = (str1, str2) => {
    // Method #1 : My Solution
    // const lenghtOfStr2 = str2.length;
    // if(lenghtOfStr2){
    //     return str1.slice(-lenghtOfStr2) === str2;
    // } else {
    //     return true;
    // }
    
    // Method #2 : Solution found on Codewars
    return str1.endsWith(str2);
}

console.log(stringEndWith('abc', 'bc'));
console.log(stringEndWith('abc', 'd'));
