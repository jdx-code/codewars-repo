// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const binaryAddition = (a, b) => {
    // Method #1 : Solution by me
    // let sum = a + b;
    // let binarySum = [];
    // while (sum>0){
    //     let rem = sum%2;
    //     if(rem === 0 || rem === 1){
    //         binarySum.push(rem);
    //     }        
    //     sum = Math.floor(sum/2);
    // }
    // return binarySum.reverse().join('');

    // Method #2 : Solution found on Codewars
    return (a+b).toString(2);
}

console.log(binaryAddition(5, 9));