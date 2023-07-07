// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


const splitStrings = (str) => {    

    if(str.length % 2 !== 0 ){
        str += '_'
    } 
    const resultArr = []
    for(let i=0; i<str.length; i=i+2){                
        resultArr.push(str.slice(i, i+2))                        
    }

    return resultArr

}

console.log(splitStrings('abc'))
console.log(splitStrings('abcdef'))
console.log(splitStrings(''))
