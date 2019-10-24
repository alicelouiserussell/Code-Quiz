var indexContent = document.querySelector("#content-area");
var startButton = document.querySelector("#start-button");
var timeElement = document.querySelector("#time");
var count = 75;
var questionIndex = 0;
var timerInterval;
// QUESTIONS OBJECT //
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ______.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within ______ when being assigned to variables.",
      choices: ["commas,", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
      answer: "console log"
    }

  ];


$(document).ready(function() {

startButton.addEventListener("click", function() {
    setTimeout(function(){
      }, 75000);
      
      var countInterval = setInterval(function() {
        count--;
        timeElement.textContent = count;
      
        if (count === 0) {
          clearInterval(countInterval);
          endPage();
        }
      }, 1000);

   newPage(questionIndex);
});

   function newPage(questionIndex) {
    var newQuestion = document.createElement("h2");
    var ol = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    
    indexContent.innerHTML = "";
    ol.setAttribute("id", "list");
    
    newQuestion.textContent = questions[questionIndex].title;
    li1.innerHTML = questions[questionIndex].choices[0];
    li2.innerHTML = questions[questionIndex].choices[1];
    li3.innerHTML = questions[questionIndex].choices[2];
    li4.innerHTML = questions[questionIndex].choices[3];


    indexContent.appendChild(newQuestion);
    indexContent.appendChild(ol);
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);
    ol.appendChild(li4);

    checkAnswer();
  };

function checkAnswer() {
    var correctAnswer = questions[questionIndex].answer;
    var listElement = document.querySelector("#list"); 
    listElement.addEventListener("click", function(event){
      var userGuess = event.target.textContent;
      if (correctAnswer === userGuess){
        alert("Correct!"); 
        questionIndex++;
        if (questionIndex >= questions.length){
          endPage();
        } else {
        newPage(questionIndex);
        }
      } else {
        alert("Incorrect!");
        count = count - 15;
    };

  });

    
};


function endPage(){
  if (timerInterval) {
    clearInterval(timerInterval)
  };
  var allDoneHeader = document.createElement("h2");
  var scoreDisplay = document.createElement("p");
  var formEl = document.createElement("form");
  var labelEl = document.createElement("label");
  var inputEl = document.createElement("input");
  var buttonEl = document.createElement("button");

  allDoneHeader.textContent = "All done!";
  indexContent.textContent = ""; 
  timeElement.textContent = count;
  scoreDisplay.textContent = "Your final score is " + timeElement.textContent;
  labelEl.setAttribute("for", "initials");
  labelEl.textContent = "Enter initials";
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("id", "initials");
  buttonEl.textContent = "Submit";
  

  indexContent.appendChild(allDoneHeader);
  indexContent.appendChild(scoreDisplay);
  indexContent.appendChild(formEl);
  formEl.appendChild(labelEl);
  formEl.appendChild(inputEl);
  formEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", function(event){
    event.preventDefault();
    var highscoresPage = document.createElement("a");

    highscoresPage.href = "highscores.html";
    highscoresPage.textContent = "View high scores!"
    indexContent.appendChild(highscoresPage);
  });
};
});

    


