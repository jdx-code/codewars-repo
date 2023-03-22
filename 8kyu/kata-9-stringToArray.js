// Kata # 9 of 8kyu
// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(str){
    return str.split(" ");
}

console.log(stringToArray("Robin Singh"))