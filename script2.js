// need a containerEl to select opening container?

var timerEl = document.getElementById("countdown");
var timeLeft = 30;
var savedTime = [];

var startButtonEl = document.querySelector("#quiz-start");

// original elements
quizWrapperDiv = document.querySelector(".quiz-wrapper");
var quizQuestionsEl = document.querySelector(".quiz-topper");
var quizIntroEl = document.querySelector(".intro");
var startingParagraphEl = document.querySelector(".quiz-body");

// CREATES DIV TO WRAP ANSWERS
var quizAnswerWrapperEl = document.createElement("div");

// dynamic elements
// CREATES QUESTION h1 ELEMENT
var questionEl = document.createElement("h1");
questionEl.className = "question";

// CREATES DIV TO WRAP ANSWERS
var quizAnswerWrapperEl = document.createElement("div");
quizAnswerWrapperEl.setAttribute("id", "quiz-answer-wrapper");
quizAnswerWrapperEl.className = "quiz-answer-wrapper";

// CREATES NEW UNORDERED LIST
var quizAnswersEl = document.createElement("ul");
questionEl.setAttribute("id", "quiz-answers");
quizAnswersEl.className = "quiz-answers";

var quizOpt1Button = document.createElement("button");
quizOpt1Button.setAttribute = ("id", "answer-one-a");

var quizOpt2Button = document.createElement("button");
quizOpt2Button.setAttribute = ("id", "answer-one-b");

var quizOpt3Button = document.createElement("button");
quizOpt3Button.setAttribute = ("id", "answer-one-c");

var quizOpt4Button = document.createElement("button");
quizOpt4Button.setAttribute = ("id", "answer-one-d");

var qualifierEl = document.querySelector("#section");

// To decrease time by 10 seconds with a wrong answer
function subtractTen() {
  timeLeft = timeLeft - 10;
}

// Countdown Counter  GOOD!
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
function startQuiz() {
  questionEl.textContent = "Commonly used datatypes do NOT include:";
  quizAnswerWrapperEl.appendChild(questionEl);

  quizOpt1Button.textContent = "1. Strings";
  quizAnswersEl.appendChild(quizOpt1Button);

  quizOpt2Button.textContent = "2. Boolean";
  quizAnswersEl.appendChild(quizOpt2Button);

  quizOpt3Button.textContent = "3. Alerts";
  quizAnswersEl.appendChild(quizOpt3Button);

  quizOpt4Button.textContent = "4. Numbers";
  quizAnswersEl.appendChild(quizOpt4Button);

  quizAnswerWrapperEl.appendChild(quizAnswersEl);
  quizWrapperDiv.replaceWith(quizAnswerWrapperEl);

  quizOpt1Button.addEventListener("click", wrongAnswer1);
  quizOpt2Button.addEventListener("click", correctAnswer1);
  quizOpt3Button.addEventListener("click", wrongAnswer1);
  quizOpt4Button.addEventListener("click", wrongAnswer1);
}

  var wrongAnswer1 = function () {
    console.log("Wrong!");
    renderWrong();
    subtractTen();
    questionTwo();
  };

  var correctAnswer1 = function () {
    console.log("Correct!");
    renderCorrect();
    questionTwo();
  };


var renderWrong = function () {
  console.log("Render Wrong hit!");

  var wrongEl = document.createElement("h2");
  wrongEl.setAttribute("class", "wrong");
  wrongEl.textContent = " ";
  wrongEl.textContent = "Wrong!";

  qualifierEl.appendChild(wrongEl);
};

var renderCorrect = function () {
  console.log("Render Wrong hit!");
  var wrongEl = document.createElement("h2");
  wrongEl.setAttribute("class", "correct");
  wrongEl.textContent = "Correct!";

  qualifierEl.appendChild(wrongEl);
};

