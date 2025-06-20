// Ternary Operators //

// This function checks if a person is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short to ride." : "You are tall enough to ride!";
    document.getElementById("Ride").innerHTML = Can_ride;
}

// This function checks if a person is old enough to vote
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote." : "You are old enough to vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

// This function checks if a number is even or odd
function Even_Odd_Function() {
    var Number, Even_or_Odd;
    Number = document.getElementById("Number").value;
    Even_or_Odd = (Number % 2 == 0) ? "The number is even." : "The number is odd.";
    document.getElementById("Even_Odd").innerHTML = Even_or_Odd;
}

// Constructors //

// This function creates a new vehicle object and displays its properties
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Creating instances of the Vehicle object
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Jack is a new Vehicle object with properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");  // Emily is another Vehicle object with different properties
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");  // Erik is another Vehicle object with different properties

// This function displays the properties of the Vehicle objects
// It uses the innerHTML property to insert the text into the HTML element with the specified ID
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + 
        " manufactured in " + Jack.Vehicle_Year + ".";
}
function myFunction2 () {
    document.getElementById("Keywords_and_Constructors2").innerHTML = 
        "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
        " manufactured in " + Emily.Vehicle_Year + ".";   
}
function myFunction3 () {
    document.getElementById("Keywords_and_Constructors3").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}

//Nested Functions//


let currentCount = -1; // Keep track of the count across function calls
// This function increments the count and displays it
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        currentCount += 1; // incrementing the count
        return currentCount; // Return the updated count
    }
}
