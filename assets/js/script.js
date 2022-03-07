
const i = 0;
let score = 0;


const questions = [
    {
      question : "What does HTML stand for?",
      choiceA : "A. Hyper Text Markup Language",
      choiceB : "B. H.L. and Text Markup Language",
      choiceC : "C. Home Tool Markup Language",
      choiceD : "D. Home and Tech Media Language",
      answer : "A. Hyper Text Markup Language"
    },
    {
      question : "What tag is used to define a hyperlink, or link to another page?",
      choiceA : "A. strong",
      choiceB : "B. a",
      choiceC : "C. blockquote",
      choiceD : "D. em",
      answer : "B. a"
    }];


// Question elements
let codeQuizHeader = document.querySelector (".questions");
let instructions = document.querySelector(".ins");

// Answer elements
let answerChoiceContainer = document.querySelector (".answers");
let answerA = document.querySelector(".answerA");
let answerB = document.querySelector(".answerB");
let answerC = document.querySelector(".answerC");
let answerD = document.querySelector(".answerD");

// Button elements
let answerButton = document.querySelector (".g-luck");
let startBtn = document.querySelector(".startBtn");

// Other elements
let totalScore = document.querySelector(".scoreEl");
let timeLeft = document.querySelector(".timeEl")
let goodLuck = document.querySelector(".g-luck");



function startQuiz () {

  // Clears the container
  instructions.innerHTML = "";
  goodLuck.style.display = "none";
  startBtn.style.display = "none";

  totalScore.innerHTML = 0;

  // Adds Question
  codeQuizHeader.innerHTML = questions[i].question;

  // Adds Answer Button/Button Content/New Styling
  answerA.innerHTML = questions[i].choiceA;
  answerA.className = "button startBtn:hover";
  answerA.style.width = "350px";

  answerB.innerHTML = questions[i].choiceB;
  answerB.className = "button startBtn:hover";
  answerB.style.width = "350px";

  answerC.innerHTML = questions[i].choiceC;
  answerC.className = "button startBtn:hover";
  answerC.style.width = "350px";

  answerD.innerHTML = questions[i].choiceD;
  answerD.className = "button startBtn:hover";
  answerD.style.width = "350px";

}

  function checkAnswer (event) {
    if(event.target.innerHTML == questions[i].answer) {
      instructions.innerText = "CORRECT!";
      score += 10;
      totalScore.innerHTML = score;
    } else {
      instructions.innerText = "NOPE!";
      score -= 5;
      totalScore.innerHTML = score;
    }
  }


  startBtn.addEventListener("click", startQuiz);
  answerA.addEventListener("click", checkAnswer);
  answerB.addEventListener("click", checkAnswer);
  answerC.addEventListener("click", checkAnswer);
  answerD.addEventListener("click", checkAnswer);

    

