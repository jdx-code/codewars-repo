// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


const countingDuplicates = (str) => {
    
    // Method #1 : Solution by me

    // let strCase = str.toLowerCase();
    // let doubleArr = [...strCase].sort().filter((e, i, strCase) => strCase.indexOf(e) !== strCase.lastIndexOf(e));  
    // let newArr = [];
    // for(item of doubleArr){
    //     if(!newArr.includes(item)){
    //         newArr.push(item);
    //     }
    // }
    // return newArr.length; 

    let strCase = str.toLowerCase().split('').sort();
    let newArr = [];
    for(let i=0; i<strCase.length; i++){
        if(strCase[i] === strCase[i+1] && !newArr.includes(strCase[i])){
            newArr.push(strCase[i]);
        }
    }
    return newArr.length;    
}

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aAll"));
console.log(countingDuplicates("ABBA"));