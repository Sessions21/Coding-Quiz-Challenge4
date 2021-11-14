var currentIndex = 0;
var timeLeft = 60;
var startButton = document.querySelector(".start-button");
var pushButton = document.querySelector(".push-button");
var questionHeading = document.querySelector(".question-heading");
var questionContainer = document.querySelector(".question-container");
var answerContainer = document.querySelector(".answer-container");
var timerEl = document.querySelector(".timer")

var questions = [
  {
  question: "question one",
  choices: ["choice one", "choice two", "choice three", "choice four"],
  answer: "choice one"
  },
  {
  question: "question two",
  choices: ["choice one", "choice two", "choice three", "choice four"],
  answer: "choice three"
  },
  {
  question: "question three",
  choices: ["choice one", "choice two", "choice three", "choice four"],
  answer: "choice two"
  },
  {
  question: "question four",
  choices: ["choice one", "choice two", "choice three", "choice four"],
  answer: "choice one"
  },
  {
  question: "question five",
  choices: ["choice one", "choice two", "choice three", "choice four"],
  answer: "choice four"
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
    }
    else {
      timeLeft -=5
      // subtract time from clock
    }
    currentIndex++
    showQuestion()
  }

  startButton.addEventListener("click", startQuiz);