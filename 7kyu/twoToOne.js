// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function twoToOne(str1, str2){
    const wholeStr = str1.concat(str2);
    const wholeArr = wholeStr.split('');
    return wholeArr.filter((element, index) => wholeArr.indexOf(element) === index).sort().join('');    
}

console.log(twoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
