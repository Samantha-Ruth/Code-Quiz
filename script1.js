var startButtonEl = document.querySelector("#quiz-start");
var timerEl = document.getElementById('countdown');
// Variable starts a Timer that counts down from 30
var timeLeft = 30;
var savedTime = [];

var quizQuestionsEl = document.querySelector(".quiz-topper");
var quizIntroEl = document.querySelector(".intro")
var startingParagraphEl = document.querySelector(".quiz-body");
var newQuestionEl = document.querySelector("#quiz-question");

var listOfQuestions = [];
listOfQuestions[0]="Commonly used datatypes do NOT include:";
listOfQuestions[1]= "The condition in an 'if/then' statement is enclosed with:";
listOfQuestions[2]= "Arrays in javascript can be used to store ____.";
listOfQuestions[3]= "String values must be enclosed within _ when assigning to variables.";
listOfQuestions[4]= "A very useful tool during development and debugging for printed content to the debugger is:";

var listOfAnswers1 = ["The condition in an 'if/then' statement is enclosed with:"];
listOfAnswers1[0] = "1. Strings";
listOfAnswers1[1] = "1. Quotes";
listOfAnswers1[2] = "1. Numbers and strings";
listOfAnswers1[3] = "1. Commas";
listOfAnswers1[4] = "1. Javascript";

var listOfAnswers2 = [];
listOfAnswers2[0] = "2. Booleans";
listOfAnswers2[1] = "2. Curly Brackets";
listOfAnswers2[2] = "2. Other arrays";
listOfAnswers2[3] = "2. Curly brackets";
listOfAnswers2[4] = "2. Terminal/bash";

var listOfAnswers3 = [];
listOfAnswers3[0] = "3. Alerts";
listOfAnswers3[1] = "3. Square Brackets";
listOfAnswers3[2] = "3. Booleans";
listOfAnswers3[3] = "3. Quotes";
listOfAnswers3[4] = "3. 'For' loops";

var listOfAnswers4 = [];
listOfAnswers4[0] = "4. Numbers";
listOfAnswers4[1] = "4. Parentheses";
listOfAnswers4[2] = "4. All of the above";
listOfAnswers4[3] = "4. Parentheses";
listOfAnswers4[4] = "4. Console.log";


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
            timerEl.textContent = '' + "Time's Up!";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `endQuiz()` function
            endQuiz();
        }
    }, 1000);
    startQuiz();
}

var startQuiz = function () {
    // remove old header/intro, paragraph, and start button.
    quizIntroEl.remove();
    startingParagraphEl.remove();
    startButtonEl.remove();

    // create new Question
    var newQuestionEl = document.createElement("h1");
    newQuestionEl.setAttribute("id", "quiz-question"); 
    // newQuestionEl.textContent = "";
    for (var i = 0; i < listOfQuestions.length; i++) {
        newQuestionEl.textContent = listOfQuestions[i];
    }
    quizQuestionsEl.appendChild(newQuestionEl);

    // create new answer 1
    var newAnswer1El = document.createElement("li");
    newAnswer1El.setAttribute("class", "quiz-answer-option")
    newAnswer1AEl.innerHTML = "<button id='answer-one-a answer'>"
    for (var i = 0; i < listOfAnswers1.length; i++) {
        newAnswer1El.textContent = listOfAnswers1[i];
    }
    // newAnswer1AEl.textContent = "";
    newQuestionEl.appendChild(newAnswer1El);

    var newAnswer2El = document.createElement("li");
    newAnswer2El.setAttribute("class", "quiz-answer-option")
    newAnswer2El.innerHTML = "<button id='answer-one-a answer'>"
    // newAnswer2El.textContent = "";
    newAnswer1El.appendChild(newAnswer2El);

    var newAnswer3El = document.createElement("li");
    newAnswer3El.setAttribute("class", "quiz-answer-option")
    newAnswer3El.innerHTML = "<button id='answer-one-a answer'>"
    // newAnswer3El.textContent = "";
    newAnswer2El.appendChild(newAnswer3El);

    var newAnswer4El = document.createElement("li");
    newAnswer4El.setAttribute("class", "quiz-answer-option")
    newAnswer4El.innerHTML = "<button id='answer-one-a answer'>"
    // newAnswer4El.textContent = "";
    newAnswer3El.appendChild(newAnswer4El);
}



//End Quiz when time runs out
var endQuiz = function () {
    // Enter High Scores
    newQuestionEl.textContent = "All Done!"
    var highScoresForm = createElement("form");
    highScoresForm.innerHTML = "<label for='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button type='submit'>Submit</button>";
    newQuestionEl.appendChild(highScoresForm);

    scores[i].setAttribute("", scoreIdCounter)
    // Save High Scores
    var scores = [];
    var highScoresObj = { name: highScoreInput, score: savedTime };
    scoresObj.id = scoreIdCounter
    scores.push(highScoresObj);
    // save tasks to localStorage
    savedScores();
    // increase task counter for next unique score id
    scoreIdCounter++;

    var savedScores = function () {
        localStorage.setItem("scores", JSON.stringify(scores));
    }

    // Print High Scores
    var loadScores = function () {
        // assign score variable
        var savedScores = localStorage.getItem("scores");
        // if scores = null set scores back to an empty array
        if (!savedScores) {
            return false
        }
    }
    // retrieve scores from local storage
    scores = JSON.parse(scores);

    //print items to page
    var newQuestionEl = document.querySelector("#quiz-question")
    newQuestionEl.textContent = ""
    var printHighScoresEl = createElement("ol");
    var printHighScoresListEl = createElement("li");
    printHighScoresListEl.setAttribute("class=print-high-scores");
    scores[i].setAttribute(loadScores, scoreIdCounter);
    newQuestionEl.appendChild(printHighScoresEl);
    printHighScoresEl.appendChild(printHighScoresListEl);
    var resetReturnButtonsEl = createElement("div");
    resetReturnButtonsEl.getAttribute("class=high-scores");
    resetReturnButtonsEl.innerHTML("<button>Go Back</button><button type='reset'>Clear High Scores</button>");
}

// To decrease time by 10 seconds with a wrong answer 
function subtractTen() {
    timeLeft = (timeLeft - 10);
}

// *** NEED TO PUT AT END OF QUESTIONS *** //
// To stop the clock when user reaches the end of the questions. 
function stopClock() {
    var saveTime = timeLeft;
    savedTime.push(saveTime);//save this time to storage
    timeLeft = 0;
    console.log(saveTime);
}

console.log(savedTime);

// Want countdown to start, and the questions to start as well.  Need to put inside countdown function? 
startButtonEl.addEventListener("click", countdown);
