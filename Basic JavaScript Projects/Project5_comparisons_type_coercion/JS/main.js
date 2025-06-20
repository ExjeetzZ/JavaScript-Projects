// This is a JavaScript file that demonstrates various data types and boolean operations
// Notes : I have added comments to explain each line of code and its output



document.write(typeof "word" + "<br>"); // This will output the type of the string "word"
document.write(typeof 3 + "<br>"); // This will output as the type "number"
document.write("10" + 5 + "<br>"); // This will concatenate the string "10" with the number 5, resulting in "105"
document.write(typeof true + "<br>"); // This will output the type "boolean"
document.write(typeof null + "<br>"); // This will output the type "object"
document.write(typeof undefined + "<br>"); // This will output the type "undefined"
document.write(typeof Symbol() + "<br>"); // This will output the type "symbol"
document.write(typeof { name: "John" } + "<br>"); // This will output the type "object"
document.write(typeof [1, 2, 3] + "<br>"); // This will output the type "object" 


// Over event handler, and added a function so that it can be called below the header 2
function bL() { // This function will be called when the user hovers over the text
    //Greater than Sign
    document.getElementById("Boolean_1").innerHTML = (Boolean(10 > 9) + "<br>"); // This will return true because 10 is greater than 9
    //Less than Sign
    document.getElementById("Boolean_2").innerHTML = (Boolean(10 < 9) + "<br>"); // This will return false because 10 is not less than 9
    //Double Equal Sign
    document.getElementById("Boolean_3").innerHTML = (Boolean(10 == 9) + "<br>"); // This will return false because 10 is not equal to 9
    document.getElementById("Boolean_3_1").innerHTML = (Boolean(10 == 10) + "<br>"); // This will return true because 10 is equal to 10
    //Not Equal Sign
    document.getElementById("Boolean_4").innerHTML = (Boolean(10 != 9) + "<br>"); // This will return true because 10 is not equal to 9
    //Greater than or Equal to Sign
    document.getElementById("Boolean_5").innerHTML = (Boolean(10 >= 9) + "<br>"); // This will return true because 10 is greater than or equal to 9
}

// Console logging various messages
console.log("This is a console log message."); // This will log a message to the console
console.error("This is an error message."); // This will log an error message to the console
console.log (Boolean(10 < 9)); // This will log false to the console

