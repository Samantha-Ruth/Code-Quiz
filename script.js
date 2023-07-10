// Quiz Elements
var quizWrapperDiv = document.querySelector(".quiz-wrapper");
var quizIntroEl = document.querySelector(".intro");
var quizStartButtonEl = document.querySelector("#quiz-start");
var questionEl = document.createElement("h1");
var quizAnswerWrapperEl = document.createElement("div");
quizAnswerWrapperEl.setAttribute("id", "quiz-answer-wrapper");
quizAnswerWrapperEl.className = "quiz-answer-wrapper";
var quizAnswersEl = document.createElement("ul");
questionEl.setAttribute("id", "heading");
quizAnswersEl.className = "quiz-answers";
var qualifierEl = document.querySelector("#section");
var correctnessEl = document.querySelector("#correctness");
var closingContainerEl = document.createElement("div");

// Time Elements
var savedTime = [];
var timeInterval;
var timeLeft = 30;
var timerEl = document.querySelector("#countdown");

// High Score Elements
var viewHighScoresButtonEl = document.querySelector("#score-button");
var highScoreHeaderEl = document.createElement("div");
var highScores = [];

// CREATE BUTTONS FOR ANSWERS
var quizOpt1Button = document.createElement("button");
var quizOpt2Button = document.createElement("button");
var quizOpt3Button = document.createElement("button");
var quizOpt4Button = document.createElement("button");

// Question 1
var startQuiz = function () {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;
    } else {
      timerEl.textContent = "" + "Time's Up!";
      clearInterval(timeInterval);
      timeLeft = 0;
      endQuiz();
    }
  }, 1000);

  questionEl.textContent = "Commonly used datatypes do NOT include:";
  quizAnswerWrapperEl.appendChild(questionEl);

  quizOpt1Button.textContent = "1. Strings";
  quizOpt1Button.setAttribute("id", "wrong");
  quizAnswersEl.appendChild(quizOpt1Button);

  quizOpt2Button.textContent = "2. Boolean";
  quizOpt2Button.setAttribute("id", "wrong");
  quizAnswersEl.appendChild(quizOpt2Button);

  quizOpt3Button.textContent = "3. Alerts";
  quizOpt3Button.setAttribute("id", "correct");
  quizAnswersEl.appendChild(quizOpt3Button);

  quizOpt4Button.textContent = "4. Numbers";
  quizOpt4Button.setAttribute("id", "wrong");
  quizAnswersEl.appendChild(quizOpt4Button);

  quizAnswerWrapperEl.appendChild(quizAnswersEl);
  quizWrapperDiv.replaceWith(quizAnswerWrapperEl);

  // if click on b, render correct.  Else, render wrong
  quizAnswersEl.addEventListener("click", renderQuestion2);
};

// Question 2
var renderQuestion2 = function (event) {
  console.log(event.target.id);
  if (event.target.id === "wrong") {
    renderWrong();
  } else {
    renderCorrect();
  }

  questionEl.textContent =
    "The condition in an 'if/then' statement is enclosed with:";
  quizOpt1Button.textContent = "1. Quotes";
  quizOpt1Button.setAttribute("id", "wrong");
  quizOpt2Button.textContent = "2. Curly Brackets";
  quizOpt2Button.setAttribute("id", "wrong");
  quizOpt3Button.textContent = "3. Square Brackets";
  quizOpt3Button.setAttribute("id", "wrong");
  quizOpt4Button.textContent = "4. Parentheses";
  quizOpt4Button.setAttribute("id", "correct");

  // if click on b, render correct.  Else, render wrong
  quizAnswersEl.removeEventListener("click", renderQuestion2);
  quizAnswersEl.addEventListener("click", renderQuestion3);
};

// Question 3
var renderQuestion3 = function (event) {
  console.log(event.target.id);
  if (event.target.id === "correct") {
    renderCorrect();
  } else {
    renderWrong();
  }
  questionEl.textContent = "Arrays in javascript can be used to store  ____.";
  quizOpt1Button.textContent = "1. Numbers and Strings";
  quizOpt1Button.setAttribute("id", "wrong");
  quizOpt2Button.textContent = "2. Other Arrays";
  quizOpt2Button.setAttribute("id", "wrong");
  quizOpt3Button.textContent = "3. Booleans";
  quizOpt3Button.setAttribute("id", "wrong");
  quizOpt4Button.textContent = "4. All of the Above";
  quizOpt4Button.setAttribute("id", "correct");

  // if click on b, render correct.  Else, render wrong
  quizAnswersEl.removeEventListener("click", renderQuestion3);
  quizAnswersEl.addEventListener("click", renderQuestion4);
};

