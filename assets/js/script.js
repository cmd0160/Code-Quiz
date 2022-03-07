
let questions = [
    {
      question : "What does HTML stand for?",
      choiceA : "A. Hyper Text Markup Language",
      choiceB : "B. H.L. and Text Markup Language",
      choiceC : "C. Home Tool Markup Language",
      choiceD : "D. Home and Tech Media Language",
      correct : "A"
    },
    {
      question : "What tag is used to define a hyperlink, or link to another page?",
      choiceA : "A. strong",
      choiceB : "B. a",
      choiceC : "C. blockquote",
      choiceD : "D. em",
      correct : "B"
    }];

let codeQuizHeader = document.querySelector (".questions");
let instructions = document.querySelector(".instructions");

let answerChoiceContainer = document.querySelector (".answers");
let answerA = document.querySelector(".answerA");
let answerB = document.querySelector(".answerB");
let answerC = document.querySelector(".answerC");
let answerD = document.querySelector(".answerD");


let answerButton = document.querySelector (".g-luck");
let startBtn = document.querySelector(".startBtn");

let goodLuck = document.querySelector(".g-luck");





// added a function to show the questions

function startQuiz () {

  // Clears the container
  instructions.style.display = "none";
  goodLuck.style.display = "none";
  startBtn.style.display = "none";


  // Adds Question
  codeQuizHeader.innerHTML = questions[0].question;

  // Adds Answer Button/Button Content/New Styling
  answerA.innerHTML = questions[0].choiceA;
  answerA.className = "button startBtn:hover";
  answerA.style.width = "350px";

  answerB.innerHTML = questions[0].choiceB;
  answerB.className = "button startBtn:hover";
  answerB.style.width = "350px";

  answerC.innerHTML = questions[0].choiceC;
  answerC.className = "button startBtn:hover";
  answerC.style.width = "350px";

  answerD.innerHTML = questions[0].choiceD;
  answerD.className = "button startBtn:hover";
  answerD.style.width = "350px";

}

startBtn.addEventListener("click", startQuiz);


  function checkAnswer () {

  }

  function scoreQuestion () {

  }

  function incrementQuestion () {

  }




    

