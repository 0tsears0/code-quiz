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

var choice = document.getElementsByClassName("choice");
// create variables for game logic
// timerIntervalId
var timerIntervalId;
// score
var score = 0;
// set secondsLeft variable starting time (300 seconds = 5 minutes)
var secondsLeft = 300;

// create function to start game
function gameStart() {
  // write secondsLeft to the page
  timeLeft.textContent = secondsLeft;
  // reset score to 0
  score = 0;
  // hide start-screen element && post-game-screen
  startScreenEl.classList.add('hide');
  postGameScreen.classList.add('hide');
  quizContent.classList.remove('hide');
  // display first question
  displayQuestion(0);
  // set timerIntervalId to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);
}

function stopGame() {
  clearInterval(timerIntervalId);
}

// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game, we've hit last question
    return stopGame();
  }
  for (i = 0; i < questions.length; i++) {


    // get questions[questionIndex]
    var currentQuestion = questions[questionIndex];
    // print question to the page
    var questionContent = `
  <div data-question-index=${questionIndex}>
    <h2>${currentQuestion.question}</h2>

    ${currentQuestion.choices.map(choice => `<button class="choice">${choice}</button>`).join('')}
  </div>
  `

    quizContent.innerHTML = questionContent;
  }
}

function handleChoiceClick(event) {

  if (!event.target.matches(".choice")) {
    return false;
  }

  var selectedAnswer = event.target.textContent;

  var questionIndex = parseInt(event.target.parentNode.getAttribute('data-question-index'));

  var questionAnswered = questions[questionIndex];


  // if selectedAnswer === questionAnswered.answer
  // then score goes up
  // else
  // time left goes down
  if (selectedAnswer === questionAnswered.answer) {
    score++
  }
  else {
    timeLeft--
  }

  var nextQuestionIndex = questionIndex + 1;
  displayQuestion(nextQuestionIndex);
}

// add event listeners
// start game button (for starting the game)
startGameBtn.addEventListener('click', gameStart);

// quizcontent (for answering a question) -> use event delegation
quizContent.addEventListener('click', handleChoiceClick);

// play again button (for starting the game)
playAgainBtn.addEventListener('click', gameStart);
