var startButtonEl = document.querySelector('#quiz-start');
var qualifierEl = document.querySelector("#section");
var correctnessEl = document.querySelector("#correctness");
var correctnessHeaderEl = document.createElement("h2");
var viewScoresButtonEl = document.querySelector("#score-button");
var viewScoreEl = document.createElement("div");
var closingContainerEl = document.createElement("div");

var timerEl = document.querySelector("#countdown");
var timeLeft = 30;
var scoreIdCounter = 0;
var savedTime = [];
var scores = [];


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

// CREATES DIV TO WRAP ANSWERS
var quizAnswerWrapperEl = document.createElement("div");
quizAnswerWrapperEl.setAttribute("id", "quiz-answer-wrapper");
quizAnswerWrapperEl.className = "quiz-answer-wrapper";

// CREATES NEW UNORDERED LIST
var quizAnswersEl = document.createElement("ul");
questionEl.setAttribute("id", "quiz-question");
quizAnswersEl.className = "quiz-answers";

// CREATE BUTTONS FOR ANSWERS
var quizOpt1Button = document.createElement("button");
var quizOpt2Button = document.createElement("button");
var quizOpt3Button = document.createElement("button");
var quizOpt4Button = document.createElement("button");
var qualifierEl = document.querySelector("#section");

var countdown = function () {
    // use the setInterval() method to execute function every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "" + "Time's Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
    startQuiz();
}

// Question 1
var startQuiz = function () {
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

//Question 2
var renderQuestion2 = function (event) {

    console.log(event.target.id);
    if (event.target.id === 'wrong') {
        renderWrong()
    } else {
        renderCorrect()
    }

    questionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
    quizOpt1Button.textContent = "1. Quotes";
    quizOpt1Button.setAttribute("id", "wrong");
    quizOpt2Button.textContent = "2. Curly Brackets";
    quizOpt2Button.setAttribute("id", "correct");
    quizOpt3Button.textContent = "3. Square Brackets";
    quizOpt3Button.setAttribute("id", "wrong");
    quizOpt4Button.textContent = "4. Parentheses";
    quizOpt4Button.setAttribute("id", "wrong");

    // if click on b, render correct.  Else, render wrong
    quizAnswersEl.removeEventListener("click", renderQuestion2);
    quizAnswersEl.addEventListener("click", renderQuestion3);
};

// Question 3
var renderQuestion3 = function (event) {
    console.log(event.target.id);
    if (event.target.id === 'correct') {
        renderCorrect()
    } else {
        renderWrong()
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
    if (event.target.id === 'wrong') {
        renderWrong()
    } else {
        renderCorrect()
    }
    questionEl.textContent = "String values must be enclosed within _ when assigning to variables.";
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
    if (event.target.id === 'wrong') {
        renderWrong()
    } else {
        renderCorrect()
    }

    questionEl.textContent = "A very useful tool during development and debugging for printed content to the debugger is:";
    quizOpt1Button.textContent = "1. Javascript";
    quizOpt1Button.setAttribute("id", "wrong");
    quizOpt2Button.textContent = "2. Terminal/Bash";
    quizOpt2Button.setAttribute("id", "wrong");
    quizOpt3Button.textContent = "3. For Loops";
    quizOpt3Button.setAttribute("id", "wrong");
    quizOpt4Button.textContent = "4. Console.log";
    quizOpt4Button.setAttribute("id", "correct");


    // if click on b, render correct.  Else, render wrong
    quizAnswersEl.removeEventListener("click", renderQuestion5);
    quizAnswersEl.addEventListener("click", endQuiz);
};

// To decrease time by 10 seconds with a wrong answer
var subtractTen = function () {
    timeLeft = timeLeft - 10;
  }  

var renderWrong = function () {
    subtractTen();
    correctnessEl.textContent = "Wrong!";
    qualifierEl.appendChild(correctnessEl);
  };

var renderCorrect = function () {
    correctnessEl.textContent = "Correct!";
    qualifierEl.appendChild(correctnessEl);
  };

var stopClock = function () {
    var saveTime = timeLeft;
    savedTime.push(saveTime); //save this time to storage
    timeLeft = 0;
    console.log(saveTime);
  }

var endQuiz = function (event) {
    stopClock();

    // Clear the screen except "All Done!"
    questionEl.textContent = "All done!";
    quizAnswersEl.remove();
    correctnessEl.remove();

    // Add Comment and final score
    var closingCommentEl = document.createElement("p");
    closingCommentEl.className = ("closing-message");
    closingCommentEl.innerHTML = "Your final score is " + savedTime + ".";
    questionEl.appendChild(closingContainerEl);
    closingContainerEl.appendChild(closingCommentEl);

    // Enter Initials and High Scores
    highScore();
    }


var highScore = function() {
    var highScoresFormEl = document.createElement("form");
    highScoresFormEl.innerHTML =
      "<label form='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button type='submit'>Submit</button>";
    questionEl.appendChild(highScoresFormEl);

    highScoresFormEl.addEventListener("submit", saveScores);
 }

var saveScores = function (event) {
      event.preventDefault();
      var initialInput = document.querySelector("input[class='form-input']").value;
      var scoreObj = { initial: initialInput, time: savedTime, };
      scoreObj.id = scoreIdCounter;
      scores.push(scoreObj);
      localStorage.setItem("scores", JSON.stringify(scores));
      viewScore(scoreObj);
      console.log(scoreObj);
    }

    // LOADING SCORES IS NOT WORKING; ALSO PROBLEMS WITH VIEW HIGH SCORES BUTTON
var loadScore = function () {
    var savedScore = localStorage.getItem("scores");
    if (!savedScore) {
        return false;
    }
    savedScore = JSON.parse(savedScore);
    
    for (var i = 0; i < savedScore.length; i++) {
        viewScore(savedScore[i]);
    }
    }

var viewScore = function (scoreObj) {

    // document.getElementById("view-score").disabled = true;
    questionEl.replaceWith(viewScoreEl);
    quizAnswersEl.remove();
    correctnessEl.remove();
    
    
    var viewScoreHeader = document.createElement("h1");
    viewScoreHeader.textContent = "View High Scores";
    viewScoreEl.appendChild(viewScoreHeader);
    
    var viewScoreList = document.createElement("ul");
    viewScoreList.className = ("view-score-list");
    
    listItem = document.createElement("li");
    listItem.innerHTML = scoreObj.initial + ": " + scoreObj.time;
    viewScoreList.appendChild(listItem);
    
    viewScoreHeader.appendChild(viewScoreList);
    
    var goBack = document.createElement("button");
    goBack.className = ("btn");
    goBack.textContent = "Go back";
    viewScoreList.appendChild(goBack);
    
    
    goBack.addEventListener("click", startPage);
    }

    startPage = function () {
        location.reload();
    }

viewScoresButtonEl.addEventListener("click", loadScore);
startButtonEl.addEventListener("click", countdown);
    


//  Enter initials and score
    //a. List stored on the DOM and accessed through a button
        // SAVING IS NOT WORKING, NEITHER IS RECALL
    //b. have ability to clear high scores









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
    //c. have ability to "go back"? 