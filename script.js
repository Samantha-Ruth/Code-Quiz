// starting from scratch

// But I did like the timer, so maybe I'll keep that aspect.

// First off, what do I need to do? 

// When I click the Start button, then a timer starts and I am presented with a question
// When I answer a question, then I am presented with another quesiton
// When I answer the question incorrectly, time is subtracted from the clock
// When all questions are answered or timer reaches the end, then game is over
// When game is over, can save initials and score.



var startButtonEl = document.querySelector('#quiz-start')
var qualifierEl = document.querySelector("#section");
var correctnessEl = document.querySelector("#correctness")
var correctnessHeaderEl = document.createElement("h2");

var timerEl = document.querySelector("#countdown");
var timeLeft = 30;
var savedTime = [];

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
questionEl.setAttribute("id", "quiz-answers");
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

startButtonEl.addEventListener("click", countdown);

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
    if (event.target.id === 'wrong') {
        renderWrong()
    } else {
        renderCorrect()
    }
    // Enter High Scores
    var doneEl = document.createElement("h2");
    doneEl.setAttribute("class", "done");
    doneEl.textContent = "All Done!";
    correctnessEl.appendChild(doneEl);
    }


var highScore = function() {
    // clear questions
    var highScoresForm = document.createElement("form");
    highScoresForm.innerHTML =
      "<label for='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button type='submit'>Submit</button>";
    qualifierEl.appendChild(highScoresForm);
}
  
var savedScores = function () {
      localStorage.setItem("scores", JSON.stringify(scores));
    }


// Focus on one thing: the quiz ONE CODE BLOCK
    //3. Need to build End of Quiz.
        //A. End of timer
        //B. Clear quiz answers
        //C. Enter initials

// Extra:
//  Enter initials and score
    //a. List stored on the DOM and accessed through a button
    //b. have ability to clear high scores
    //c. have ability to "go back"? 









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