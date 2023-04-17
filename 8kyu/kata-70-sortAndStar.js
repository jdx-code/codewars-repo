// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

const sortAndStar = (str) => {

    // Solution from Codewars
    return str.sort()[0].split('').join('***');

    // Method #1 : Solved by me
    // return str.sort()[0].split('').map((e, i, str) => {
    //     if(i<str.length-1){
    //         return e + '***';
    //     } else {
    //         return e;
    //     }
    // }).join('');

    // Method #2 : Solved by me
    // const firstValueArr = str.sort()[0].split('');
    // const newArr = [];
    // for(let i=0; i<firstValueArr.length; i++){        
    //     if(i<firstValueArr.length-1){
    //         newArr.push(firstValueArr[i]+'***');
    //     }else{
    //         newArr.push(firstValueArr[i]);
    //     }
        
    // }
    // return newArr.join('');
}

console.log(sortAndStar(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));  // should return b***i***t***c***o***i***n
console.log(sortAndStar(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));      // should return a***r***e