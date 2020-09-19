var highScoreDesEl = document.querySelector("#highscores-description");
var secondsEl = document.querySelector("#seconds");
var quizTitle = document.querySelector(".quiz-title");
var quizContainer = document.querySelector(".quiz-container");
var BtnContainerEl = document.querySelector(".button-options-container");
var answerContainer = document.querySelector(".answer-container");
var initialsTitle = document.querySelector(".initials-container");

var i = 0;
var quizCount = 5;
var eachQuizTime = 60;
var totalTime = eachQuizTime * (quizCount);

var highScores = "";
var decider = [];
var scores = decider.length;

var myQuizList = [

  {
    Quiz: "Who invented JavaScript?",
    options: ["1. Douglas Crockford", "2. Sheryl Sandberg", "3. Brendan Eich"],
    answer: "3. Brendan Eich"
  },

  {
    Quiz: "Which one of these is a JavaScript package manager?",
    options: ["1. Node.js", "2. TypeScript", "3. npm"],
    answer: "3. npm"
  },
  {
    Quiz: "Which tool can you use to ensure code quality?",
    options: ["1. Angular", "2. jQuery", "3. RequireJS", "4. ESLint"],
    answer: "4. ESLint"
  },
  {
    Quiz: "Which one of these is a JavaScript package manager?",
    options: ["1. Node.js", "2. TypeScript", "3. npm"],
    answer: "3. npm"
  },
  {
    Quiz: "Which tool can you use to ensure code quality?",
    options: ["1. Angular", "2. jQuery", "3. RequireJS", "4. ESLint"],
    answer: "4. ESLint"
  }
];

quizWelcome();

function quizWelcome() {
  welcomeH1El = document.createElement("h1");
  H4El = document.createElement("h4");
  StartBtn = document.createElement("button");

  quizTitle.appendChild(welcomeH1El);
  quizTitle.appendChild(H4El);
  quizTitle.appendChild(StartBtn);

  welcomeH1El.textContent = "Coding Quiz Challenge";
  H4El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 10seconds!";
  StartBtn.textContent = "Start Quiz";

  welcomeH1El.setAttribute("class", "welcome");
  H4El.setAttribute("class", "h4Text");
  StartBtn.setAttribute("class", "button");
  StartBtn.setAttribute("class", "button:hover");
  StartBtn.setAttribute("id", "Start");
}

function timer() {
  var quizTimeCount = totalTime;

  var timeInterval = setInterval(function () {
    quizTimeCount--;
    secondsEl.textContent = quizTimeCount;

    if (quizTimeCount < 10) {
      secondsEl.textContent = "0" + quizTimeCount;
    }

    if (quizTimeCount === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
};

function timeReduced() {
  var deduction = 10;
  deduction--;
  newTimeCount = totalTime - deduction;
  newTimeCount = totalTime - 10;

  return quizTimeCount.push(timeReduced);
}

function getQuizOptions() {

  quizContainer.innerHTML = "";

  var quizEl = document.createElement("h3");
  quizContainer.appendChild(quizEl);
  quizEl.setAttribute("class", "h4Text");

  quizEl.textContent = myQuizList[i].Quiz;

  BtnContainerEl.innerHTML = "";

  myQuizList[i].options.forEach(function (option, i) {

    var Btnlist = document.createElement("ul");
    var BtnEl = document.createElement("li");
    var optionsBtn = document.createElement("button");

    optionsBtn.setAttribute("value", option);
    optionsBtn.setAttribute("class", "button");
    optionsBtn.setAttribute("class", "button:hover");
    Btnlist.setAttribute("class", "ul");
    Btnlist.setAttribute("style", "list-style-type:none;");

    optionsBtn.textContent = option;

    optionsBtn.onclick = getAnswer;

    BtnEl.appendChild(optionsBtn);
    Btnlist.appendChild(BtnEl);
    BtnContainerEl.appendChild(Btnlist);
  });

}

function getAnswer() {

  var answerEl = document.createElement("h4");
  answerEl.setAttribute("class", "answer");
 
  var Answer = ["Wrong!", "Correct!"];

  answerContainer.append(answerEl);

  // if (i <= quizCount) { 
    if (this.value !== myQuizList[i].answer) {
      
      answerEl.textContent = Answer[0];
      console.log(Answer[0]);
      timeReduced;

    }

    else if (this.value === myQuizList[i].answer) {

      answerEl.textContent = Answer[1];
      decider.push(myQuizList[i].Quiz[i])
      console.log(Answer[1]);
    }

    i++;
    getQuizOptions();



  // }
  // else { getInitials; }
}


function getInitials() {

  finishEl = document.createElement("h1");
  resultEl = document.createElement("h4Text");
  SubmitBtn = document.createElement("button");
  var formEl = document.createElement("form");
  var labelEl = document.createElement("label");
  var inputEl = document.createElement("input");

  initialsTitle.appendChild(finishEl);
  initialsTitle.appendChild(resultEl);
  initialsTitle.appendChild(formEl);
  formEl.appendChild(labelEl);
  labelEl.appendChild(inputEl);
  labelEl.appendChild(SubmitBtn);

  finishEl.textContent = "All done!";
  resultEl.textContent = "your final score is " + scores + "."
  labelEl.textContent = "Enter Initials:";
  SubmitBtn.textContent = "Submit";

  FinishEl.setAttribute("class", "welcome");
  resultEl.setAttribute("class", "h4Text");
  SumitBtn.setAttribute("class", "button");
  SubmitBtn.setAttribute("class", "button:hover");
  labelEl.setAttribute("class", "h4Text");
  SumbitBtn.setAttribute("id", "Submit");

}


function getStarted() {
  timer();
  quizTitle.setAttribute("class", "hide");
  console.log("start game");

  getQuizOptions();
  // getAnswer();
  // BtnContainerEl.setAttribute("class", "hide");
  // getInitials();

};

StartBtn.addEventListener("click", getStarted);
