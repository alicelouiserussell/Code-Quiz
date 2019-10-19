var indexContent = document.querySelector("#content-area");
var startButton = document.querySelector("#start-button");
var timeElement = document.querySelector("#time");
var count = 75;
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
        alert("time's up!");
      }, 75000);
      
      var countInterval = setInterval(function() {
        count--;
        timeElement.textContent = count;
      
        if (count === 0) {
          clearInterval(countInterval);
        }
      }, 1000);

   // define new elements being created //
    //QUESTION ELEMENTS//
    var newQuestion = document.createElement("h2");
    var newDiv = document.createElement("div");

    //LIST ELEMENTS//
    var ol = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    // DEFINE CONTENT //
    ol.setAttribute("id", "list");
    newQuestion.textContent = questions[0].title;
    li1.innerHTML = questions[0].choices[0];
    li2.innerHTML = questions[0].choices[1];
    li3.innerHTML = questions[0].choices[2];
    li4.innerHTML = questions[0].choices[3];
  
    // REPLACE existing elements, APPEND to page //
    indexContent.parentNode.replaceChild(newDiv, indexContent);
    newDiv.appendChild(newQuestion);
    document.body.appendChild(ol);
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);
    ol.appendChild(li4);

    var correctAnswer = questions[0].answer;
    var listElement = document.querySelector("#list"); 
    listElement.addEventListener("click", function(event){
      var userGuess = event.target.textContent;
      if (correctAnswer === userGuess){
        alert("Correct!");
      } else {
        alert("Incorrect!");
        count = count - 15;
      }
    });














    });
});
