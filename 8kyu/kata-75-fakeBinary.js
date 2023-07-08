// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

const fakeBinary = (x) => {
    // Method #1
    let fakeBinaryStr = ''
    for(let i=0; i<x.length; i++){
        if(x[i] < 5) {
            fakeBinaryStr += '0'
        } else {
            fakeBinaryStr += '1'
        }
    }    
    return fakeBinaryStr
}

console.log(fakeBinary('45385593107843568'))
console.log(fakeBinary('509321967506747'))
console.log(fakeBinary('366058562030849490134388085'))
