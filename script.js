const display = document.querySelector('.screen');
const funcButtons = document.querySelectorAll('.func-btn');
const numButtons = document.querySelectorAll('.num-btn');

window.addEventListener('keydown', (e) => { pressKey(e.key) });

numButtons.forEach(button =>
    button.addEventListener('click', (e) => { pressKey(button.id)})
);
funcButtons.forEach(button =>
    button.addEventListener('click', (e) => { pressKey(button.id)})
);

function pressKey(key) {
    if (key === "Backspace") {
        inputKey(key);
    } else if (display.textContent.length > 7) {
        return;
    } else {
        inputKey(key);
    };
}

function inputKey(char) {
    switch (char) {
        default:
            break;
        case '.':
            inputKey('decimal');
            break;
        case '=':
        case 'Enter':
            inputKey('equals');
            break;
        case 'Escape':
        case 'c':
            inputKey('clear');
            break;
        case '+':
            inputKey('plus');
            break;
        case '*':
        case 'X':
        case 'x':
            inputKey('multiply');
            break;
        case '/':
            inputKey('divide');
            break;
        case '0':
            preventLeadingZeros();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            removeLeadingZeros();
            display.textContent += char;
            break;
        case 'decimal':
            displayFloat();
            break;
        case 'equals':
            operate(operator, firstNum, lastNum);
            break;
        case 'Backspace':
            removeLastChar();
            break;
        case 'clear':
            clearCalc();
            break;
        case '-':
            assignHyphen();
            break;
        case 'plus':
        case 'minus':
        case 'multiply':
        case 'divide':
            assignOperator(char);
            break;
        case 'mem-rc':
            memoryRecall();
        case 'mem-plus':
        case 'mem-minus':
        case 'invert':
        case 'sq-rt':
        case 'percent':
            instantFunc(char);
            break;
    };
}

function preventLeadingZeros(){
    if (display.textContent === "0") {
        return;
    } else if (display.textContent === "") {
        display.textContent = "0";
    } else {
        display.textContent += "0";
    };
}

function removeLeadingZeros() {
    if (display.textContent[0] === "0" && display.textContent.length > 0 && !display.textContent.includes(".")) {
        display.textContent = display.textContent.substring(1);
    };
}

function displayFloat() {
    if (display.textContent.includes(".")) {
        return;
    } else if (display.textContent === "") {
        display.textContent += "0.";
    } else {
        display.textContent += ".";
    };
}
function operate() {}
function removeLastChar() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent.length < 1) {
        display.textContent = "0";
    };
}
function clearCalc() {}

function assignHyphen() {
    if (display.textContent.length === 0) {
        display.textContent += "-";
    } else {
        inputKey("minus");
    }
}

function assignOperator() {}
function memoryRecall() {}
function instantFunc() {}