// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

const sortByLast = (str) => {
    // Method #1 : Using charCodeAt() which returns a number
    // return str.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));

}

console.log(sortByLast('man i need a taxi up to ubud'));
console.log(sortByLast('what time are we climbing up the volcano'));
console.log(sortByLast('take me to semynak'));
