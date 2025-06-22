// This JavaScript code defines a function that concatenates several strings to form a complete sentence and displays it in an HTML element.//


// The function is named full_Sentence and it uses the concat method to join the strings together
function full_Sentence() { // Function to concatenate parts of a sentence and display it
    // Declare variables for each part of the sentence
    var part_1 = "Mary "; //Space after Mary is intentional to ensure proper spacing
    var part_2 = "had a little lamb "; //Also intentional
    var part_3 = "whose fleece was white as snow ";  //Space after snow is intentional
    var part_4 = "I can't remember the rest of the song"; 
    var Whole_Sentence = part_1.concat( part_2, part_3, part_4); // Concatenate all parts into one string
    document.getElementById("Concatenate").innerHTML = Whole_Sentence; // Display the full sentence in the HTML element with id "Concatenate"
}

// This Function is called slice_Method
function slice_Method() { // Function to demonstrate the slice method
    var Sentence = "All work and no play makes Johnny a dull boy."; // Define a sentence to be sliced
    var Section = Sentence.slice(27, 33); // Extract a section of the sentence from index 27 to 33, // Which is "Johnny"
    Section = Section.toUpperCase(); // Convert the sliced section to uppercase
    document.getElementById("Slice").innerHTML = Section; // Display the sliced section
}

// This Function is called search_Method
// It searches for a specific word in a sentence and returns its position
function search_Method() { // Function to demonstrate the search method
    var Sentence = "All work and no play makes Johnny a dull boy."; // Define a sentence to search within
    var Position = Sentence.search("Johnny"); // Search for the word "Johnny" in the sentence
    document.getElementById("Search").innerHTML = Position; // Display the position of
    // the word "Johnny" in the HTML element with id "Search"
}

//This Function is called string_Method
function string_Method() { 
    var X = 182; // Define a number
    document.getElementById("String").innerHTML = X.toString(); // Convert the number to a string and display it in the HTML element with id "String"
}

// This Function is called precision_Method
function precision_Method() { 
    var X = 12938.3012987376112; // Define a floating-point number
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Convert the number to a string with a specified precision and display it in the HTML element with id "Precision"
}

// This Function is called toFixed_Method
function toFixed_Method() { 
    var X = 12938.3012987376112; // Define a floating-point number
    document.getElementById("ToFixed").innerHTML = X.toFixed(2); // Convert the number to a string with two decimal places and display it in the HTML element with id "ToFixed"
}

// This Function is called valueOf_Method
function valueOf_Method() {
    var X = 12938.2123342; // Define a floating-point number
    document.getElementById("ValueOf").innerHTML = X.valueOf();
}

