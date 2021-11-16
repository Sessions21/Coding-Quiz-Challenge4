var currentIndex = 0;
var timeLeft = 60;
var startButton = document.querySelector(".start-button");
var pushButton = document.querySelector(".push-button");
var questionHeading = document.querySelector(".question-heading");
var questionContainer = document.querySelector(".question-container");
var answerContainer = document.querySelector(".answer-container");
var timerEl = document.querySelector(".timer");
var highscoresDiv = document.getElementById("highscores");
var list = document.getElementById("list");
var initials = document.getElementById("initials");
var saveButton = document.getElementById("save");
var mainDiv = document.getElementById("main-div")
var userScore = 0;

var questions = [
  {
  question: "He is Frodo’s loyal friend who journeyed with him from Middle Earth to Mount Doom?",
  choices: ["Boromir", "Elrond", "Samwise Gamgee", "Bilbo Baggins"],
  answer: "Samwise Gamgee"
  },
  {
  question: "Which actor played Samwise Gamgee?",
  choices: ["Sean Astin", "Ashton Kutcher", "Tom Cruise", "Mike Meyers"],
  answer: "Sean Astin"
  },
  {
  question: "How many rings of power were made for the Elves, Dwarves, and Men?",
  choices: ["One", "Five", "Five for the Elves, Two for Dwarves, and Eight for Men.", "Three for the Elves, Seven for Dwarves, and Nine for Men."],
  answer: "Three for the Elves, Seven for Dwarves, and Nine for Men."
  },
  {
  question: "Who was sent to Rivendell by Denethor to find answers about a dream he had?",
  choices: ["Theoden", "Boromir", "Pippin", "Gandolf"],
  answer: "Boromir"
  },
  {
  question: "What is the name of the mountain where the Master Ring was made?",
  choices: ["Mount Rainier", "Mount Vesuvius", "Mount Doom", "Mount Olympus"],
  answer: "Mount Doom"
  }
]

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
      }  else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }


  function startQuiz() {
    countdown();
    pushButton.setAttribute("class", "hidden");
    showQuestion();
  }

  function showQuestion() {
    answerContainer.innerHTML = "";
    if (currentIndex === questions.length) {
      alert("The quiz is finished!");
      mainDiv.classList.add("hidden");
      highscoresDiv.classList.remove("hidden");
    return}

    var currentQuestion = questions[currentIndex];
    questionHeading.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var element = currentQuestion.choices[i];
      var button = document.createElement("button");
      button.textContent = element
      button.setAttribute("value", element);
      button.onclick=checkAnswer;
      answerContainer.appendChild(button);
      console.log(element)
      
    }
  }

  function checkAnswer() {
    if (this.value === questions[currentIndex].answer) {
      userScore ++;
    }
    else {
      timeLeft -=5
      // subtract time from clock
    }
    currentIndex++
    showQuestion()
  }

  startButton.addEventListener("click", startQuiz);

  var highscores = [];
  if(localStorage.getItem("high scores")) {
    highscores = JSON.parse(localStorage.getItem("high scores"))
    for (let i = 0; i < highscores.length; i++) {
      var li = document.createElement("li");
      li.innerText = highscores[i].initials + ": " + highscores[i].score;
      list.appendChild(li);
    }
  }

  saveButton.addEventListener("click", function (){
    var object ={
      "initials": initials.value,
      "score": userScore
    }
    highscores.push(object);
    localStorage.setItem("high scores", JSON.stringify(highscores));
    var li = document.createElement("li");
    li.innerText = initials.value + ": " + userScore;
    list.appendChild(li)
    initials.value = ""
  });