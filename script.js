const quiz = [
  {
    question: "Which of the following data-type is invalid in javascript?",
    option1: "let",
    option2: "var",
    option3: "const",
    option4: "int",
    ans: "option4",
  },
  {
    question: "Which of the following keyword is not correct in javascript?",
    option1: "temp",
    option2: "var",
    option3: "const",
    option4: "let",
    ans: "option1",
  },
  {
    question: "Which of the following  is not a method in javascript?",
    option1: "trim()",
    option2: "slice()",
    option3: "const()",
    option4: "splice()",
    ans: "option3",
  },
  {
    question: "Which of the following  is correct in javascript?",
    option1: "javascript is object oriented language",
    option2: "javascript is proto-typed based language",
    option3: "javascript is compiled type language",
    option4: "javascript is translator",
    ans: "option2",
  },
];

let questions = document.querySelector(".questions");
let btnClick = document.querySelector(".btn");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let opt4 = document.querySelector("#opt4");
let answers = document.querySelectorAll(".answer");
let showResult = document.querySelector("#showResult");
let button2 = document.querySelector("#button2");
let count = 0;

function load_data() {
  questions.innerHTML = quiz[count].question;
  opt1.innerHTML = quiz[count].option1;
  opt2.innerHTML = quiz[count].option2;
  opt3.innerHTML = quiz[count].option3;
  opt4.innerHTML = quiz[count].option4;
}
load_data();

let userAnswerSelected = () => {
  let ans;
  console.log(answers);
  answers.forEach((element) => {
    if (element.checked) {
      ans = element.id;
    }
  });
  return ans;
};
let diSelectAll = () => {
  answers.forEach((element) => {
    element.checked = false;
  });
};
let score = 0;
btnClick.addEventListener("click", () => {
  let checkAnswer = userAnswerSelected();
  if (checkAnswer) {
    if (checkAnswer == quiz[count].ans) {
      score++;
      console.log("score incremented");
    }
    count++;
    diSelectAll();
    if (count < quiz.length) {
      load_data();
    } else {
      showResult.innerHTML = `
        <h2 class="scoreText">Your Score is ${score}/${quiz.length}</h2>
        <button class="btn2" onclick="location.reload()">Play Again</button>
        `;
      showResult.classList.remove("showText");
    }
  } else {
    alert("Please select an answer");
  }
  console.log(checkAnswer);
  console.log(score);
});

button2.addEventListener("click", () => {
  count = 0;
  load_data();
});
