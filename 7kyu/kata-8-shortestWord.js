// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){   

    // Method #1 : Using sort function
    // let arrOfWords, sortedArr = [];    
    // arrOfWords = s.split(" ");
    // sortedArr = arrOfWords.sort((a, b) => a.length - b.length);
    // return sortedArr[0].length;

    // Method #2 : Using map function
    // let arrOfWords = [];
    // arrOfWords = s.split(' ');
    // let minLen = 999;
    // arrOfWords.map((word) => {        
    //     if(minLen > word.length){
    //        minLen = word.length;
    //     }        
    // });
    // return minLen; 
    
    // Method #3 : Using forEach 
    let arrOfWords = [];
    arrOfWords = s.split(' ');
    let minLength = 999;
    arrOfWords.forEach(element => {
        if(minLength > element.length){
            minLength = element.length
        }
    });
    return minLength;

}

console.log(findShort("Monday could be the day."))

