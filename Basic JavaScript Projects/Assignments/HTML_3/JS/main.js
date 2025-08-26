//Functions to handle character type display 
function displayType(character) { // Function to display character type
    var characterType = character.getAttribute("data-character-type"); // Get the character type
    alert(character.innerHTML + " is in the " + characterType + " universe!"); // Display the character type and universe
}



