const display = document.querySelector("#displayContent")
const buttons = document.querySelectorAll("button")

const add = function (a, b) {
    return parseFloat(a) + parseFloat(b);
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};
const division = function (a, b) {
    if (b != 0)
        return a / b;
    else return "lmao";
}

let memory = null;
let operator = null;
let digitPushed = 0;
let equalMemory = null;

function operate(funcOperator, funcNumber1, funcNumber2) {
    switch (funcOperator) {
        case null: { };
        case "multiply": return multiply(funcNumber1, funcNumber2); break;
        case "divide": return division(funcNumber1, funcNumber2); break;
        case "add": return add(funcNumber1, funcNumber2); break;
        case "subtract": return subtract(funcNumber1, funcNumber2); break;
        default: return "ERR";
    }
}
buttons.forEach(element => {
    element.addEventListener("click", (e) => buttonHandler(e.currentTarget))
});
function buttonHandler(btn) {
    switch (btn.className) {
        case "digit": digitFunc(btn); break;
        case "operator": operatorFunc(btn); break;
        case "clear": cleanButton(); break;
        case "equal": equalButton(); break;
        case "backspace": backspaceButton(); break;
    }
    while (display.textContent.length > 16)
        backspaceButton();
}
function digitFunc(btn) {
    if (display.textContent == "0" || digitPushed == 0)
        display.textContent = null;
    if (!(btn.textContent == "." && display.textContent.includes("."))) {
        display.textContent = display.textContent + btn.textContent;
        displayNr = display.textContent.slice()
    }
    displayChanger = 0;
    digitPushed = 1;

}
function operatorFunc(btn) {
    if (digitPushed == 1 && memory != null)
        display.textContent = operate(operator, memory, display.textContent)
    memory = display.textContent
    switch (btn.textContent) {
        case "×": operator = "multiply"; break;
        case "÷": operator = "divide"; break;
        case "-": operator = "subtract"; break;
        case "+": operator = "add"; break;
    }
    digitPushed = 0;
    equalMemory = null;
}
function cleanButton() {
    memory = null;
    operator = null;
    digitPushed = 0;
    display.textContent = "0";
    equalMemory = null;
}
function equalButton() {
    if (digitPushed == 1)
        equalMemory = display.textContent;
    if (memory != null) {
        display.textContent = operate(operator, memory, equalMemory)
        memory = display.textContent;
    }
    digitPushed = 0;
}
function backspaceButton() {
    if (display.textContent != 0 && !isNaN(display.textContent && digitPushed == 1)) {
        if (display.textContent.length > 1)
            display.textContent = display.textContent.substring(0, display.textContent.length - 1)
        else display.textContent = "0";
    }
}
