// need a containerEl to select opening container?

var startButtonEl = document.querySelector("#quiz-start");
var timerEl = document.getElementById("countdown");
// Variable starts a Timer that counts down from 30
var timeLeft = 30;
var savedTime = [];

var quizQuestionsEl = document.querySelector(".quiz-topper");
var quizIntroEl = document.querySelector(".intro");
var startingParagraphEl = document.querySelector(".quiz-body");
var newQuestionEl = document.querySelector("#quiz-question");
var incorrectEl = document.querySelector("#quiz-wrapper");

// To decrease time by 10 seconds with a wrong answer
function subtractTen() {
  timeLeft = timeLeft - 10;
}

// Countdown Counter
var countdown = function () {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "" + "Time's Up!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `endQuiz()` function
      endQuiz();
    }
  }, 1000);
  startQuiz();
};

// When button is clicked, first question renders
var startQuiz = function () {
  // create new Question
  var newQuestionEl = document.createElement("h1");
  newQuestionEl.textContent = "Commonly used datatypes do NOT include:";
  newQuestionEl.setAttribute("id", "quiz-question");
  quizQuestionsEl.appendChild(newQuestionEl);
  // remove old header/intro
  quizIntroEl.remove();
  startingParagraphEl.remove();
  startButtonEl.remove();

  // create new unordered list with new answers
  var quizAnswers1El = document.querySelector("#quiz-answer-wrapper");
  var newAnswerArena = document.createElement("ul");
  // new answer arena doesn't have any id/class
  var newAnswer1AEl = document.createElement("li");
  newAnswer1AEl.setAttribute("class", "quiz-answer-option");
  newAnswer1AEl.innerHTML = "<button id='answer-one-a'>1. Strings</button>";
  quizAnswers1El.appendChild(newAnswerArena);
  newAnswerArena.appendChild(newAnswer1AEl);

  var newAnswer1BEl = document.createElement("li");
  newAnswer1BEl.setAttribute("class", "quiz-answer-option");
  newAnswer1BEl.innerHTML = "<button id='answer-one-b'>2. Booleans</button>";
  newAnswerArena.appendChild(newAnswer1BEl);

  var newAnswer1CEl = document.createElement("li");
  newAnswer1CEl.setAttribute("class", "quiz-answer-option");
  newAnswer1CEl.innerHTML = "<button id='answer-one-c'>3. Alerts</button>";
  newAnswerArena.appendChild(newAnswer1CEl);

  var newAnswer1DEl = document.createElement("li");
  newAnswer1DEl.setAttribute("class", "quiz-answer-option");
  newAnswer1DEl.innerHTML = "<button id='answer-one-d'>4. Numbers</button>";
  newAnswerArena.appendChild(newAnswer1DEl);

  newAnswer1AEl.addEventListener("click", wrongAnswer);
  newAnswer1BEl.addEventListener("click", correctAnswer);
  newAnswer1CEl.addEventListener("click", wrongAnswer);
  newAnswer1DEl.addEventListener("click", wrongAnswer);
};

var wrongAnswer = function () {
  console.log("Wrong!");
  renderWrong();
  subtractTen();
  questionTwo();
};

var correctAnswer = function () {
  console.log("Correct!");
  renderCorrect();
  questionTwo();
};

var renderWrong = function () {
  var spacerEl = document.createElement("div");
  spacerEl.setAttribute("class", "spacer");

  var qualifierEl = document.createElement("div");
  qualifierEl.setAttribute("class", "qualifier");

  var wrongEl = document.createElement("h2");
  wrongEl.setAttribute("class", "wrong");
  wrongEl.textContent = "Wrong!";

  incorrectEl.appendChild(spacerEl);
  spacerEl.appendChild(qualifierEl);
  qualifierEl.appendChild(wrongEl);
};

var renderCorrect = function () {
    var spacerEl = document.createElement("div");
    spacerEl.setAttribute("class", "spacer");
  
    var qualifierEl = document.createElement("div");
    qualifierEl.setAttribute("class", "qualifier");
  
    var wrongEl = document.createElement("h2");
    wrongEl.setAttribute("class", "wrong");
    wrongEl.textContent = "Correct!";
  
    incorrectEl.appendChild(spacerEl);
    spacerEl.appendChild(qualifierEl);
    qualifierEl.appendChild(wrongEl);
  };

