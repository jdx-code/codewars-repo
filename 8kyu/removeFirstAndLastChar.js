function removeChar(str){   

    // Using substr function
    return str.substr(1,str.length-2);  
    
    // Using a normal for-loop
    // let newStr = "";
    // for(let i=1; i<str.length-1; i++){
    //     newStr += str[i];        
    // }
    // return newStr;

    // Using normal for-loop and break/continue
    // let newStr = "";
    // for(let i=0; i<=str.length-1; i++){
    //     if(i==0 || i==str.length-1)
    //         continue
    //     newStr += str[i];
    // }
    // return newStr;         
}

console.log(removeChar('hello'));