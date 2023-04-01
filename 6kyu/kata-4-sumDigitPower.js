// The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=8^1+9^2.
// The next number in having this property is 135:
// See this property again: 135=1^1+3^2+5^3
// Task
// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.
// 90, 100 --> []
// Enjoy it!!

const sumDigitPower = (start, end) => {
    
    //Method #1: Using for loops
    let arr = [];
    for(let i=start; i<=end; i++){
        let sum=0;
        for(let j=0; j<=i.toString().length; j++){
            sum += Math.pow(Number(i.toString()[j]), j+1);            
            if(sum == i) {
                arr.push(sum);
            } 
        }        
    }
    return arr;
}

console.log(sumDigitPower(1, 100));
