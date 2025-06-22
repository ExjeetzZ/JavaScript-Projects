// This script handles the countdown timer functionality


function countdown() { // Function to start the countdown timer
    var seconds = document.getElementById("seconds").value; // Get the number of seconds from the input field

    function tick() { // Nested function to handle the countdown logic
        seconds = seconds - 1; // Decrease the seconds by 1
        timer.innerHTML = seconds; // Update the timer display
        var time = setTimeout(tick, 1000); // Call the tick function 1000 milliseconds (1 second).
        if (seconds == -1) { // Check if the countdown has reached zero 
            alert("Time's up!"); // Alert the user that the time is up
            clearTimeout(time); // Stop the timer
            timer.innerHTML = ""; 
        }
    }
    tick();
}


// This script handles the image slideshow functionality
// Get the elements for the slideshow controls
let slideIndex = 1; // Initialize the slideIndex to 1 to show the first slide
showSlides(slideIndex); // Call showSlides to display the first slide

// Next/previous controls
function plusSlides(n) { // Function to change the slide index by n
  // n can be 1 or -1 to go to the next or previous slide
  showSlides(slideIndex += n); // Update the slideIndex and show the corresponding slide
}

// Thumbnail image controls
function currentSlide(n) { // Function to set the slideIndex to a specific slide n
  showSlides(slideIndex = n); // Update the slideIndex and show the corresponding slide
}
// Function to display the current slide based on the slideIndex
// It hides all slides and shows the current one, updating the active dot indicator.
function showSlides(n) {
  let i; // Declare a variable i for loop iteration
  let slides = document.getElementsByClassName("slides"); // Get all elements with the class "slides"

  let dots = document.getElementsByClassName("dot");  // Get all elements with the class "dot" for the active slide indicator
  if (n > slides.length) {slideIndex = 1} // If n exceeds the number of slides, reset to the first slide
  if (n < 1) {slideIndex = slides.length} // If n is less than 1, set to the last slide
  // Hide all slides and remove the active class from all dots
  for (i = 0; i < slides.length; i++) {  // Loop through all slides
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < dots.length; i++) { // Loop through all dots
    dots[i].className = dots[i].className.replace(" active", ""); // Remove the "active" class from all dots
  }
  slides[slideIndex-1].style.display = "block"; // Show the current slide based on slideIndex
  dots[slideIndex-1].className += " active"; // Add the "active" class to the current dot
}

