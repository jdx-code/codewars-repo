// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

const vowelRemover = str => {
    // Method #1 : Solution by me
    // return [...str].filter(item => !item.match(/[a,e,i,o,u]/)).join('');

    // method #2 : Solution found on Codewars
    return str.replace(/[aeiou]/g, '');
}

console.log(vowelRemover("hello"));
console.log(vowelRemover("codewars"));
console.log(vowelRemover("goodbye"));
console.log(vowelRemover("HELLO"));