// This file contains JavaScript functions for basic arithmetic operations, modulus, negation, increment, decrement, and generating random numbers.
// Arithmetic Functions//


// Addition, Subtraction, Multiplication, Division Functions//

//Addition
function addition_Function() {
    var addition = 1 + 2;
    document.getElementById("Math").innerHTML = "1 + 2 = " + addition;
}

// Subtraction
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}
// Multiplication

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}
// Division

function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}
// More Complex Math Functions//

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, times 10, divided by 2, minus 5 equals " + simple_Math;
}
// Modulus and Negation Functions//

// Modulus Operator
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Negation Operator
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
// Increment and Decrement Functions//

// Increment Operator
function increment_Function() {
    var x = 5;
    x++;
    document.getElementById("Math").innerHTML = x++;
}
// Decrement Operator
function decrement_Function() {
    var x = 5.25;
    x--;
    document.getElementById("Math").innerHTML = x--;
}

// Random Number Functions//

// Random Number between 0 and 1
function random_Function() {
    var random = Math.random() * 1;
    document.getElementById("Math").innerHTML = "A random number between 0 and 1 is: " + random;
}

// Random Number between 0 and 100
function random_100_Function() {
    var random = Math.random() * 100;
    random = Math.floor(random); // Rounded to the nearest whole number
    document.getElementById("Math").innerHTML = "A random number between 0 and 100 is: " + random;
}
