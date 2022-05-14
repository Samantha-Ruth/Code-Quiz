// TO ATTACH AN EVENT LISTENER WITH PLAIN, OL' JAVASCRIPT:

// When User Clicks Start Button: 
var startButtonEl = document.querySelector("#quiz-start");
startButtonEl.addEventListener("click", function() {
    // Timer Elements
var timerEl = document.getElementById('countdown');

// Starts a Timer that counts down from 30
var timeLeft = 30;
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

    // End Quiz when time runs out
    function endQuiz () {
        var newQuestionEl = document.querySelector("#quiz-question")
        newQuestionEl.textContent = "All Done!"
        // remove other text boxes
        //findCorrectElToRemove.remove();  ***  THESE ARENT THE CORRECT ELEMENTS TO REMOVE!  
        newAnswerAEl.remove();
        newAnswerBEl.remove();
        newAnswerCEl.remove();
        newAnswerDEl.remove();
        // Final Score is 
        // Enter initials , input area, submit button
    }
    
    // To decrease time by 10 seconds with a wrong answer 
    function subtractTen() {
        timeLeft= (timeLeft- 10);
    }

    // To stop the clock when user reaches the end of the questions. 
    function stopClock() {
        timeLeft = 0;
    }
 
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

// Target quiz area. Add an ordered list element, then a list element with a button inside.
    var quizAnswerAEl = document.querySelector("#quiz-answer-wrapper");
    var newAnswerAEl = document.createElement("ol");
    newAnswerAEl.setAttribute("id", "quiz-answers");
    newAnswerAEl.setAttribute("class", "quiz-answers");
    var newAnswerListEl = document.createElement("li");
    newAnswerListEl.setAttribute("class", "quiz-answer-option")
    newAnswerListEl.innerHTML = "<button id='answer-one'>1. Strings</button>"
    // Append new ordered list (#quiz-answers) and list with button (.quiz-answer-option) to the div
    quizAnswerAEl.appendChild(newAnswerAEl);
    newAnswerAEl.appendChild(newAnswerListEl);

    var quizAnswerBEl = document.querySelector("#quiz-answers");
    var newAnswerBEl = document.createElement("li");
    newAnswerBEl.setAttribute("class", "quiz-answer-option");
    newAnswerBEl.innerHTML = "<button id='answer-two'>2. Booleans</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswerBEl.appendChild(newAnswerBEl);

    var quizAnswerCEl = document.querySelector("#quiz-answers");
    var newAnswerCEl = document.createElement("li");
    newAnswerCEl.setAttribute("class", "quiz-answer-option");
    newAnswerCEl.innerHTML = "<button id='answer-three'>3. Alerts</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswerCEl.appendChild(newAnswerCEl);

    var quizAnswerDEl = document.querySelector("#quiz-answers");
    var newAnswerDEl = document.createElement("li");
    newAnswerDEl.setAttribute("class", "quiz-answer-option");
    newAnswerDEl.innerHTML = "<button id='answer-four'>4. Numbers</button>"
    // Append new list and button to the ordered list (#quiz-answers)
    quizAnswerDEl.appendChild(newAnswerDEl);


    //String values must be enclosed within _ when assigning to variables.
    // 1. commas 2. curly brackets 3. quotes 4. parentheses
    // A very useful tool during development and debugging for printed content to the debugger is:   
    // 1. javascript 2. terminal/bash 3. for loops 4. console.log

    // Second quiz question Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
    
    
    var correctAnswer1AEl = document.querySelector("#answer-one")

    if (correctAnswer1AEl.addEventListener("click", function() {
    console.log("Wrong!");
    newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
    newQuestionEl.setAttribute("id", "quiz-question");
    newAnswerListEl.setAttribute("class", "quiz-answer-option")
    newAnswerListEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
    newAnswerBEl.setAttribute("class", "quiz-answer-option");
    newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    newAnswerCEl.setAttribute("class", "quiz-answer-option");
    newAnswerCEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
    newAnswerDEl.setAttribute("class", "quiz-answer-option");
    newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
     
    }));
    
    var correctAnswer1BEl = document.querySelector("#answer-two")

    if (correctAnswer1BEl.addEventListener("click", function() {
        console.log("Wrong!");
        newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
        newQuestionEl.setAttribute("id", "quiz-question");
        newAnswerListEl.setAttribute("class", "quiz-answer-option")
        newAnswerListEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
        newAnswerBEl.setAttribute("class", "quiz-answer-option");
        newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
        newAnswerCEl.setAttribute("class", "quiz-answer-option");
        newAnswerCEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
        newAnswerDEl.setAttribute("class", "quiz-answer-option");
        newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
        }));
    
    var correctAnswer1CEl = document.querySelector("#answer-three")

    if (correctAnswer1CEl.addEventListener("click", function() {
        console.log("Correct!");

    newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
    newQuestionEl.setAttribute("id", "quiz-question");
    newAnswerListEl.setAttribute("class", "quiz-answer-option")
    newAnswerListEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
    newAnswerBEl.setAttribute("class", "quiz-answer-option");
    newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
    newAnswerCEl.setAttribute("class", "quiz-answer-option");
    newAnswerCEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
    newAnswerDEl.setAttribute("class", "quiz-answer-option");
    newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
        }));
    
        var correctAnswer1DEl = document.querySelector("#answer-four")

    if (correctAnswer1DEl.addEventListener("click", function() {
        console.log("Wrong!");
        subtractTen();
        newQuestionEl.textContent = "The condition in an 'if/then' statement is enclosed with:";
        newQuestionEl.setAttribute("id", "quiz-question");
        newAnswerListEl.setAttribute("class", "quiz-answer-option")
        newAnswerListEl.innerHTML = "<button id='answer-one'>1. Quotes</button>"
        newAnswerBEl.setAttribute("class", "quiz-answer-option");
        newAnswerBEl.innerHTML = "<button id='answer-two'>2. Curly Brackets</button>"
        newAnswerCEl.setAttribute("class", "quiz-answer-option");
        newAnswerCEl.innerHTML = "<button id='answer-three'>3. Square Brackets</button>"
        newAnswerDEl.setAttribute("class", "quiz-answer-option");
        newAnswerDEl.innerHTML = "<button id='answer-four'>4. Parentheses</button>"
         
    }));
    // Boolean, but not true or false based on click. 

        //Illuminate "Wrong"
        // Replace quiz question and answers with new ones. 
          // Subtract 10 seconds from timer
    
    var correctAnswer1BEl = document.querySelector("#answer-two")
    // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
    correctAnswer1BEl.addEventListener("click", function() {
        console.log("Answer B was Clicked!");
        console.log(correctAnswer1AEl)
    })      //Illuminate "Wrong"
    // Replace quiz question and answers with new ones. 
    // Subtract 10 seconds from timer


    var correctAnswer1CEl = document.querySelector("#answer-three")
// Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
    correctAnswer1CEl.addEventListener("click", function() {
    console.log("Answer C was Clicked!");
    })      //Illuminate "Correct"
    // Replace quiz question and answers with new ones. 



    var correctAnswer1DEl = document.querySelector("#answer-four")
    // Event listener for question 2 - when they click anywhere in <ol id=quiz-answers>  
    correctAnswer1DEl.addEventListener("click", function() {
        console.log("Answer D was Clicked!");

    })       //Illuminate "Wrong"
    // Replace quiz question and answers with new ones. 
    // Subtract 10 seconds from timer

    // Third Quiz Question
    // QUESTION 3: Arrays in javascript can be used to store
    //1. numbers and strings 2.other arrays 3. booleans 4. all of the above
    var correctAnswer1AEl = document.querySelector("#answer-one")

    if (correctAnswer1AEl.addEventListener("click", function() {
    console.log("Wrong!");
    newQuestionEl.textContent = "Arrays in javascript can be used to store  ____";
    newQuestionEl.setAttribute("id", "quiz-question");
    newAnswerListEl.setAttribute("class", "quiz-answer-option")
    newAnswerListEl.innerHTML = "<button id='answer-one'>1. New Question</button>"
    newAnswerBEl.setAttribute("class", "quiz-answer-option");
    newAnswerBEl.innerHTML = "<button id='answer-two'>2. New Question</button>"
    newAnswerCEl.setAttribute("class", "quiz-answer-option");
    newAnswerCEl.innerHTML = "<button id='answer-three'>3. New Question</button>"
    newAnswerDEl.setAttribute("class", "quiz-answer-option");
    newAnswerDEl.innerHTML = "<button id='answer-four'>4. New Question</button>"
     
    }));
    
    var correctAnswer1BEl = document.querySelector("#answer-two")

    if (correctAnswer1BEl.addEventListener("click", function() {
        console.log("Wrong!");
        newQuestionEl.textContent = "Another quiz question!";
        newQuestionEl.setAttribute("id", "quiz-question");
        newAnswerListEl.setAttribute("class", "quiz-answer-option")
        newAnswerListEl.innerHTML = "<button id='answer-one'>1. New Question</button>"
        newAnswerBEl.setAttribute("class", "quiz-answer-option");
        newAnswerBEl.innerHTML = "<button id='answer-two'>2. New Question</button>"
        newAnswerCEl.setAttribute("class", "quiz-answer-option");
        newAnswerCEl.innerHTML = "<button id='answer-three'>3. New Question</button>"
        newAnswerDEl.setAttribute("class", "quiz-answer-option");
        newAnswerDEl.innerHTML = "<button id='answer-four'>4. New Question</button>"
         
    }));
    
    var correctAnswer1CEl = document.querySelector("#answer-three")

    if (correctAnswer1CEl.addEventListener("click", function() {
        console.log("Correct!");

    newQuestionEl.textContent = "Another quiz question!";
    newQuestionEl.setAttribute("id", "quiz-question");
    newAnswerListEl.setAttribute("class", "quiz-answer-option")
    newAnswerListEl.innerHTML = "<button id='answer-one'>1. New Question</button>"
    newAnswerBEl.setAttribute("class", "quiz-answer-option");
    newAnswerBEl.innerHTML = "<button id='answer-two'>2. New Question</button>"
    newAnswerCEl.setAttribute("class", "quiz-answer-option");
    newAnswerCEl.innerHTML = "<button id='answer-three'>3. New Question</button>"
    newAnswerDEl.setAttribute("class", "quiz-answer-option");
    newAnswerDEl.innerHTML = "<button id='answer-four'>4. New Question</button>"
         
    }));
    
        var correctAnswer1DEl = document.querySelector("#answer-four")

    if (correctAnswer1DEl.addEventListener("click", function() {
        console.log("Wrong!");
        newQuestionEl.textContent = "Another quiz question!";
        newQuestionEl.setAttribute("id", "quiz-question");
        newAnswerListEl.setAttribute("class", "quiz-answer-option")
        newAnswerListEl.innerHTML = "<button id='answer-one'>1. New Question</button>"
        newAnswerBEl.setAttribute("class", "quiz-answer-option");
        newAnswerBEl.innerHTML = "<button id='answer-two'>2. New Question</button>"
        newAnswerCEl.setAttribute("class", "quiz-answer-option");
        newAnswerCEl.innerHTML = "<button id='answer-three'>3. New Question</button>"
        newAnswerDEl.setAttribute("class", "quiz-answer-option");
        newAnswerDEl.innerHTML = "<button id='answer-four'>4. New Question</button>"
         
    }));
    

});


