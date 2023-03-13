// Kata # 10 of 6kyu
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// Method #1 : Using forEach. Solution found on Codewars
// function countCharacterInString (string) {  
//     let count = {};
//     string.split('').forEach(function(s) {
//         count[s] ? count[s]++ : count[s] = 1;    
//     });
//     return count;
// }

// Method #2 : Using reduce. Solution found on Codewars
const countCharacterInString = (str) => {
    return str.split('').reduce((counter, s) => {
        {counter[s] = (counter[s] || 0) + 1};
        return counter;
    }, {})
}

console.log(countCharacterInString('aba'));
console.log(countCharacterInString(''));
console.log(countCharacterInString('baa'));