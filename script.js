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
    if (display.textContent.length > 8) {
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
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            display.textContent += char;
            break;
        case 'decimal':
        case '.':
            convertDisplayToFloat();
            break;
        case 'equals':
        case 'Enter':
        case '=':
            operate (operator, firstNum, lastNum);
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
        case 'mem-plus':
        case 'mem-minus':
        case 'invert':
        case 'sq-rt':
        case 'percent':
            instantFunction(char);
            break;
    }
}