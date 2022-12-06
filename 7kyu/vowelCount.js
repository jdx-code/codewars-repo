// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){    

    // Using simple for-loop and if-condition
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count += 1;
        }
    }
    return count;
}

console.log(getCount("verb"))