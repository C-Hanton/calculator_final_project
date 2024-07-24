
let operator = '';
let previousValue = '';
let currentValue = ''



document.addEventListener("DOMContentLoaded", function (){
    // store all components of HTML in JS
    let clear = document.querySelector(".all-clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector("#previous");
    let currentScreen = document.querySelector("#current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        currentScreen.textContent = currentValue;
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    
    equal.addEventListener("click", function(){
        calculate();
        
        
    })
})

function handleOperator(op){
 operator = op;
 previousValue = currentValue;
 currentValue = "";


 
}

function handleNumber(num){
    if (currentValue.length <= 5){
     currentValue += num;
    }
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "*"){
        previousValue *= currentValue;
    } else if (operator === "/"){
        previousValue /= currentValue;
    }
    console.log(previousValue);
}

function roundNumber(num) {
return Math.round(num * 1000) / 1000;
}