// Variables
// var container = document.querySelector("quiz-container");
// var quizQuestions = document.querySelector("quizQuestions");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
// startGameButton.addEventListener("click"); 

 var startQuiz = true;

 var quizQuestions = [{

    id: 0,
    question: "What is 2+2",
    answer: [
        {text: "3", isCorrect: false },
        {text: "4", isCorrect: true },
        {text: "7", isCorrect: false },
        {text: "11", isCorrect: false},
    ]
    },
    {  

    id: 1, 
    question: "What is the capital city of Australia?",
    answer: [
        {text: "Brisbane", isCorrect: false },
        {text: "Canberra", isCorrect: true },
        {text: "Melbourne", isCorrect: false },
        {text: "Sydney", isCorrect: false },
    ]
    },
    {   
        id: 2,
    question: "What is 10 + 12?",
    answer: [
        {text: "22", isCorrect: true},
        {text: "10", isCorrect: false},
        {text: "18", isCorrect: false},
        {text: "34", isCorrect: false},
    ]
    },
    
];

// Wthis is the function that occurs when startQuiz is clicked
function questions (id) 

    const question = document.getElementById("question");

    question.innerText = quizQuestions[id].question;

   const ansA = document.getElementById('ansA');
   const ansB = document.getElementById('ansB');
   const ansC = document.getElementById('ansC');
   const ansD = document.getElementById('ansD');

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
    ansB.style.backgroundColor = "blue";
    ansC.style.backgroundColor = "blue";
    ansD.style.backgroundColor = "blue";
    selected = ansA.value;
   })

   ansB.addEventListener("click", () =>{
    ansA.style.backgroundColor = "blue";
    ansB.style.backgroundColor = "red";
    ansC.style.backgroundColor = "blue";
    ansD.style.backgroundColor = "blue";
    selected = ansB.value;
   })

   ansC.addEventListener("click", () => {
   ansA.style.backgroundColor = "blue";
   ansB.style.backgroundColor = "blue";
   ansC.style.backgroundColor = "red";
   ansD.style.backgroundColor = "blue";
   selected = ansC.value;
   })

   ansD.addEventListener("click", () => {
    ansA.style.backgroundColor = "blue";
    ansB.style.backgroundColor = "blue";
    ansC.style.backgroundColor = "blue";
    ansD.style.backgroundColor = "red";
    selected = ansD.value;
   })

var numberCountdown = "";
function countdown(){
    var timeleft = 60;

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
    
countdown();








