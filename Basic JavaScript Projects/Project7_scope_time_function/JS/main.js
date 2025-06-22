//Scope and Time Functions//

var X = 10; // Global variable
function Add_Numbers_1() {
    document.getElementById("Add_1").innerHTML = Y + X; // Accessing global variable X // Y is not defined here, will cause an error
    console.log(X + Y); // This will throw an error because Y is not defined in this scope
}
function Add_Numbers_2() {
    var Y = 15; // Local variable
    document.getElementById("Add_2").innerHTML = X + Y; // Accessing global variable X and local variable Y
}

function check_eligibility() {
    var age = document.getElementById("Age").value;
    var result;
    if (age >= 18) {
        result = "You are eligible to vote.";
    } else {
        result = "You are not eligible to vote.";
    }
    document.getElementById("Eligibility_Result").innerHTML = result;
}