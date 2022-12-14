// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){

    // Solution #1
    let arrOfWords, sortedArr = [];    
    arrOfWords = s.split(" ");
    sortedArr = arrOfWords.sort((a, b) => a.length - b.length);
    return sortedArr[0].length;

    // Solution #2
    // sortedArr = arrOfWords.map(e=>e).sort((a,b) => a.length - b.length);
    // return sortedArr[0].length;
}

console.log(findShort("Monday could be the day."))

