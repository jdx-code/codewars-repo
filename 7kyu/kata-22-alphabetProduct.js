// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

const alphabetProduct = (arr) => {   
   let uniqueItems = [];
   for(let item of arr){
    if(!uniqueItems.includes(item)){
        uniqueItems.push(item);
    }
   }
   return uniqueItems.sort((a,b)=>a-b)[3];
}

// console.log(alphabetProduct([2,3,4,1,12,6,2,4]));
// console.log(alphabetProduct([2,6,7,3,14,35,15,5]));
// console.log(alphabetProduct([20,10,6,5,4,3,2,12]));
// console.log(alphabetProduct([2,6,18,3,6,7,42,14]));
// console.log(alphabetProduct([7,96,8,240,12,140,20,56]));
console.log(alphabetProduct([20,30,6,7,4,42,28,5]));