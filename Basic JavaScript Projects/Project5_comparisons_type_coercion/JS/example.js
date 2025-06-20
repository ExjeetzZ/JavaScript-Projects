// This JavaScript code demonstrates the use of isNaN() function and handling click and hover events
// Click event handler
function my_Function_Click() {
    document.getElementById("Test").innerHTML = "Yes, It is " + 0/0; // This will return NaN
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); // This will return true because the string cannot be converted to a number
}

// Hover event handler
// This function will be called when the user hovers over an element
function my_Function_Hover() {
    document.getElementById("Test3").innerHTML = isNaN("007"); //This will return false because "007" is a valid number
    document.getElementById("Test4").innerHTML = 2E310; //This will return Infinity
    document.getElementById("Test5").innerHTML = -2E310; //This will return -Infinity
}

// This JavaScript code demonstrates the use of triple equal signs
function triple_Equal_Signs_1 () {
    document.getElementById("equal").innerHTML = (10 === 10); // This will return true because both values and types are equal
}

function triple_Equal_Signs_2 () {
    document.getElementById("equal2").innerHTML = (10 === "10"); // This will return false because the types are different (number vs string)
}

function triple_Equal_Signs_3 () {
    document.getElementById("equal3").innerHTML = (10 === 10.0); // This will return true because both values are equal and types are the same
}

function triple_Equal_Signs_4 () {
    document.getElementById("equal4").innerHTML = (10 === "10.0"); // This will return false because the types are different (number vs string)
}

function triple_Equal_Signs_5 () {
    var X = 10;
    var Y = 10;
    document.getElementById("equal5").innerHTML = (X === Y); // This will return true because both variables have the same value and type
}

function triple_Equal_Signs_6 () {
    var X = 10;
    var Y = "10";
    document.getElementById("equal6").innerHTML = (X === Y); // This will return false because the types are different (number vs string)
}

// This JavaScript code demonstrates the use of logical operators
function logical_Operators_1() {
    document.getElementById("logical").innerHTML = (10 > 9 && 10 < 11); // This will return true because both conditions are true
}

function logical_Operators_2() {
    document.getElementById("logical2").innerHTML = (10 > 9 && 10 > 11); // This will return false because the second condition is false
}

function logical_Operators_3() {
    document.getElementById("logical3").innerHTML = (10 > 9 || 10 < 11); // This will return true because at least one condition is true
}

function logical_Operators_4() {
    document.getElementById("logical4").innerHTML = (10 > 9 || 10 > 11); // This will return true because the first condition is true
}

function logical_Operators_5() {
    document.getElementById("logical5").innerHTML = !(10 > 9); // This will return false because the condition is true, and the NOT operator negates it
}

function logical_Operators_6() {
    document.getElementById("logical6").innerHTML = !(10 < 9); // This will return true because the condition is false, and the NOT operator negates it
}