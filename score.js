// Iteration 8: Making scoreboard functional
let score = localStorage.getItem("score");
console.log("Score = "+score);

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) =>{
    location.href = "./game.html";
}
