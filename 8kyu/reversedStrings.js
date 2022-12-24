// Kata # 6 of 8kyu
//Complete the solution so that it reverses the string passed into it. 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    //using recursion
    // if(str === '')
    //     return '';
    // else 
    //     return solution(str.substr(1)) + str.charAt(0);

    //using a normal for-loop
    // var revStr = "";
    // for(var i=str.length - 1; i>=0; i--){
    //     revStr = revStr + str[i];
    // }
    // return revStr;

    //using built-in functions
    return str.split('').reverse().join('');
}

console.log(solution('word'));