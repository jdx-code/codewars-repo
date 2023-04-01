// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
    
    // Method #1 Using simple for loop
    // let xCount = 0;
    // let oCount = 0;
    // let strArr = str.split('');
    // for(let i=0; i<strArr.length; i++){
    //     if(strArr[i] === 'x'){
    //         xCount += 1;
    //     } else if(strArr[i] === 'o'){
    //         oCount += 1;
    //     }
    // }

    // Method #2 Using forEach and match function with regular expression
    // let xCount = 0;
    // let oCount = 0;
    // let strArr = str.split('');
    // strArr.forEach(element => {
    //     element.match(/x/i) ? xCount++ : element.match(/o/i) ? oCount++ : true;
    // });
    // return xCount === oCount ? true : false; 
    
    // Method #3 Using match function with regular function directly on string
    let xCount = str.match(/x/ig);
    let oCount = str.match(/o/ig);
    return (xCount && xCount.length) === (oCount && oCount.length);
}
 console.log(XO("zzoo"));