// function correctAnswer1 () {

//     var correctAnswer1AEl = document.querySelector("#answer-one-a")
//     var correctAnswer1BEl = document.querySelector("#answer-one-b")
//     var correctAnswer1CEl = document.querySelector("#answer-one-c")
//     var correctAnswer1DEl = document.querySelector("#answer-one-d")

//     if (correctAnswer1CEl.addEventListener("click", function() {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }))

var questionTwo = function () {
  // newQuestionEl.textContent = ("The condition in an 'if/then' statement is enclosed with:")
  // newQuestionEl.remove();
  var question2El = document.createElement("h1");
  question2El.setAttribute("id", "quiz-question");
  question2El.textContent =
    "The condition in an 'if/then' statement is enclosed with:";

  quizQuestionsEl.appendChild(question2El);
  // newQuestionEl.innerHTML = "<h1 id='quiz-topper'>The condition in an 'if/then' statement is enclosed with: </h1>";
  newAnswer1AButtonEl.textContent = "1. Quotes";
  newAnswer1BButtonEl.textContent = "2. Curly Brackets";
  newAnswer1CButtonEl.textContent = "3. Square Brackets";
  newAnswer1DEl.textContent = "4. Parentheses";

  newAnswerArena.addEventListener("click", questionThree);
};

var questionThree = function () {
  // newQuestionEl.remove();
  var question2El = document.createElement("h1");
  question2El.setAttribute("id", "quiz-question");
  question2El.textContent =
    "The condition in an 'if/then' statement is enclosed with:";
  quizQuestionsEl.appendChild(question2El);
  // newQuestionEl.innerHTML = "<h1 id='quiz-topper'>The condition in an 'if/then' statement is enclosed with: </h1>";
  newAnswer1AButtonEl.textContent = "1. Numbers and strings";
  newAnswer1BButtonEl.textContent = "2. Other arrays";
  newAnswer1CButtonEl.textContent = "3. Booleans";
  newAnswer1DEl.textContent = "4. All of the above";
};

//End Quiz when time runs out
// ******** NOT WORKING ********
var endQuiz = function () {
  // Enter High Scores
  var newQuestionEl = document.querySelector("#quiz-question");
  newQuestionEl.textContent = "All Done!";
  var highScoresForm = createElement("form");
  highScoresForm.innerHTML =
    "<label for='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button type='submit'>Submit</button>";
  newQuestionEl.appendChild(highScoresForm);

  scores[i].setAttribute("", scoreIdCounter);
  // Save High Scores
  var scores = [];
  var highScoresObj = { name: highScoreInput, score: savedTime };
  scoresObj.id = scoreIdCounter;
  scores.push(highScoresObj);
  // save tasks to localStorage
  savedScores();
  // increase task counter for next unique score id
  scoreIdCounter++;

  var savedScores = function () {
    localStorage.setItem("scores", JSON.stringify(scores));
  };

  // Print High Scores
  var loadScores = function () {
    // assign score variable
    var savedScores = localStorage.getItem("scores");
    // if scores = null set scores back to an empty array
    if (!savedScores) {
      return false;
    }
  };
  // retrieve scores from local storage
  scores = JSON.parse(scores);

  //print items to page
  var newQuestionEl = document.querySelector("#quiz-question");
  newQuestionEl.textContent = "";
  var printHighScoresEl = createElement("ol");
  var printHighScoresListEl = createElement("li");
  printHighScoresListEl.setAttribute("class=print-high-scores");
  scores[i].setAttribute(loadScores, scoreIdCounter);
  newQuestionEl.appendChild(printHighScoresEl);
  printHighScoresEl.appendChild(printHighScoresListEl);
  var resetReturnButtonsEl = createElement("div");
  resetReturnButtonsEl.getAttribute("class=high-scores");
  resetReturnButtonsEl.innerHTML(
    "<button>Go Back</button><button type='reset'>Clear High Scores</button>"
  );
};

// *** NEED TO PUT AT END OF QUESTIONS *** //
// To stop the clock when user reaches the end of the questions.
function stopClock() {
  var saveTime = timeLeft;
  savedTime.push(saveTime); //save this time to storage
  timeLeft = 0;
  console.log(saveTime);
}

// console.log(savedTime);

// Want countdown to start, and the questions to start as well.  Need to put inside countdown function?
startButtonEl.addEventListener("click", countdown);
