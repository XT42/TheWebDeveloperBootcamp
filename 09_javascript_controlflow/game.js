var secretNumber = Math.floor(100*Math.random());
var guessNumber = Number(prompt("Guess Number (0-99"));

while (secretNumber !== guessNumber) {
    if (secretNumber < guessNumber) {
        alert("Secret Number is smaller");
        guessNumber = Number(prompt("Guess Number (0-99"));
    } else {
        alert("Secret Number is bigger");
        guessNumber = Number(prompt("Guess Number (0-99"));
    }
}
alert("Yay!");