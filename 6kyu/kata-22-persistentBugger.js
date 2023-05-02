// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

const persistentBugger = (num) => {    
    
    let count = 0;
    while(num >= 10){                                         
        let numStrSplit = String(num).split('');                   
        if(numStrSplit.length > 1){                        
            let prod = 1;
            for(let i=0; i<numStrSplit.length; i++){
                prod = prod * numStrSplit[i]
            }
            count++;
            num = prod;
        }                
    }
    
    return count;
}

console.log(persistentBugger(39));
console.log(persistentBugger(4));
console.log(persistentBugger(25));
console.log(persistentBugger(999));
