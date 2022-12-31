// Kata # 16 of 7kyu
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
    let xCount = 0;
    let oCount = 0;
    let strArr = str.split('');
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] === 'x'){
            xCount += 1;
        } else if(strArr[i] === 'o'){
            oCount += 1;
        }
    }
    return xCount === oCount ? true : false;
}
 console.log(XO("zzoo"));