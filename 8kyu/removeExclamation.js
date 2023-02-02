// Kata # 42 of 8kyu
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (str) => {
    // Method #1 : Solution by me
    return str.split('').filter(e => e!='!').join('');
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hey ! Developers wanted like you !"));