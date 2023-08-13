// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

const primeFactorization = (num) => {    
    let countPrimes;
    let primeNumbers = [];
    let nonPrimeNumbers = [];
    for(i = 1; i<=num; ++i){
        countPrimes = 0;
        for(let j=2; j<=i/2; ++j){
            if(i%j === 0){
                countPrimes++;                                            
            }
        }
        if(countPrimes === 0 && i!=1){
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

console.log(primeFactorization(86240));
// console.log(primeFactorization(12));

