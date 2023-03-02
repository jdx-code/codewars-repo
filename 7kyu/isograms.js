// Kata # 51 of 7kyu
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogram = (str) => {
    // Method #1 : Solution by me
    let arr = [...str.toLowerCase()];
    let newArr = [];
    for(a of arr){
        if(!newArr.includes(a)){
            newArr.push(a);
        }
    }
    return arr.join('') === newArr.join('');
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("moOse"));
console.log(isIsogram("aba"));