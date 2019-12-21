// create variables to reference all DOM elements we're working with

// time-left
var timeLeft = document.getElementById("time-left");
// start game button
var startGameBtn = document.getElementById("start-game-btn");
// start-screen element
var startScreenEl = document.getElementById("start-screen");
// quiz-content
var quizContent = document.getElementById("quiz-content");
// post-game-screen
var postGameScreen = document.getElementById("post-game-screen");
// user-score
var userScore = document.getElementById("user-score");
// play-again-btn
var playAgainBtn = document.getElementById("play-again-btn");


// create variables for game logic
// timerIntervalId
var timerIntervalId;
// score
var score; 
// secondsLeft
var secondsLeft;

// create function to start game
function gameStart() {
// set secondsLeft variable starting time (300 seconds = 5 minutes)
secondsLeft = setInterval(gameStart, 1000);

// write secondsLeft to the page
document.getElementById("time-left").innerHTML = 
// reset score to 0
// write score to the page (optional)

// hide start-screen element && post-game-screen
// show quiz-content element

// display first question
displayQuestion(0);

// set timerIntervalId to setInterval function that decrements secondsLeft every second
timerIntervalId = setInterval(function () {
  secondsLeft--;
  if (secondsLeft <= 0) {
    stopGame();
  }
}, 1000);
}


// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game, we've hit last question
    return stopGame();
  }

  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)

}

// create function to handle users answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subtract time from secondsLeft

  // get index of next question (this question's index + 1)
  // run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score



// add event listeners
  // start game button (for starting the game)
  // quizcontent (for answering a question) -> use event delegation
  // play again button (for starting the game)

