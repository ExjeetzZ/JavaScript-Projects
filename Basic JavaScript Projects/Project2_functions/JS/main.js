function v2V() {
    let firstVar = "Hello";
    let secondVar = "World!";
    document.getElementById("v2V").innerText = firstVar + " " + secondVar;
}
//Two Variables displayed in HTML after clicking a button


function o2V() {
    var sentence = "I am learning";
    sentence += " a lot from this"; //There is a space before the letter "a"
    document.getElementById("Concatenate") .innerHTML = sentence;
}
// This function uses += operator and has no button