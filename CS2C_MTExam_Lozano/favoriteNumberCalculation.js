const theFavNumber = 23; // set fav number
let guess; // variable to store the user guess

while (guess !== favNumber) {// while Loop until the user guess the correct number
    guess = parseInt(prompt("Guess my favorite number:"), 10); // Prompt user for guess and parse it as integer

    if (guessedNumber < favNumber) {// Check if the guess is lower than the favorite number
        console.log("Too low!");
    } else if (guessedNumber > favNumber) {// Check if the guess is higher than the favorite number
        console.log("Too high!");
    } else {
        console.log("Correct!");// if correct
    }
}