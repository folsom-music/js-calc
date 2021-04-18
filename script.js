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

window.addEventListener('keydown', (e) => { inputFilter(e.key) });

calcButtons.forEach(button =>
        button.addEventListener('click', (e) => { inputFilter(button.id)})
);

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
    }
}

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
    const { displayStr } = calculator;
    calculator.displayStr = displayStr === '0' ? str : displayStr + str;
    updateDisplay();
}

function pressDecimal() {
    if (!calculator.displayStr.includes(".")) {
        calculator.displayStr += ".";
    };
    updateDisplay();
}

function inputFilter(input) {
    if (inputMap.hasOwnProperty(input)) {
        inputFilter(inputMap[input]);
    } else if (input >= 0  && input <=9) {
        pressNum(input);
    } else if (input === "decimal") {
        pressDecimal();
    }
}