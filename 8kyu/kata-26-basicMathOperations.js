// Kata # 26 of 8kyu
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

const basicMathOperations = (operator, operand1, operand2 ) => {
    switch(operator){
        case '+': 
            return operand1 + operand2;
            break;
        case '-':
            return operand1 - operand2;
            break;
        case '*':
            return operand1 * operand2;
            break;
        case '/':
            return operand1 / operand2;
            break;
        default :
            return 'Please pass a valid operator as argument.'
            break; 
    }    
}

console.log(basicMathOperations('*', 5, 5))
