// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example : ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words){
// Kata # 7 of 8kyu
// Using built-in function
    return words.join(' ');

// Using normal for loop
// var sentence = "";
// for(var i=0; i<words.length; i++){
//     if(i<words.length-1){
//         sentence += words[i]+' '; 
//     } else {
//         sentence += words[i]; 
//     }
    
// }
// return sentence;

// Using forEach
// var sentence = "";
// words.forEach((element, i) => {
//     (i === words.length - 1) ? sentence +=element : sentence += element+' ';
// });
// return sentence;    
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']))