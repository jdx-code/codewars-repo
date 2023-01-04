// Kata # 27 of 8kyu
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

const sumWithoutHighLow = (arr) => {
    // Method #1
    if(arr != null){
        return arr.length < 3 ? 0 : arr.sort((a,b)=>a-b).reduce((acc, ele) => acc + ele, 0)-arr[0]-arr[arr.length-1];
    } else {
        return 0;
    }
}

console.log(sumWithoutHighLow([ 6, 2, 1, 8, 10]));