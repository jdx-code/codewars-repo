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

    // Method #2 : Solution found on Codewars
    // return str.replace(/[aeiou]/g, '');

    // Method #3 : Solution found on Codewars
    // return [...str].filter(item  => !'aeiou'.includes(item)).join('');

    // Method #4 : Solution found on Codewars
    return str.split('').filter(item => ['a','e','i','o', 'u'].indexOf(item) == -1).join('');
}

console.log(vowelRemover("hello"));
console.log(vowelRemover("codewars"));
console.log(vowelRemover("goodbye"));
console.log(vowelRemover("HELLO"));