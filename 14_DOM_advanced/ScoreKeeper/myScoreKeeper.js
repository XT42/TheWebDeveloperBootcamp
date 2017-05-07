/**
 * Created by acaliano on 07.05.17.
 */
var btnPlayer1 = document.getElementById("btnPlayer1");
var btnPlayer2 = document.getElementById("btnPlayer2");
var btnReset = document.getElementById("btnReset");
var textWinningScore = document.querySelector("input");
var p1Display = document.getElementById("player1");
var p2Display = document.getElementById("player2");
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;

btnPlayer1.addEventListener("click", function() {
    if (p1Score < winningScore && p2Score < winningScore) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("gameOver");
        }
        update();
    }
});

btnPlayer2.addEventListener("click", function() {
    if (p1Score < winningScore && p2Score < winningScore) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("gameOver");
        }
        update();
    }
});

btnReset.addEventListener("click", function() {
    reset();
    update();
});

textWinningScore.addEventListener("change", function() {
    winningScore = Number(this.value);
    update();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    winningScore = 0;
    textWinningScore = "";
    document.querySelector("input").value = textWinningScore;
    p1Display.classList.remove("gameOver");
    p2Display.classList.remove("gameOver");
}

function update() {
    document.getElementById("playingTo").textContent = winningScore;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}