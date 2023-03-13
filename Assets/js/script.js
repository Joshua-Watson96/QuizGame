// Variables
// var container = document.querySelector("quiz-container");
// var quizQuestions = document.querySelector("quizQuestions");

startGameButton.addEventListener("click"); 

 var startQuiz = true;

// Wthis is the function that occurs when startQuiz is clicked
function startQuiz(id) {

    const question = document.getElementById("question");

    question.innerText = quizQuestions[id].question;

   const ansA = document.getElementById('ansA');
   const ansB = document.getElementById('ansB');
   const ansC = document.getElementById('ansC');
   const ansD = document.getElementById('ansD');

   ansA.innerText = quizQuestions[id].answers[0].text;
   ansB.innerText = quizQuestions[id].answers[1].text;
   ansC.innerText = quizQuestions[id].answers[2].text;
   ansD.innerText = quizQuestions[id].answers[3].text;

   ansA.value = quizQuestions[id].answers[0].isCorrect;
   ansB.value = quizQuestions[id].answers[1].isCorrect;
   ansC.value = quizQuestions[id].answers[2].isCorrect;
   ansD.value = quizQuestions[id].answers[3].isCorrect;

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
   

}




const quizQuestions = [{
        id: 0,
        question: "What is 2+2",
        answers: [
            {text: "3", isCorrect: false },
            {text: "4", isCorrect: true },
            {text: "7", isCorrect: false },
            {text: "11", isCorrect: false},
        ]
        },
        
    {  
        id: 1, 
        question: "What is the capital city of Australia?",
        answers: [
            {text: "Brisbane", isCorrect: false },
            {text: "Canberra", isCorrect: true },
            {text: "Melbourne", isCorrect: false },
            {text: "Sydney", isCorrect: false },
        ]
        },
        
    {   id: 2,
        question: "What is 10 + 12?",
        answers: [
            {text: "22", isCorrect: true},
            {text: "10", isCorrect: false},
            {text: "18", isCorrect: false},
            {text: "34", isCorrect: false},
        ]
        },
        
];