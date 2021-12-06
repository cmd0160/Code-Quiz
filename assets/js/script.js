
let questions = [
    {
      question : "What does HTML stand for?",
      choiceA : "A. Hyper Text Markup Language",
      choiceB : "B. HyperLinks and Text Markup Language",
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







    
var i = 0
let addQuestion = document.querySelector (".UTBootCamp");
let addAnswerChoice = document.querySelector (".answerContent")
let answerButton = document.querySelector (".g-luck");


// define Start Button with a variable
let startbtn = document.querySelector(".start");
// added an EventListener so a click can occur
startbtn.addEventListener("click", startQuiz);


// added a function to show the questions

function startQuiz () {

  // Clears the container
  let questionContainer = document.querySelector(".instructions");
  questionContainer.style.display = "none";
  let goodLuckContainer = document.querySelector(".g-luck");
  goodLuckContainer.style.display = "none";

  // Adds Questions
  addQuestion.innerHTML = questions[i].question;

  // Adds Answer Buttons

  // Adds Answer Button Content
  addAnswerChoice.innerHTML = questions[i].choiceA;
  // addAnswerChoice.innerHTML = questions[i].choiceB;
  // addAnswerChoice.innerHTML = questions[i].choiceC;
  // addAnswerChoice.innerHTML = questions[i].choiceD;


  
  // let findDiv = document.querySelector (".questionContent");
  // let questionTitle = document.createElement ("p");
  // findDiv.append(questionTitle);

  // let answerBtn = document.createElement ("button");
  // findDiv.appendChild(answerChoice);
  // answerChoice = questions[i].choiceA;



  function checkAnswer () {

  }

  function scoreQuestion () {

  }

  function incrementQuestion () {

  }



  //create buttons for the choice options
  //the buttons will have their own event listener on them
  //The above event listner will need to:
  //  1. check to see if the user is right
  //  2. affect the score in some way (affect time left as well if they're wrong)
  //  3. increment i (i++)
}

//you'll want a separate function for the 3 things above ^^
//that way when you run an eventListener on the answer buttons you can feed it that function 
//answerBtn.addEventListener("click", checkAnswer)

    // create a function to render through questions
    // for loop maybe?
    //for(var i = 0; i < length of the questions; i++) {}
    //i++ - we're going to increment i when a user clicks on an answer button
    //when they click on the button i will move up by 1 and our index number on the array will move up with it
    

