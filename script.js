const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};
const division = function (a, b) {
    return a / b;
}

const power = function (a, b) {
    let exponential = 1
    for (i = 1; i <= b; i++) {
        exponential = exponential * a;
    }
    return exponential;
};

let number1 = null;
let operator = null;
let number2 = null;

function operate(funcOperator, funcNumber1, funcNumber2) {
    switch (funcOperator) {
        case "×": multiply(funcNumber1, funcNumber2); break;
        case "÷": division(funcNumber1, funcNumber2); break;
        case "+": add(funcNumber1, funcNumber2); break;
        case "-": subtract(funcNumber1,funcNumber2);break;
        default: return "ERR";
    }
}