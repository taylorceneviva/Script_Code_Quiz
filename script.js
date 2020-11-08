var questions = [
    {
        question: "1. Which of these is a correct method to create a new array?",
        choices: ["var myArray = ()", " var myArray = []", "var myArray = new Array []", "array []"],
        correctAnswer: 2
    }, {
        question: "2. Which of these is not a logical operator?",
        choices: ["!", "&&", "||", "&"],
        correctAnswer: 3
    }, {
        question: "3. Which of the following is a JavaScript comment?",
        choices: ["!<!– comment –>", "\\ comment", "// comment", "# comment"],
        correctAnswer: 2
    }, {
        question: "4. What is the result of the following statement: 0 == “”;",
        choices: ["Error", "false", "true", "null"],
        correctAnswer: 2
    }];
    
var startBtn = document.getElementById("startBtn");
var timeRemaining = (questions.length * 20 + 1);
var timerElement = document.getElementById("timer");
var questionTitle = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;


function startTimer() {
 
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // set timer
    setTimer();

    // create questions to display
    createQuestions();
};

function setTimer() {

    var countdown = setInterval(function () {
        timeRemaining--;
        timerElement.textContent = "Time: " + timeRemaining;

        if (timeRemaining === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout();
        }
    }, 1000);
};

function createQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionTitle.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;
// for loop
    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
};
