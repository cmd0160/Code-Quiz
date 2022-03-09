let i = 0;
let score = 0;

const questions = [
  {
    question: "What does HTML stand for?",
    choiceA: "A. Hyper Text Markup Language",
    choiceB: "B. H.L. and Text Markup Language",
    choiceC: "C. Home Tool Markup Language",
    choiceD: "D. Home and Tech Media Language",
    answer: "A. Hyper Text Markup Language",
  },
  {
    question:
      "What tag is used to define a hyperlink, or link to another page?",
    choiceA: "A. strong",
    choiceB: "B. a",
    choiceC: "C. blockquote",
    choiceD: "D. em",
    answer: "B. a",
  },
  {
    question:
      "What tag is required in all HTML documents, and is used to define the title?",
    choiceA: "A. br",
    choiceB: "B. body",
    choiceC: "C. head",
    choiceD: "D. title ",
    answer: "D. title ",
  },
  {
    question: "What does CSS stand for?",
    choiceA: "A. Chrome Styling Service",
    choiceB: "B. Cascading Style Service",
    choiceC: "C. Cascading Style Sheets",
    choiceD: "D. Community Service Styling",
    answer: "C. Cascading Style Sheets",
  },
  {
    question:
      "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
    choiceA: "A. Cascading",
    choiceB: "B. Responsive",
    choiceC: "C. Shifting",
    choiceD: "D. Evolution",
    answer: "B. Responsive",
  },
  {
    question:
      "What is the name of the property used to specify the effects displayed behind all elements on a page?",
    choiceA: "A. Transparency",
    choiceB: "B. Bottom Layer",
    choiceC: "C. Background",
    choiceD: "D. Border",
    answer: "C. Background",
  },
  {
    question:
      "In JavaScript, what element is used to store multiple values in a single variable?",
    choiceA: "A. Arrays",
    choiceB: "B. Variables",
    choiceC: "C. Functions",
    choiceD: "D. Strings",
    answer: "A. Arrays",
  },
  {
    question:
      "What is the element called that forms a search pattern out of a sequence of characters?",
    choiceA: "A. Boolean Variable",
    choiceB: "B. Event",
    choiceC: "C. Conditional Argument",
    choiceD: "D. RegExp or Regular Expression",
    answer: "D. RegExp or Regular Expression",
  },
  {
    question:
      "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    choiceA: "A. Events",
    choiceB: "B. RegExp",
    choiceC: "C. Boolean",
    choiceD: "D. Condition",
    answer: "A. Events",
  },
  {
    question:
      "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choiceA: "A. Repeater",
    choiceB: "B. Clone",
    choiceC: "C. Debugger",
    choiceD: "D. Loop",
    answer: "D. Loop",
  },
];




// Question elements
let codeQuizHeader = document.querySelector(".questions");

// Answer elements
let answerChoiceContainer = document.querySelector(".answers");
let answerA = document.querySelector(".answerA");
let answerB = document.querySelector(".answerB");
let answerC = document.querySelector(".answerC");
let answerD = document.querySelector(".answerD");

// Button elements
let answerButton = document.querySelector(".g-luck");
let startBtn = document.querySelector(".startBtn");

// Other elements
let totalScore = document.querySelector(".scoreEl");
let timer = document.querySelector(".timeEl");
let instructionsHeader = document.querySelector(".insHeader");
let instructions = document.querySelector(".ins");
let goodLuck = document.querySelector(".g-luck");
let totalTime = 75;
let timeInterval;






// function countdown() {
//   // setInterval to 1000ms.
//   timeInterval = setInterval(function () {
//     totalTime--;
//     timer.textContent = totalTime;

//     // timer changes color to alert user that time is running out.
//     if (totalTime <= 0) {
//       clearInterval(timeInterval);
//       alert("Time's Up!");
//       totalTime = 0;
//       timer.textContent = "";
//       endQuiz();
//     } else if (totalTime < 31) {
//       timer.style.color = "orange";
//     } else if (totalTime < 11) {
//       timer.style.color = "red";
//     }

//     // If user reaches last question before timer runs out, clearInterval
//     if (questions[i] == questions.length - 1) {
//       clearInterval(timeInterval);
//       endQuiz();
//     }
//   }, 1000);
// }

function startQuiz() {
  // countdown();

  // Clears the container
  instructionsHeader.innerHTML = "";
  instructions.innerHTML = "";
  goodLuck.innerHTML = "";
  startBtn.style.display = "none";
  totalScore.innerHTML = 0;


  cycleQuestions();
}

function cycleQuestions() {
  if (i <= questions.length - 1) {
    // Adds Question
    codeQuizHeader.innerHTML = questions[i].question;
    // Adds Answer Button/Button Content/New Styling
    answerA.innerHTML = questions[i].choiceA;
    answerA.className = "answerButtons answerButtons:hover";
    answerB.innerHTML = questions[i].choiceB;
    answerB.className = "answerButtons answerButtons:hover";
    answerC.innerHTML = questions[i].choiceC;
    answerC.className = "answerButtons answerButtons:hover";
    answerD.innerHTML = questions[i].choiceD;
    answerD.className = "answerButtons answerButtons:hover";
  } else {
    endQuiz();
  }
}

function checkAnswer(event) {
  if (event.target.innerHTML == questions[i].answer) {
    instructions.innerText = "CORRECT!";
    score += 10;
    totalScore.innerHTML = score;
    questionItterator();
  } else {
    instructions.innerText = "NOPE!";
    score -= 5;
    totalTime -= 10;
    totalScore.innerHTML = score;
    questionItterator();
  }
}

function questionItterator() {
  if (questions[i] !== questions.length - 1) {
    i++;
    cycleQuestions();
  }
}

function endQuiz() {
  console.log("you finished...");
  codeQuizHeader.innerHTML = "The quiz has ended!";
  instructions.innerText = "Final Score: " + score;
  answerA.style.display = "none";
  answerB.style.display = "none";
  answerC.style.display = "none";
  answerD.style.display = "none";
}

answerA.addEventListener("click", checkAnswer);
answerB.addEventListener("click", checkAnswer);
answerC.addEventListener("click", checkAnswer);
answerD.addEventListener("click", checkAnswer);

startBtn.addEventListener("click", startQuiz);
