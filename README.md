# js-calc
An in-browser calculator page, inspired by the TI-108.

Product Specifications:
 - Must contain functions for add, subtract, multiply, divide
 - Uses a function `operate` that takes an operator & 2 numbers to call a function
 - Design should use CSS-grid to interpret/parody a TI-108 calculator
 - 8-digit display with "calculator-style" numbering. Negative numbers should create a hyphen on the left of the display.
- Listener functionality: Pressing numbers should concactenate vs. adding (pressing 1, then 2 should yield "12", not "3") until an operator key is pressed. The second number must also contcactenate. Pressing another operator calls `operate` to evaluate the first pair of numbers, then waits for another input. The "=" operator should call the `operate` function without expecting another input.
- Round decimals to always fill the display
- Operator inputs, especially "=", shouldn't react until the numbers have been entered.
- The "ON/C" should wipe all data
- Error for divide by 0
- Decimal functionality should only allow one "." entry
- Keyboard support is expected. Include a backspace button to 'delete' a character

Optional Extras:
- TI-108 Parody Parity... ideally this calculator will have identical functionality to the original. This includes MRC/M+/M-, square root functionality and percentage conversion
- Mobile functionality with appropriate scaling up to desktop.
- Since the colors and fonts are relatively simple, consider replicating the bevels in the original design

Proposed Project Phases:
1. Initial HTML and CSS designs
2. Event Listeners, inputs & display screen
3. Operate function
4. Decimal and rounding
5. Clear button
6. Bonus functions
