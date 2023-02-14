// Kata # 39 of 7kyu
// Description:
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// If begin value is greater than the end, function should returns 0
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:
//     Sum of a sequence (this kata)
//     Sum of a Sequence [Hard-Core Version]

const sumOfSequence = (begin, end, step) => {   
    // Method #1 : Solution found on Codewars (using for loop)
    let sum = 0;
    if(begin>end){
        return 0;
    } else {
        for(let i=begin; i<=end; i+=step){
            sum += i;
        }
        return sum;
    }
}

console.log(sumOfSequence(2,2,2));
console.log(sumOfSequence(2,6,2));
console.log(sumOfSequence(1,5,1));
console.log(sumOfSequence(1,5,3));