var questionTwo = function () {
  questionEl.textContent =
    "The condition in an if/else statement is enclosed with:";
  quizOpt1Button.textContent = "1. Quotes";
  quizOpt2Button.textContent = "2. Parentheses";
  quizOpt3Button.textContent = "3. Curly Brackets";
  quizOpt4Button.textContent = "4. Square Brackets";

  quizOpt1Button.addEventListener("click", wrongAnswer2);
  quizOpt2Button.addEventListener("click", correctAnswer2);
  quizOpt3Button.addEventListener("click", wrongAnswer2);
  quizOpt4Button.addEventListener("click", wrongAnswer2);
};

var wrongAnswer2 = function () {
    console.log("Wrong!");
    renderWrong();
    subtractTen();
    questionThree();
  };

  var correctAnswer2 = function () {
    console.log("Correct!");
    renderCorrect();
    questionThree();
  };

var questionThree = function () {
  questionEl.textContent = "Arrays in javascript can be used to store:";
  quizOpt1Button.textContent = "1. Numbers and strings";
  quizOpt2Button.textContent = "2. Other arrays";
  quizOpt3Button.textContent = "3. Booleans";
  quizOpt4Button.textContent = "4. All of the Above";

  quizOpt1Button.addEventListener("click", wrongAnswer3);
  quizOpt2Button.addEventListener("click", wrongAnswer3);
  quizOpt3Button.addEventListener("click", wrongAnswer3);
  quizOpt4Button.addEventListener("click", correctAnswer3);
};

var wrongAnswer3 = function () {
    console.log("Wrong!");
    renderWrong();
    subtractTen();
    questionFour();
  };

  var correctAnswer3 = function () {
    console.log("Correct!");
    renderCorrect();
    questionFour();
  };

var questionFour = function () {
  questionEl.textContent =
    "String values must be enclosed within _ when assigning to variables";
  quizOpt1Button.textContent = "1. Commas";
  quizOpt2Button.textContent = "2. Curly brackets";
  quizOpt3Button.textContent = "3. Quotes";
  quizOpt4Button.textContent = "4. Parentheses";

  quizOpt1Button.addEventListener("click", wrongAnswer4);
  quizOpt2Button.addEventListener("click", wrongAnswer4);
  quizOpt3Button.addEventListener("click", correctAnswer4);
  quizOpt4Button.addEventListener("click", wrongAnswer4);
};

var wrongAnswer4 = function () {
    console.log("Wrong!");
    renderWrong();
    subtractTen();
    questionFive();
  };

  var correctAnswer4 = function () {
    console.log("Correct!");
    renderCorrect();
    questionFive();
  };

var questionFive = function () {
  questionEl.textContent =
    "A very useful tool during development and debugging for printed content to the debugger is:";
  quizOpt1Button.textContent = "1. Javascript";
  quizOpt2Button.textContent = "2. Terminal/bash";
  quizOpt3Button.textContent = "3. For loops";
  quizOpt4Button.textContent = "4. Console.log";

  quizOpt1Button.addEventListener("click", wrongAnswer5);
  quizOpt2Button.addEventListener("click", wrongAnswer5);
  quizOpt3Button.addEventListener("click", wrongAnswer5);
  quizOpt4Button.addEventListener("click", correctAnswer5);
};

var wrongAnswer5 = function () {
    console.log("Wrong!");
    renderWrong();
    subtractTen();
    endQuiz();
  };

  var correctAnswer5 = function () {
    console.log("Correct!");
    renderCorrect();
    endQuiz();
  };

//End Quiz when time runs out
// ******** NOT WORKING ********
var endQuiz = function () {
  // Enter High Scores
  questionEl.textContent ="All Done!";

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
// To highScoreInput the clock when user reaches the end of the questions.
function stopClock() {
  var saveTime = timeLeft;
  savedTime.push(saveTime); //save this time to storage
  timeLeft = 0;
  console.log(saveTime);
}

startPage = function () {
  location.reload();
};

// console.log(savedTime);

// Want countdown to start, and the questions to start as well.  Need to put inside countdown function?
startButtonEl.addEventListener("click", countdown);
