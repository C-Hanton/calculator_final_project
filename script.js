// display variables for displaying calculator functions e.g. '2 + 2'
let num1;
let num2;
let operator;
const displayValue = document.getElementById("#display");
const buttons = document.querySelectorAll("button");

// addition
function add (a, b) {
let result = a + b;
return result;
}
// subtraction
function subtract(a, b){
    let result = a - b;
    return result;
}
// multiplication
function multiply(a,b){
    let result = a * b;
    return result;
}
// division
function divide(a,b){
    let result = a / b;
    return result;
}

// function to take 2 numbers and operator
function operate (num1,operator,num2) {
    add(num1,num2);
}

