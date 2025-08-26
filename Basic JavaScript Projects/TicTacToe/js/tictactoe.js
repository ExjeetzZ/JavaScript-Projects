//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves made by players.
let selectedSquares = [];

//This function is for placing an x or i in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectedSquares array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //If it's X's turn, the X is placed in the square.
            select.style.backgroundImage = 'url("images/x.png")';
            select.style.backgroundRepeat = 'no-repeat';
        } else {
            //If it's O's turn, the O is placed in the square.
            select.style.backgroundImage = 'url("images/o.png")';
            select.style.backgroundRepeat = 'no-repeat';
        }
        //The square is marked with the active player's symbol.
        selectedSquares.push(squareNumber + activePlayer);
        //This function checks for a win or a tie.
        checkWinConditions();
        //This function switches players after each turn.
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //This function plays the sound for placing a symbol.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computer's turn
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}


//This function checks for a win or a tie.
function checkWinConditions() {
    //X 0,1,2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3,4,5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6,7,8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0,3,6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1,4,7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2,5,8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6,4,2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0,4,8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0,1,2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3,4,5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6,7,8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0,3,6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1,4,7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O 2,5,8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6,4,2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0,4,8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }
}

//This function checks if an array includes 3 strings. It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //if the 3 variables we pass are all included in our array then
    //true is return and our else if condition executes the drawLine function.
    if (a === true && b === true && c === true) { return true; }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for placement sounds.
function audio(audioURL) {
    //Create a new audio object and set its source to the audio file path.
    let audio = new Audio(audioURL);
    //Play the audio file.
    audio.play();
}


//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accessess our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1;
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1;
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2;
        //This line indicates where the end of a lines y axis is.
        y2 = coordY2;
        // This variable stores temporary x & y axis data we update in our animation loop.
        x = x1;
        y = y1;

    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608); // Clears the canvas before each new line is drawn.
        c.beginPath(); // Starts a new path for the line.
        c.moveTo(x1, y1); // Moves the starting point of the line to (x1, y1).
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        c.stroke(); // Draws the line on the canvas.
        if (x1 <= x2 && y1 <= y2) {
            //This condition checks if the line is drawn to the right and down.
            if (x < x2) { x += 10; } // Moves the line to the right.
            if (y < y2) { y += 10; } // Moves the line down.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            //This condition checks if the line is drawn to the right and up.
            if (x < x2) { x += 10; } // Moves the line to the right.
            if (y > y2) { y -= 10; } // Moves the line up.
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clear our canvas after our win line is drawn.
    function clear() {
        //This line starts the animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line cancels the animation loop.
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}