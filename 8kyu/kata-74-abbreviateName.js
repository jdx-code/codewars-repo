// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

const abbreviateName = (str) => {
    return str.split(' ').map(e => e.slice(0,1)).join('.').toUpperCase()
}

console.log(abbreviateName("Sam Harris"))
console.log(abbreviateName("patrick feeney"))
console.log(abbreviateName("Evan Cole"))
console.log(abbreviateName("P Favuzzi"))
console.log(abbreviateName("David Mendieta"))