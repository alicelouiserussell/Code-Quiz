// INITIAL VARIABLES //
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
});














});
