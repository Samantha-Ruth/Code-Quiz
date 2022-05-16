// TO ATTACH AN EVENT LISTENER WITH PLAIN, OL' JAVASCRIPT:

// When User Clicks Start Button: 
var startButtonEl = document.querySelector("#quiz-start");
startButtonEl.addEventListener("click", function() {
    // Timer Elements
var timerEl = document.getElementById('countdown');

// Starts a Timer that counts down from 30
var timeLeft = 30;
var savedTime = [];

function countdown() {
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
 }
countdown();
    //End Quiz when time runs out
function endQuiz () {
        var newQuestionEl = document.querySelector("#quiz-question")
        newQuestionEl.textContent = "All Done!"
        // Enter High Scores
        var newQuestionEl = document.querySelector("#quiz-question")
        newQuestionEl.textContent = "All Done!"
        var highScoresForm = createElement("form");
        highScoresForm.innerHTML = "<label for='name'>Enter your initials:</label><input type='text'name='initials'id='initials'class='form-input'/><button type='submit'>Submit</button>";
        newQuestionEl.appendChild(highScoresForm);

        scores[i].setAttribute("", scoreIdCounter)
        // Save High Scores
        var scores = [];
        var highScoresObj = {name: highScoreInput, score: savedTime};
        scoresObj.id=scoreIdCounter
        scores.push(highScoresObj);
        // save tasks to localStorage
        savedScores();
        // increase task counter for next unique score id
        scoreIdCounter++;

        var savedScores = function() {
            localStorage.setItem("scores", JSON.stringify(scores));
        }

        // Print High Scores
        var loadScores = function() {
            // assign score variable
            var savedScores = localStorage.getItem("scores");
            // if scores = null set scores back to an empty array
            if (!savedScores) {
                return false}
            }
        // retrieve scores from local storage
        scores = JSON.parse(scores);

        //print items to page
        var newQuestionEl = document.querySelector("#quiz-question")
        newQuestionEl.textContent = ""
        var printHighScoresEl = createElement("ol");
        var printHighScoresListEl = createElement("li");
        printHighScoresListEl.setAttribute("class=print-high-scores");
        scores[i].setAttribute(loadScores,scoreIdCounter);
        newQuestionEl.appendChild(printHighScoresEl);
        printHighScoresEl.appendChild(printHighScoresListEl);
        var resetReturnButtonsEl = createElement("div");
        resetReturnButtonsEl.getAttribute("class=high-scores");
        resetReturnButtonsEl.innerHTML("<button>Go Back</button><button type='reset'>Clear High Scores</button>");
    }
newAnswer1AEl.innerHTML = "<button id='answer-one-a answer'>1. Strings</button>"
// Append new ordered list (#quiz-answers) and list with button (.quiz-answer-option) to the div
newQuestionEl.appendChild(newAnswer1AEl);
    
    // To decrease time by 10 seconds with a wrong answer 
    function subtractTen() {
        timeLeft= (timeLeft- 10);
    }

    // To stop the clock when user reaches the end of the questions. 
    function stopClock() {
            var saveTime = timeLeft; 
            savedTime.push(saveTime);//save this time to storage
            timeLeft = 0;
            console.log(saveTime);
        }
        console.log(savedTime);
 
// ** Start of quiz ** 
    // find quiz intro
    var quizQuestionsEl = document.querySelector(".quiz-topper");
    var quizIntroEl = document.querySelector(".intro")
    // add an id to each new element? then can delete it in the future? 
    // create new header
    var newQuestionEl = document.createElement("h1");
    newQuestionEl.textContent = "Commonly used datatypes do NOT include:";
    newQuestionEl.setAttribute("id", "quiz-question");
    quizQuestionsEl.appendChild(newQuestionEl);
    // remove old header/intro
    quizIntroEl.remove();

    // Target Intro paragraph and Start Button
    var startingParagraphEl = document.querySelector(".quiz-body");
    // remove paragraph
    startingParagraphEl.remove(); 
    var startButtonEl = document.querySelector(".quiz-start");
    // Remove Start Button
    startButtonEl.remove();

// Target quiz area. Add an ordered list.
    var quizAnswers1El = document.querySelector("#quiz-answer-wrapper");
    var newQuestionEl = document.createElement("ol");
    newQuestionEl.setAttribute("id", "quiz-answers");
    newQuestionEl.setAttribute("class", "quiz-answers");
    quizAnswers1El.appendChild(newQuestionEl);

// Add List Element to Ordered List, with buttons inside each list element
    var newAnswer1AEl = document.createElement("li");
    newAnswer1AEl.setAttribute("class", "quiz-answer-option")
    newAnswer1AEl.innerHTML = "<button id='answer-one-a answer'>1. Strings</button>"
    // Append new ordered list (#quiz-answers) and list with button (.quiz-answer-option) to the div
    newQuestionEl.appendChild(newAnswer1AEl);
        //Second Answer
    var quizAnswer1BEl = document.querySelector("#quiz-answers");
    var newAnswer1BEl = document.createElement("li");
    newAnswer1BEl.setAttribute("class", "quiz-answer-option");
    newAnswer1BEl.innerHTML = "<button id='answer-one-b answer'>2. Booleans</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswer1BEl.appendChild(newAnswer1BEl);
        //Third Answer
    var quizAnswer1CEl = document.querySelector("#quiz-answers");
    var newAnswer1CEl = document.createElement("li");
    newAnswer1CEl.setAttribute("class", "quiz-answer-option");
    newAnswer1CEl.innerHTML = "<button id='answer-one-c answer'>3. Alerts</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswer1CEl.appendChild(newAnswer1CEl);
        //Fourth Answer
    var quizAnswer1DEl = document.querySelector("#quiz-answers");
    var newAnswer1DEl = document.createElement("li");
    newAnswer1DEl.setAttribute("class", "quiz-answer-option");
    newAnswer1DEl.innerHTML = "<button id='answer-one-d answer'>4. Numbers</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswer1DEl.appendChild(newAnswer1DEl);


    // Put listener on Answer Buttons and replace with new question and answer options
    var selectedAnswer1AEl = document.querySelector("#answer-one-a");
    var correctAnswer1BEl = document.querySelector("#answer-one-b");
    var correctAnswer1CEl = document.querySelector("#answer-one-c");
    var correctAnswer1DEl = document.querySelector("#answer-one-d");

    if (correctAnswer1AEl.addEventListener("click", function() {
    console.log("Wrong!");
    newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
    newQuestionEl.setAttribute("id", "quiz-question");
    newQuestionEl.setAttribute("class", "quiz-answer-option")
    newQuestionEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
    newAnswer1BEl.setAttribute("class", "quiz-answer-option");
    newAnswer1BEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    newAnswer1CEl.setAttribute("class", "quiz-answer-option");
    newAnswer1CEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
    newAnswer1DEl.setAttribute("class", "quiz-answer-option");
    newAnswer1DEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
    }));
});
//     if (correctAnswer1BEl.addEventListener("click", function() {
//         console.log("Wrong!");
//         newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
//         newQuestionEl.setAttribute("id", "quiz-question");
//         newQuestionEl.setAttribute("class", "quiz-answer-option")
//         newQuestionEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
//         newAnswer1BEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1BEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
//         newAnswer1CEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1CEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
//         newAnswer1DEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1DEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
//         }));
//     if (correctAnswer1CEl.addEventListener("click", function() {
//         console.log("Correct!");
//         newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
//         newQuestionEl.setAttribute("id", "quiz-question");
//         newQuestionEl.setAttribute("class", "quiz-answer-option")
//         newQuestionEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
//         newAnswer1BEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1BEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
//         newAnswer1CEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1CEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
//         newAnswer1DEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1DEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
//         }));
//     if (correctAnswer1DEl.addEventListener("click", function() {
//         console.log("Wrong!");
//         newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
//         newQuestionEl.setAttribute("id", "quiz-question");
//         newQuestionEl.setAttribute("class", "quiz-answer-option")
//         newQuestionEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
//         newAnswer1BEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1BEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
//         newAnswer1CEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1CEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
//         newAnswer1DEl.setAttribute("class", "quiz-answer-option");
//         newAnswer1DEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
//         }));

