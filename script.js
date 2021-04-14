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
    if (display.textContent.length > 7) {
        return;
    } else {
        inputKey(key);
    };
}

function inputKey(char) {
    switch (char) {
        default:
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
        case '.':
            convertDisplayToFloat();
            break;
        case 'equals':
        case 'Enter':
        case '=':
            operate(operator, firstNum, lastNum);
            break;
        case 'Backspace':
            removeLastDigit();
            break;
        case 'clear':
        case 'Escape':
        case 'c':
            clearCalc();
            break;
        case '-':
            assignHyphen();
            break;
        case 'plus':
        case '+':
        case 'minus':
        case 'multiply':
        case '*':
        case 'x':
        case 'X':
        case 'divide':
        case '/':
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
    }
}

function preventLeadingZeros(){
    if (display.textContent === "0") {
        return;
    } else if (display.textContent === "") {
        display.textContent = "0";
    } else {
        display.textContent += "0";
    }
}

function removeLeadingZeros() {
    if (display.textContent[0] === "0" && display.textContent.length > 0 && !display.textContent.includes(".")) {
        display.textContent = display.textContent.substring(1);
    }
}

function convertDisplayToFloat() {
    if (display.textContent.includes(".")) {
        return;
    } else if (display.textContent === "") {
        display.textContent += "0.";
    } else {
        display.textContent += ".";
    }
}
function operate() {}
function removeLastDigit() {}
function clearCalc() {}
function assignHyphen() {}
function assignOperator() {}
function memoryRecall() {}
function instantFunc() {}