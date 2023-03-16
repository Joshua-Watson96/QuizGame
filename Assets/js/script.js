// Variables
var container = document.getElementById("quiz-container");
// var quizQuestions = document.querySelector("quizQuestions");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startQuizEl = document.querySelector('#startQuiz');
// var questionEl = document.getElementById('question');
// startGameButton.addEventListener("click"); 
var startBtn = document.getElementById('startQuiz');
var questionEl = document.getElementById('question');
var currentQuestionIndex = 0;
var gameBtns = document.getElementsByClassName('options-container');
// quizQuestions.style.display = 'hidden';

var start = true;

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
    
];



function startQuiz() {
    // var startQuiz = document.getElementById("startScreen");
    container.removeAttribute("class");
    console.log(startQuiz);
    timerCount = 60;
    startQuiz.disable = true;
    
}

console.log(quizQuestions);

var answers = document.getElementsByClassName('answers')

// function onClickedAnswer(answers) {
//     if (answers.addEventListener('click'))
//     displayQuestion();
    
// };
    
function getQuestion() {
    // get current question object from array
    var currentQuestion = quizQuestions[currentQuestionIndex];
    // update title with current question
    var questionEl = document.getElementsByClassName("questions-container");
    questionEl.textContent = currentQuestion.title;
    // clear out any old question choices
    questionEl.innerHTML = "";
    // loop over choices
    currentQuestion.answer.forEach(function(answers, i) {
      // // create new button for each choice
      // var choiceNode = document.getElementById("answers");
      // choiceNode.setAttribute("id", "answers");
      // choiceNode.setAttribute("value", choice);
      // choiceNode.textContent = i + 1 + ". " + choice;
      // attach click event listener to each choice
      gameBtns.onClick = questionClick();
      // display on the page
      questionEl.appendChild(choiceNode)
    });
  }

    function questionClick() {
    // check if user guessed wrong
  // if (this.value !== questions[currentQuestionIndex].answer) {
  //     // penalize time
  //     // time -= 15;
  //     // if (time < 0) {
  //     //   time = 0;
  //     // }
  //     // display new time on page
  //     timerEl.textContent = time;
  //   //   // play "wrong" sound effect
  //   //   sfxWrong.play();
  //   //   feedbackEl.textContent = "Wrong!";
  //   // } else {
  //   //   // play "right" sound effect
  //   //   sfxRight.play();
  //   //   feedbackEl.textContent = "Correct!";
  //   }
    // flash right/wrong feedback on page for half a second
    // feedbackEl.setAttribute("class", "feedback");
    // setTimeout(function() {
    //   feedbackEl.setAttribute("class", "feedback hide");
    // }, 1000);
    // move to next question
    currentQuestionIndex++;
    // check if we've run out of questions
    if (currentQuestionIndex === quizQuestions.length) {
    } else {
      getQuestion();
    }
  }


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
   })

   ansB.addEventListener("click", () =>{
    ansA.style.backgroundColor = "lightblue";
    ansB.style.backgroundColor = "red";
    ansC.style.backgroundColor = "lightblue";
    ansD.style.backgroundColor = "lightblue";
    selected = ansB.value;
   })

   ansC.addEventListener("click", () => {
   ansA.style.backgroundColor = "lightblue";
   ansB.style.backgroundColor = "lightblue";
   ansC.style.backgroundColor = "red";
   ansD.style.backgroundColor = "lightblue";
   selected = ansC.value;
   })

   ansD.addEventListener("click", () => {
    ansA.style.backgroundColor = "lightblue";
    ansB.style.backgroundColor = "lightblue";
    ansC.style.backgroundColor = "lightblue";
    ansD.style.backgroundColor = "red";
    selected = ansD.value;
   })
}

   console.log(questions)

if (start) {
    questions("0");
}
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
console.log (countdown) 
countdown();

startBtn.addEventListener("click", startQuiz);