// //     // Boolean, but not true or false based on click. 

//         //Illuminate "Wrong"
//         // Replace quiz question and answers with new ones. 
//           // Subtract 10 seconds from timer
//     var correctAnswer1AEl = document.querySelector("#answer-one")
//           // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
//     correctAnswer1AEl.addEventListener("click", function() {
//         console.log("Answer A was Clicked!");
//           console.log(correctAnswer1AEl)
//       })

    
//     var correctAnswer1BEl = document.querySelector("#answer-two")
//     // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
//     correctAnswer1BEl.addEventListener("click", function() {
//         console.log("Answer B was Clicked!");
//         console.log(correctAnswer1BEl)
//     })      //Illuminate "Wrong"
//     // Replace quiz question and answers with new ones. 
//     // Subtract 10 seconds from timer


//     var correctAnswer1CEl = document.querySelector("#answer-three")
// // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
//     correctAnswer1CEl.addEventListener("click", function() {
//     console.log("Answer C was Clicked!");
//     })      //Illuminate "Correct"
//     // Replace quiz question and answers with new ones. 



//     var correctAnswer1DEl = document.querySelector("#answer-four")
//     // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
//     correctAnswer1DEl.addEventListener("click", function() {
//         console.log("Answer D was Clicked!");

//     })       //Illuminate "Wrong"
    // Replace quiz question and answers with new ones. 
    // Subtract 10 seconds from timer

    // // ***** THIRD QUIZ QUESTION ***********
    //     // QUESTION 3: Arrays in javascript can be used to store
    //     //1. numbers and strings 2.other arrays 3. booleans 4. all of the above
    // var correctAnswer1AEl = document.querySelector("#answer-one")

    // if (correctAnswer1AEl.addEventListener("click", function() {
    // console.log("Wrong!");
    // newQuestionEl.textContent = "Arrays in javascript can be used to store  ____.";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. numbers and strings</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2.other arrays</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. booleans</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. all of the above</button>"
     
    // }));
    
    // var correctAnswer1BEl = document.querySelector("#answer-two")

    // if (correctAnswer1BEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "Arrays in javascript can be used to store ____.";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. numbers and strings</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2.other arrays</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. booleans</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. all of the above</button>"
         
    //     }));
    
    // var correctAnswer1CEl = document.querySelector("#answer-three")

    // if (correctAnswer1CEl.addEventListener("click", function() {
    //     console.log("Correct!");

    // newQuestionEl.textContent = "Arrays in javascript can be used to store ____.";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. numbers and strings</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2.other arrays</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. booleans</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. all of the above</button>"
         
    //     }));
    
    //     var correctAnswer1DEl = document.querySelector("#answer-four")

    // if (correctAnswer1DEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "Arrays in javascript can be used to store ____.";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. numbers and strings</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2.other arrays</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. booleans</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. all of the above</button>"
         
    // }));

    // // ***** FOURTH QUIZ QUESTION ***********
    // //String values must be enclosed within _ when assigning to variables.
    // // 1. commas 2. curly brackets 3. quotes 4. parentheses

    // var correctAnswer1AEl = document.querySelector("#answer-one")

    // if (correctAnswer1AEl.addEventListener("click", function() {
    // console.log("Wrong!");
    // newQuestionEl.textContent = "String values must be enclosed within _ when assigning to variables.";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. commas</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. quotes</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
     
    // }));
    
    // var correctAnswer1BEl = document.querySelector("#answer-two")

    // if (correctAnswer1BEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "String values must be enclosed within _ when assigning to variables.";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. commas</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. quotes</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
    //     }));
    
    // var correctAnswer1CEl = document.querySelector("#answer-three")

    // if (correctAnswer1CEl.addEventListener("click", function() {
    //     console.log("Correct!");

    // newQuestionEl.textContent = "String values must be enclosed within _ when assigning to variables.";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. commas</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. quotes</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
    //     }));
    
    //     var correctAnswer1DEl = document.querySelector("#answer-four")

    // if (correctAnswer1DEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "String values must be enclosed within _ when assigning to variables.";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. commas</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. quotes</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
    // }));



    // ***** FIFTH QUIZ QUESTION ***********
    // A very useful tool during development and debugging for printed content to the debugger is:   
    // 1. javascript 2. terminal/bash 3. for loops 4. console.log

    // var correctAnswer1AEl = document.querySelector("#answer-one")

    // if (correctAnswer1AEl.addEventListener("click", function() {
    // console.log("Wrong!");
    // newQuestionEl.textContent = "A very useful tool during development and debugging for printed content to the debugger is:";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. javascript</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2. terminal/bash</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. for loops</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. console.log</button>"
     
    // }));
    
    // var correctAnswer1BEl = document.querySelector("#answer-two")

    // if (correctAnswer1BEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "A very useful tool during development and debugging for printed content to the debugger is:";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. javascript</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2. terminal/bash</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. for loops</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. console.log</button>"
         
    //     }));
    
    // var correctAnswer1CEl = document.querySelector("#answer-three")

    // if (correctAnswer1CEl.addEventListener("click", function() {
    //     console.log("Correct!");

    // newQuestionEl.textContent = "A very useful tool during development and debugging for printed content to the debugger is:";
    // newQuestionEl.setAttribute("id", "quiz-question");
    // newAnswerListEl.setAttribute("class", "quiz-answer-option")
    // newAnswerListEl.innerHTML = "<button id='answer-one'>1. javascript</button>"
    // newAnswerBEl.setAttribute("class", "quiz-answer-option");
    // newAnswerBEl.innerHTML = "<button id='answer-two'>2. terminal/bash</button>"
    // newAnswerCEl.setAttribute("class", "quiz-answer-option");
    // newAnswerCEl.innerHTML = "<button id='answer-three'>3. for loops</button>"
    // newAnswerDEl.setAttribute("class", "quiz-answer-option");
    // newAnswerDEl.innerHTML = "<button id='answer-four'>4. console.log</button>"
         
    //     }));
    
    //     var correctAnswer1DEl = document.querySelector("#answer-four")

    // if (correctAnswer1DEl.addEventListener("click", function() {
    //     console.log("Wrong!");
    //     newQuestionEl.textContent = "A very useful tool during development and debugging for printed content to the debugger is:";
    //     newQuestionEl.setAttribute("id", "quiz-question");
    //     newAnswerListEl.setAttribute("class", "quiz-answer-option")
    //     newAnswerListEl.innerHTML = "<button id='answer-one'>1. javascript</button>"
    //     newAnswerBEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerBEl.innerHTML = "<button id='answer-two'>2. terminal/bash</button>"
    //     newAnswerCEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerCEl.innerHTML = "<button id='answer-three'>3. for loops</button>"
    //     newAnswerDEl.setAttribute("class", "quiz-answer-option");
    //     newAnswerDEl.innerHTML = "<button id='answer-four'>4. console.log</button>"
         
//     }));

