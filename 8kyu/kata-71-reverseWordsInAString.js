// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

const reverseWord = (str) => {
    let words = str.split(' ');
    let revStr = [];
    for(let i=words.length; i>=0; i--){
        revStr.push(words[i]);
    }
    return revStr.join(' ');
}

console.log(reverseWord("Hello World"));
console.log(reverseWord("Hi There."));