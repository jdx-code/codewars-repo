// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples

// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

const remove = (str) => {
    return str.split(' ').filter(w => w.indexOf('!') == -1 || w.indexOf('!') != w.lastIndexOf('!')).join(" ");
}

console.log(remove("Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi! Hi! Hi!"));
console.log(remove("Hi Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));
console.log(remove("Hi! !Hi! Hi!"));