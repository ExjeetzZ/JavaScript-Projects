function get_Date() {
    var hour = new Date().getHours();
    if (hour < 12 == hour > 0) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    } else if (hour >= 12 == hour < 18) {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    } else {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}