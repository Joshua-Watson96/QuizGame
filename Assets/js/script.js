// Variables
var container = document.getElementById("quiz-container");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startQuizEl = document.querySelector('#startQuiz');
var startBtn = document.getElementById('startQuiz');
var questionEl = document.getElementById('question');
var currentQuestionIndex = 0;
var timer = 60;
var score = 0;
var allScores = [];

// sets the properties for updateTimer
function updateTimer (){
  document.querySelector('#countdown').innerHTML = timer;
}

// sets the start variable to true
var start = true;

// sets the questions that will be in the quiz
var quizQuestions = [
    
    {

    question: "What is 2+2?",
    answer: [
        {text: "3", isCorrect: false },
        {text: "4", isCorrect: true },
        {text: "7", isCorrect: false },
        {text: "11", isCorrect: false},
    ]
    },
    {  

    question: "What is the capital city of Australia?",
    answer: [
        {text: "Brisbane", isCorrect: false },
        {text: "Canberra", isCorrect: true },
        {text: "Melbourne", isCorrect: false },
        {text: "Sydney", isCorrect: false },
    ]
    },
    {   
        
    question: "What is 10 + 12?",
    answer: [
        {text: "22", isCorrect: true},
        {text: "10", isCorrect: false},
        {text: "18", isCorrect: false},
        {text: "34", isCorrect: false},
    ]
    },
    {
      id: 3,
      question: "What day comes after Tuesday?",
      answer: [
        {text: "Monday", isCorrect: false },
        {text: "Thursday", isCorrect: false },
        {text: "Friday", isCorrect: false },
        {text: "Wednesday", isCorrect: true },
      ]
    },
    {
      id: 4,
      question: "What day comes after Monday?",
      answer: [
        {text: "Tuesday", isCorrect: true },
        {text: "Thursday", isCorrect: false },
        {text: "Friday", isCorrect: false },
        {text: "Wednesday", isCorrect: false },
      ]

    }
];


// sets the properties for startQuiz
function startQuiz() {
    container.removeAttribute("class");
    console.log(startQuiz);
};


//console logs the quizQuestion variable
console.log(quizQuestions);

var answers = document.getElementsByClassName('answers')

 // makes the next question appear after choosing an answer
  function nextQuestion() {
    ansA.innerText = quizQuestions[currentQuestionIndex].answer[0].text;
    ansB.innerText = quizQuestions[currentQuestionIndex].answer[1].text;
    ansC.innerText = quizQuestions[currentQuestionIndex].answer[2].text;
    ansD.innerText = quizQuestions[currentQuestionIndex].answer[3].text;
    question.innerText = quizQuestions[currentQuestionIndex].question;
    currentQuestionIndex++; 
    
    if (currentQuestionIndex === questions.length) {
      quizEnd()
    }
  };


// this is the function that occurs when startQuiz is clicked
function questions(id) {
    
   var question = document.getElementById("question");

   question.innerText = quizQuestions[id].question;

   var ansA = document.getElementById('ansA');
   var ansB = document.getElementById('ansB');
   var ansC = document.getElementById('ansC');
   var ansD = document.getElementById('ansD');

   ansA.innerText = quizQuestions[id].answer[0].text;
   ansB.innerText = quizQuestions[id].answer[1].text;
   ansC.innerText = quizQuestions[id].answer[2].text;
   ansD.innerText = quizQuestions[id].answer[3].text;

   ansA.value = quizQuestions[id].answer[0].isCorrect;
   ansB.value = quizQuestions[id].answer[1].isCorrect;
   ansC.value = quizQuestions[id].answer[2].isCorrect;
   ansD.value = quizQuestions[id].answer[3].isCorrect;

   var selected = "";

   ansA.addEventListener("click", () => {
    ansA.style.backgroundColor = "red";
    ansB.style.backgroundColor = "lightblue";
    ansC.style.backgroundColor = "lightblue";
    ansD.style.backgroundColor = "lightblue";
    selected = ansA.value;
    nextQuestion()
   })

   ansB.addEventListener("click", () =>{
    ansA.style.backgroundColor = "lightblue";
    ansB.style.backgroundColor = "red";
    ansC.style.backgroundColor = "lightblue";
    ansD.style.backgroundColor = "lightblue";
    selected = ansB.value;
    nextQuestion()
   })

   ansC.addEventListener("click", () => {
   ansA.style.backgroundColor = "lightblue";
   ansB.style.backgroundColor = "lightblue";
   ansC.style.backgroundColor = "red";
   ansD.style.backgroundColor = "lightblue";
   selected = ansC.value;
   nextQuestion()
   })

   ansD.addEventListener("click", () => {
    ansA.style.backgroundColor = "lightblue";
    ansB.style.backgroundColor = "lightblue";
    ansC.style.backgroundColor = "lightblue";
    ansD.style.backgroundColor = "red";
    selected = ansD.value;
    nextQuestion()
   })
}

   console.log(questions)

if (start) {
    questions("0");
}

// sets the properties for the endscreen
var endScreen = document.createElement('div');
endScreen.classList.add('end-screen');
document.querySelector('highscore-container')
var numberCountdown = "";
 // sets the amount of timeleft in the countdown function
function countdown(){
    var timeleft = 60;
 // sets the time for the timeInterval
var timeInterval = setInterval(function (){
    if (timeleft > 1) {
        timerEl.textContent = timeleft + ' Seconds remaining';
        timeleft--;
    } else if (timeleft === 1) {
        timerEl.textContent = timeleft + ' seconds remaining';
        timeleft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
}, 1000);
}
 // sets the properties for displayMessage function
function displayMessage(){
    var numberCount = 0;
var msgInterval = setInterval(function (){
    if (numberCountdown[numberCount] === undefined) {
        clearInterval(msgInterval);
    } else {
        mainEl.textContent = numberCountdown[numberCount];
        numberCount++;
    }
    }, 1000);

}
 // ends the quiz
function quizEnd (){
  
  
}
console.log (countdown) 
countdown();
 //makes the start quiz button, start the quiz
startBtn.addEventListener("click", startQuiz);







