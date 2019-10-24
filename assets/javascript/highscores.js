function runHighscores(){
    var scoreHeader = document.querySelector("#highscoreHeader");
    var homeButton = document.querySelector("#homepage");
    var resetButton = document.querySelector("#resetScores");
    var highscoreJSON = JSON.stringify(finalData);
    localStorage.setItem('finalData', highscoreJSON);

   var highscore = window.localStorage.getItem('finalData');
   highscore = JSON.parse(highscore);
   console.log(highscore);

   scoreHeader.appendChild(highscore);

};