// Question 4
var renderQuestion4 = function (event) {
  console.log(event.target.id);
  if (event.target.id === "wrong") {
    renderWrong();
  } else {
    renderCorrect();
  }
  questionEl.textContent =
    "String values must be enclosed within _ when assigning to variables.";
  quizOpt1Button.textContent = "1. Commas";
  quizOpt1Button.setAttribute("id", "wrong");
  quizOpt2Button.textContent = "2. Curly Brackets";
  quizOpt2Button.setAttribute("id", "wrong");
  quizOpt3Button.textContent = "3. Quotes";
  quizOpt3Button.setAttribute("id", "correct");
  quizOpt4Button.textContent = "4. Parentheses";
  quizOpt4Button.setAttribute("id", "wrong");

  // if click on b, render correct.  Else, render wrong
  quizAnswersEl.removeEventListener("click", renderQuestion4);
  quizAnswersEl.addEventListener("click", renderQuestion5);
};

var renderQuestion5 = function (event) {
  console.log(event.target.id);
  if (event.target.id === "wrong") {
    renderWrong();
  } else {
    renderCorrect();
  }

  questionEl.textContent =
    "A very useful tool during development and debugging for printed content to the debugger is:";
  quizOpt1Button.textContent = "1. Javascript";
  quizOpt1Button.setAttribute("id", "wrong");
  quizOpt2Button.textContent = "2. Terminal/Bash";
  quizOpt2Button.setAttribute("id", "wrong");
  quizOpt3Button.textContent = "3. For Loops";
  quizOpt3Button.setAttribute("id", "wrong");
  quizOpt4Button.textContent = "4. Console.log";
  quizOpt4Button.setAttribute("id", "correct");

  // remove click listener to render question 5, and instead start endQuiz
  quizAnswersEl.removeEventListener("click", renderQuestion5);
  quizAnswersEl.addEventListener("click", endQuiz);
};

// To decrease time by 10 seconds with a wrong answer
var subtractTen = function () {
  timeLeft = timeLeft - 10;
};

var renderWrong = function () {
  subtractTen();
  correctnessEl.textContent = "Wrong!";
  qualifierEl.appendChild(correctnessEl);
};

var renderCorrect = function () {
  correctnessEl.textContent = "Correct!";
  qualifierEl.appendChild(correctnessEl);
};

// -----------------------------------------------------
// STARTQUIZ() and COUNTDOWN() ARE THE SAME? Should I use this one instead?

// var countdown = function () {
//   // use the setInterval() method to execute function every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerEl.textContent = "Time: " + timeLeft;
//       timeLeft--;
//     } else {
//       timerEl.textContent = "" + "Time's Up!";
//       clearInterval(timeInterval);
//       timeLeft = 0;
//       endQuiz();
//     }
//   }, 1000);
//   startQuiz();
// };
// --------------------------------------------------------

// not really clearing the interval when called... Put into End Quiz
// var stopClock = function () {
//   if (timeLeft < 0) {
//     timeLeft = 0;
//   }
//   var saveTime = timeLeft;
//   savedTime.push(saveTime); //save this time to storage
//   clearInterval(timeInterval);
//   console.log("cleared the interval!")
// };

// var stopClock = function() {
//     console.log(timeLeft);
//   if (timeLeft < 0) {
//     timeLeft = 0;
//   }

//   // Turn of timer if active 
//   // in order to stop the clock, need to clear the interval with the id of the interval we want to stop, which is timeInterval (I believe)
//   if (timeInterval) {
//     clearInterval(timeInterval)
//   }
  
//   var saveTime = timeLeft;
//   console.log(saveTime);
//   savedTime.push(saveTime); //save this time to storage
//   console.log(savedTime);
//   clearInterval(timeInterval);
//   console.log(timeInterval); // undefined
// }
var endQuiz = function () {
  // stop the clock  This isn't working!
//   stopClock();
clearInterval(timeInterval);

  // Clear the screen except "All Done!"
  questionEl.textContent = "All done!";
  quizAnswersEl.remove();
  correctnessEl.remove();

  // Add Comment and final score
  var closingCommentEl = document.createElement("p");
  closingCommentEl.className = "closing-message";
  closingCommentEl.innerHTML = "Your final score is " + timeLeft + ".";
  questionEl.appendChild(closingContainerEl);
  closingContainerEl.appendChild(closingCommentEl);

  // Enter Initials and High Scores
  var enterHighScoresFormEl = document.createElement("form");
  enterHighScoresFormEl.setAttribute("id", "form");
  enterHighScoresFormEl.innerHTML =
    "<label form='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button>Submit</button>";
  questionEl.appendChild(enterHighScoresFormEl);
  enterHighScoresFormEl.addEventListener("submit", quizFormHandler);
};

