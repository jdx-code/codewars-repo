// Kata # 10 of 6kyu
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// Method #1 : Solution found on Codewars
function countCharacterInString (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

console.log(countCharacterInString('aba'));
console.log(countCharacterInString(''));
console.log(countCharacterInString('baa'));