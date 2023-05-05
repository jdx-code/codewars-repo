// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//     we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

const playingWithDigits = (n, p) => {
    let rem = 0
    let digitsOfN = []
    let sum = 0
    let k, kRem = 0
    let nPreserved = n 
    while(n!=0){
        rem = n%10        
        digitsOfN.unshift(rem)
        n = Math.trunc(n/10)
    }
    
    for(let i=0; i<digitsOfN.length; i++) {
        sum += Math.pow(digitsOfN[i], p+i)
    }   
    
    kRem = sum%nPreserved    
    k = sum/nPreserved    

    if(kRem==0){
        return k
    } else {
        return -1
    }
}

console.log(playingWithDigits(89, 1))
console.log(playingWithDigits(92, 1))
console.log(playingWithDigits(695, 2))
console.log(playingWithDigits(46288, 3))
