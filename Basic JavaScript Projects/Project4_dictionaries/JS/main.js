//Dictionary Project//

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age: 5,
        Sound: "Woof Woof"
    }
    delete Animal.Sound; // Deleting the Sound property
    // Animal.Sound = "Bark Bark"; // Adding a new Sound property
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

