// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n){
    // Using simple while loop and push function  : Method #1
    // var revArr = [];
    // var rem;
    // if(n===0){
    //   revArr.push(n);      
    // } else {
    //     while(n!=0){
    //       rem = n%10;
    //       revArr.push(rem);
    //       n = Math.floor(n/10);
    //   }
    // }    
    // return revArr;

    // Using shorthand methods : Method #2
    // return n.toString().split('').reverse().map(e => parseInt(e));

    // Using shorthand methods : Method #3
    return n.toString().split('').reverse().map(Number);
}

console.log(digitize(12345));