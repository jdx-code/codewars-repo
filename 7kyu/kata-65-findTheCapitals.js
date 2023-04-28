// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const findtheCaps = (str) => {
    const indexArr = [];
    const splitStr = str.split('');
    for(let i=0; i<splitStr.length; i++){
        // Method #1
        // if(splitStr[i] === splitStr[i].toUpperCase()){
        //     indexArr.push(i)
        // }

        // Method #2 
        // The ASCII value of the lowercase alphabet is from 97 to 122. 
        // The ASCII value of the uppercase alphabet is from 65 to 90.
        if(splitStr[i].charCodeAt() < 90){
            indexArr.push(i)
        }
    }
    return indexArr;
}

console.log(findtheCaps('CodEWaRs'));