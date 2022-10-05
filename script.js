var question = document.querySelector("#question");
var countdown = document.querySelector(".countdown");
var highscoresBtn = document.querySelector(".highscoresBtn");
var startBtn = document.querySelector(".startBtn");
var userscore = document.querySelector(".userscore");
var submitBtn = document.querySelector(".submitBtn");
var gobackBtn = document.querySelector(".gobackBtn");
var clearhighscoreBtn = document.querySelector(".clearhighscoreBtn");
var highscores = document.querySelector(".highscores");
var quizHeaderEl = document.getElementById("quiz-header");
var questionSection = document.querySelector(".questions-section");
var answers = document.querySelectorAll(".answer");
var choicesEl = document.querySelector("#choices")

var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
]

var currentQuestionIndex = 0;
var timer;
var timeonClock = 70;



function start() {
    quizHeaderEl.style.display = "none";
    questionSection.style.display = 'block';
    startTimer();
    displayQuestion();

}

function displayQuestion() {
    question.textContent = questions[currentQuestionIndex].title
    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = questions[currentQuestionIndex].choices[i];

    }
}
function startTimer() {
    timer = setInterval(function () {
        if (timeonClock <= 0) {
            clearInterval(timer);
        }
        timeonClock--
        countdown.textContent = "Seconds Left: " + timeonClock;
    }, 1000)
}

function grab(userChoice) {

}

var correctFunction = (questions[currentQuestionIndex].choices[i] ==
    questions[currentQuestionIndex].answer);


function incorrectAnswer() {
    timeRemaining -= 15;
    displayQuestion();
}

function correctAnswer(){
    timeRemaining += 10;
    displayQuestion();
    }












startBtn.addEventListener("click", start);
