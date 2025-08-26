//Function to change text//

function changeText() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
    

//Scripts 
function draw() {
    // Create a canvas element and draw a circle on it    
    var canvas = document.createElement('canvas');
    canvas.width = 450;
    canvas.height = 450;
    canvas.id = "thisCanvas";
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    const thisGradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 50);
    thisGradient.addColorStop(0, 'black');
    thisGradient.addColorStop(1, 'white');
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = thisGradient;
    ctx.fill();
    ctx.stroke();
}