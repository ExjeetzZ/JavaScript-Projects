//Object to keep track of values.//
const Calculator = {
    //This will display 0 on the calculator screen.
    Display_Value: '0',
    //This will hold the first operand for an expression, It is set to
    First_Operand: null,
    //This checks whether or not the second operand has been input.
    Wait_Second_Operand: false,
    //This will hold the operator for the expression.
    operator: null
};

//This modifies values each time a button is clicked on.//
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    //If the Wait_Second_Operand is true, we replace the current value with the digit.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //If the current value is 0, replace it; otherwise append the digit.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This handles decimal points.//
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //If the current value is 0, replace it; otherwise append the digit.
        Calculator.Display_Value += dot;
    }
}

// This handles operators.//
function Handle_Operator(Next_Operator) {
    //Get the current state of the calculator.
    const { First_Operand, Display_Value, operator } = Calculator;
    //This converts the current input value to a float.
    const Value_of_Input = parseFloat(Display_Value);
    //If the operator is already set and we are waiting for the second operand, we just set the operator.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    // If the first operand is null, set it to the current input value.
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // If the operator is set, perform the calculation.
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //This converts the result to a string and removes any trailing zeros.
        result = Number(result).toFixed(9);
        //If the result is a whole number, we convert it to an integer.
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    // Set the second operand flag and the operator.
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//This object performs the calculations for each operator.
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
//This resets the calculator when the AC button is clicked.//
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This updates the display value of the calculator.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This Monitors button clicks.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    //If the clicked element is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //This handles the all-clear button.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})