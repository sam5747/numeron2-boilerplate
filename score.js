// Iteration 8: Making scoreboard functional
/*var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");*/
let score = localStorage.getItem("score");
console.log("Score = "+score);

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) =>{
    location.href = "./game.html";
}