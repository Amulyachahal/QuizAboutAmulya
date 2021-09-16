var readlineSync = require("readline-sync");
let userName = readlineSync.question(`What's your name?`);
console.log(
  "Welcome " +
    userName +
    ". How well do you know Amulya ?" +
    ` Let's take a quiz, shall we ?`
);

let counter = 0;

let quiz = (question, answer) => {
  let userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Correct!");
    counter++;
  } else {
    console.log("Oops, Wrong Answer *.*");
  }

  console.log("Current Score : ", counter);
  console.log("----------------");
};

let array = [
  {
    question: "where do i live ?",
    answer: "pune",
  },
  {
    question: `What's the name of the game i play the most ?`,
    answer: "pubg",
  },
  {
    question: `which is my favorite sport ?`,
    answer: "basketball",
  },
];

array.forEach((value) => {
  quiz(value.question, value.answer);
});
