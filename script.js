const calcButtons = document.querySelectorAll('.func-btn, .num-btn');

let calculator = {
    displayStr: '0',
    firstVal: null,
    operator: null,
    hasInputs: false
};

function updateDisplay() {
    const display = document.querySelector('.screen');
    display.textContent = calculator.displayStr;
}

window.addEventListener('keydown', (e) => {
    inputFilter(e.key);
    e.preventDefault();
});

calcButtons.forEach(button =>
        button.addEventListener('click', (e) => { inputFilter(button.id)})
);

//make an object/array of all avaialble function strings, including the html buttons
const inputMap = {
    "=": "equals",
    "Enter": "equals",
    ".": "decimal",
    "Escape": "clear",
    "c": "clear",
    "+": "plus",
    "*": "multiply",
    "X": "multiply",
    "x": "multiply",
    "/": "divide",
};

function pressNum(str) {
    const { displayStr, hasInputs } = calculator;
    if (hasInputs === true) {
        calculator.displayStr = str;
        calculator.hasInputs = false;
    } else {
        calculator.displayStr = displayStr === "0" ? str : displayStr + str;
    }
}

function pressDecimal() {
    if (calculator.hasInputs === true) {
        calculator.displayStr = "0.";
        calculator.hasInputs = false;
        return;
    }
    if (!calculator.displayStr.includes(".")) {
        calculator.displayStr += ".";
    };
}

function assignOperator(nextOp) {
    const { firstVal, displayStr, operator } = calculator;
    const displayFloat = parseFloat(displayStr);

    if (operator && calculator.hasInputs) {
        calculator.operator = nextOp;
        console.table(calculator);
        return;
    }

    if (firstVal === null && !isNaN(displayFloat)) {
        calculator.firstVal = displayFloat;
    } else if (operator) {
        const result = operate(operator, firstVal, displayFloat);

        calculator.displayStr = `${parseFloat(result.toFixed(2))}`;
        calculator.firstVal = result;
    }
    calculator.hasInputs = true;
    calculator.operator = nextOp;
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(op, a, b) {
    switch (op) {
        case 'plus':
            return add(a, b);
        case 'minus':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return b;
    }
}

function assignHyphen() {
    // this can be refactored to enter negative numbers
        inputFilter("minus");
}

function pressClear () {
    // this can be refactored to include mem functions
    calculator.displayStr = "0"
    calculator.firstVal = null;
    calculator.hasInputs = false;
    calculator.operator = null;
}

function removeLastChar() {
    const { displayStr } = calculator;
    
    calculator.displayStr = displayStr.slice(0, -1);
    if (calculator.displayStr < 1) {
        calculator.displayStr = "0";
    }
}

function invertDisplay() {
    if (calculator.hasInputs === false) { calculator.displayStr *= -1; }
}

function inputFilter(input) {
    if (inputMap.hasOwnProperty(input)) { inputFilter(inputMap[input]); }
    if (input >= 0  && input <=9) { pressNum(input); }
    switch (input) {
        case "-":
            assignHyphen();
            break;
        case "Backspace":
            removeLastChar();
            break;
        case "clear":
            pressClear();
            break;
        case "decimal":
            pressDecimal();
            break;
        case "plus":
        case "minus":
        case "multiply":
        case "divide":
        case "equals":
            assignOperator(input);
            break;
        case "invert":
            invertDisplay();
        case "sq-rt":
        case "percent":
        case "mem-rc":
        case "mem-plus":
        case "mem-minus":
            break;
    }
    updateDisplay();
}