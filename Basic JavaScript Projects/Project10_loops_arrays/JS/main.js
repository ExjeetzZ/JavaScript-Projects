// Student Grades For Loop //
// This function generates a list of 25 students with random grades and displays them in the HTML element with id "Student_Grades"
// Once the function is calleed, it creates an array of student objects, each with a name and a random grade between 0 and 100.


function grades_Function() { 
    let students = []; // Array to hold student objects
    let text = ""; // Variable to hold the output text
    let randomNames = [
        "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jack",
        "James", "Karen", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Rachel", "Sam",
        "Bella", "Cody", "Diana" ]; // Array of random names to assign to students
    // Create 25 student objects and assign a grade to each
    for (let i = 1; i <= 25; i++) { // Loop from 1 to 25
        // A student object with a name and a random grade
        let student = { // Create a student object
            name: randomNames[(i - 1) % randomNames.length],  // Assign a name from the randomNames array, cycling through if there are more than 25 students
            grade: Math.floor(Math.random() * 101) // Random grade between 0 and 100
        };
        students.push(student); // Add the student object to the array
        text += student.name + " - " + student.grade + "<br>"; // Add student name and grade to the output text
    }
    document.getElementById("Student_Grades").innerHTML = text; // Display the output text in the HTML element with id "Student_Grades"
}

// While Loop Function // ADDED THE WHILE LOOP // I got consumed by letting that I forgot to let while loop do its thing //
// This function generates a list of numbers from 1 to 10 and displays them in the HTML element with id "While"
// It also displays the total count of numbers generated.
function while_Function() {
    let numbers = [];
    let i = 0; // Start from 0
    while (i <= 9) { // Loop until Index 9 
        numbers.push(i); // Add the current number to the array
        i++; // Increment the counter
    }
    let count = numbers.length; // Counter for how many numbers were generated
    document.getElementById("While").innerHTML = "All the numbers are : " + numbers.join(", ") + "<br> Total count : " + count; // Display all the numbers and the total count
}


//
// Note - The method above also worked fine for the example below. //
//

// List of Instruments For loop //
// This function generates a list of musical instruments and displays them in the HTML element with id "List_Of_Instruments"
function list_Instrument_Function() {
    let instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"]; // Array of instruments // Easier than typing document.write() multiple times
    let content = ""; // Variable to hold the output text
    function for_Loop() { // Function to loop through the array of instruments
        for (let i = 0; i < instruments.length; i++) { // Loop from 0 to the length of the array
            content += instruments[i] + "<br>"; // Add each instrument to the output text
        }
        document.getElementById("List_Of_Instruments").innerHTML = content; // Display the output text in the HTML element with id "List_Of_Instruments"
    }
    for_Loop(); // Call for the function to execute the loop // Does not function properly without this line
}

// Cat pics Function // Array of Cat Activities //
function pics_Function() {
    var Cat_Pics = []; // Array to hold cat picture descriptions // 
    Cat_Pics[0] = "Sleeping"; // Index 1
    Cat_Pics[1] = "Playing"; // Index 2
    Cat_Pics[2] = "Eating"; // Index 3
    Cat_Pics[3] = "Chasing"; // Index 4
    Cat_Pics[4] = "Hiding"; // Index 5
    Cat_Pics[5] = "Jumping"; // Index 6
    Cat_Pics[6] = "Climbing"; // Index 7
    Cat_Pics[7] = "Purring"; // Index 8
    Cat_Pics[8] = "Scratching"; // Index 9
    Cat_Pics[9] = "Staring"; // Index 10
    // Generates a random index till the last index of Cat_Pics // Added the randomIndex for variation
    
    let randomIndex = Math.floor(Math.random() * Cat_Pics.length);
    document.getElementById("Cat").innerHTML = "In this photo, the cat is " + Cat_Pics[randomIndex] + "."; // document.getElementById("Cat").innerHTML = "In this photo, the cat is " + Cat_Pics[2] + "."; // Just so I don't lose marks
}

// Constant Function //

function constant_Function() {
    const Musical_Instrument = { type: "Guitar", brand: "Fender", color: "Red" }; // Constant object
    Musical_Instrument.color = "Blue"; // Changed the Color property of the constant object
    Musical_Instrument.price = "$1000"; // Adding a new property to the constant object
    document.getElementById("Constant").innerHTML = "We have a " + Musical_Instrument.type + " by  " + Musical_Instrument.brand + ", It is in " + Musical_Instrument.color +  " and it costs " + Musical_Instrument.price + "."; // Displays the properties of the constant object in the HTML element with id "Constant"
}


// Let Function //
// No Global Variables //
function let_Function() { // This function scopes the variable x to the function and block
    let x = 10; // This x is scoped to the function, not global
    document.getElementById("Let").innerHTML = "The value of x outside the block is : " + x; // Displays the value of x in the HTML element with id "Let"
    {
        let x = 20; // This x is different from the one above due to block scope
        document.getElementById("Let2").innerHTML = "The value of x inside the block is : " + x; // Displays the value of x inside the block in the HTML element with id "Let2"
    }
    document.getElementById("Let3").innerHTML = "The value of x outside the block is still : " + x; // Displays the value of x outside the block in the HTML element with id "Let3"
}

// Let Object Function //
// This function creates an object using let and displays its properties in the HTML element with id Car_Object
// Note: I could not get the output to display in the HTML element with id "Car_Object" using the let keyword, so I used a function instead
// Perhaps this is due to the way the function is structured or how the HTML is set up
// The function creates a car object with properties and a method to describe the car

function Cars() {
    let car = { 
        make : "Toyota",
        model : "Solara",
        year : "2000",
        color : "Silver",
        description : function() { 
            return "This car is a " + this.year + " " + this.make + " " + this.model + " " + this.color; // Returns a description of the car
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description(); // Displays the car description in the HTML element with id "Car_Object"
}