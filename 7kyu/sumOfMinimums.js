// Kata # 31 of 7kyu
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.
// ENJOY CODING :)


const sumOfMinimum = (arr) => {    
    // Method #1 : Solution by me
    let sum = 0;
    for(innerArr of arr){
        innerArr.sort((a,b) => a - b);
        sum += innerArr[0];
    }    
    return sum;
}

let listTwoDim = [];
console.log(sumOfMinimum([ [ 1, 21, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ] ]))