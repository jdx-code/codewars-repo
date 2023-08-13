// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



function five(callback) {
    if(callback){
        return callback(5)
    }
    return 5;
}

function seven(callback) {
    if(callback){
        return function(7){
            return 7 * 5;        
        }
    }
    return 7;
}

function times(5) {
    return function(v){
        return v * 5;        
    }
}
const timesByFive = function(v) {
    return v * 5;
}
const timesByFive = times(5)
const sevenTimesFive = timesByFive(7)

const myNumber = five() * seven()
const addTwoValues = (a, b) => {
    return a + b;
}
addTwoValues(myNumber, five());
console.log(five(seven()))

console.log(seven(times(five())));

// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));