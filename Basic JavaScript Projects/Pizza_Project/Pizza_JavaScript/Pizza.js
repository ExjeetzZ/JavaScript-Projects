function getReceipt () {
    // This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    // This will keep track of the running total
    var runningTotal = 0;
    // This will keep track of the size total
    var sizeTotal = 0;
    // This will keep track of the selected size
    var selectedSize = "";
    // This will keep track of the size array
    var sizeArray = document.getElementsByClassName("size");
    // Loop through the size array to find the selected size
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Family Size Pizza") {
        sizeTotal = 20;
    }
    // This will keep track of the running total
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //These variablkes will get passed on to each function
    getTopping(runningTotal, text1);
};

// This function will get the selected toppings
function getTopping(runningTotal, text1) {
    // This will keep track of the topping total
    var toppingTotal = 0;
    // This will keep track of the selected toppings
    var selectedTopping = [];
    // This will keep track of the topping array
    var toppingArray = document.getElementsByClassName("toppings");
    // Loop through the topping array to find the selected toppings
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // This will keep track of the running total
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
