// Kata # 33 of 8kyu
// Description:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

const sumOfPositives = (arr) => {

    // Method #1 : Using reduce with filter 
    // return arr.filter(item=>item>0).reduce((sum, item) => sum + item, 0);  

    // Method #2 : Using only reduce
    return arr.reduce((acc, item) => acc + (item > 0 ? item : 0), 0);

}

console.log(sumOfPositives([1,-4,7,12]));
