// Kata # 52 of 8kyu
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const isBetween = (a, b) => {
    // Method #1 : Solution by me
    // let arr = [];
    // for(let i=a; i<=b; i++){
    //     arr.push(i);
    // }
    // return arr;

    // Method #2 : Solution found on Codewars
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    
    for(var i=min, arr = []; i<=max; arr.push(i++));
    return arr;
    
}

console.log(isBetween(1, 4));