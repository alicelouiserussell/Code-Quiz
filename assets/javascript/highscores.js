function runHighscores(){
    var scoreHeader = document.querySelector("#highscoreHeader");
    var homeButton = document.querySelector("#homepage");
    var resetButton = document.querySelector("#resetScores");
    var highScore = document.createElement("p");

    highScore.textContent = userInitials + scoreDisplay;

    scoreHeader.appendChild(highScore);
};