var quizFormHandler = function(event) {
  // Prevent page refresh
  event.preventDefault();

  // Load initials
  var quizInitials = document.querySelector("input[name='initials']").value;
  if (quizInitials === "")
      return false;

  // Make score object
  var thisScore = {
      score: timeLeft,
      initials: quizInitials
  };

  // Store score object in array of high scores
  highScores.push(thisScore);
  // Store high scores in local storage to persist through page reloads
  localStorage.setItem("high-scores",JSON.stringify(highScores));
  console.log(highScores);

  // Update and advance to high scores display
  showHighScores();
}

// Load high scores from local persistent storage
var loadScores = function () {
  highScores = localStorage.getItem("high-scores", highScores);
  if (!highScores) {
    highScores = [];
    return false;
  }
  highScores = JSON.parse(highScores);
  console.log(highScores);
};
// showHighScores formats the view of the high scores
var showHighScores = function () {
  loadScores();

  quizIntroEl.replaceWith(highScoreHeaderEl);
  questionEl.replaceWith(highScoreHeaderEl);
  quizAnswersEl.remove();
  correctnessEl.remove();


  var loadScoreHeader = document.createElement("h1");
  loadScoreHeader.textContent = "High Scores";
  highScoreHeaderEl.appendChild(loadScoreHeader);

  quizStartButtonEl.remove();

  var loadScoreList = document.createElement("ul");
  loadScoreList.className = "view-score-list";
  loadScoreHeader.appendChild(loadScoreList);
  
  // Sort high scores in descending order
  highScores.sort((a, b) => (a.score < b.score) ? 1 : -1);

  for (var i = 0; i < highScores.length; i++) {
    listItemEl = document.createElement("li");
    listItemEl.innerHTML = highScores[i].initials + ": " + highScores[i].score;
    loadScoreList.appendChild(listItemEl);
  }

  var goBack = document.createElement("button");
  goBack.className = "btn";
  goBack.textContent = "Go back";
  goBack.setAttribute("id", "go-back");
  viewHighScoresButtonEl.replaceWith(goBack);

  var clearScoresButton = document.createElement("button");
  clearScoresButton.className = "btn";
  clearScoresButton.textContent = "Clear HighScores";
  loadScoreList.appendChild(clearScoresButton);

  goBack.addEventListener("click", startPage);
  clearScoresButton.addEventListener("click", clearScores);

  // Hide Timer
  timerEl.style.display = "none";
};

var clearScores = function () {
  highScores = [];
  // Store empty array in local storage
  localStorage.setItem("high-scores",JSON.stringify(highScores));
  // Update view
  showHighScores();
  // localStorage.clear();
  
  location.reload();
}

var startPage = function () {
  location.reload();

  // clickOnHighScores();
};

// var highScoreList = function () {
//   // maybe save this under viewHighScore Button clicked?
//   console.log("high score button clicked!");
//   // introStatementEl.remove();
//   quizStartButtonEl.remove();
//   showHighScores();
// };

// LOADING SCORES IS NOT WORKING; ALSO PROBLEMS WITH VIEW HIGH SCORES BUTTON ON FIRST PAGE (because no data?)
// var loadHighScores = function () {
//   highScores = localStorage.getItem("high-scores", highScores);
//   if (!highScores) {
//     highScores = [];
//     return false;
//   }
//   highScores = JSON.parse(highScores);
// };

viewHighScoresButtonEl.addEventListener("click", showHighScores);
quizStartButtonEl.addEventListener("click", startQuiz);

//  Enter initials and score
//a. List stored on the DOM and accessed through a button
// SAVING IS NOT WORKING, NEITHER IS RECALL
//b. have ability to clear high scores

//saveScores() is working, using localStorage.setItem() method and JSON.stringify
// but it's only saving the current score, not a list of previous scores too... which I want.
//loadScore() is working, maybe? Doesn't respond on first page.
//loadScore has got some issues.  Button on front page doesn't work...

// Focus on one thing: the quiz ONE CODE BLOCK
//1. Click on start and quiz starts
//A. Need a start button.
//B. Need an event listener waiting for a click of the start button.
//C. Need methods that occur after the click of the start button.
//I. countdown()
//a. separate method, counts down by seconds
//II. startQuiz()
//2. Presented with question
//3. Told whether answer is right or wrong
//A. print "wrong" or "correct"
//I. conditional Methods wrongAnswer() or correctAnswer()
//II. wrongAnswer() method includes printing "wrong" and dropping the timer
//III. both methods continue the questions
//4. Presented with new question
//3. End of Quiz. - needs to be it's own function because it can be invoked multiple ways
//A. End of timer
//B. End of questions
//C. Enter initials

// Extra:
//  Enter initials and score
//a. List stored on the DOM and accessed through a button
//b. have ability to clear high scores
// //c. have ability to "go back"
