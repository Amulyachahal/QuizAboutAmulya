var readlineSync = require('readline-sync');

// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


// let readLineSync = require('readline-sync')



// let quiz = ()=>{
//   let currentScore = 0
//   let user = readLineSync.question(`What's your name?`)
//   console.log(`Hello ${user}, how well do you know Amulya?`)

//   let question1 = readLineSync.question('Where do i live ?')
//   if(question1==='pune'){
//     console.log('right!')
//     currentScore++
//     console.log('Current Score : '+ currentScore)
//     console.log('--------------------')
//   }else{
//     console.log('Wrong!')
//     console.log('Current Score : '+ currentScore)
//     console.log('--------------------')
//   }

//   let question2 = readLineSync.question(`What's the name of the game i play the most ?`)

//   if(question2==='pubg'){
//     currentScore++
//     console.log('Correct!'+currentScore)
//     console.log('--------------------')
//   }else{
//     currentScore--
//     console.log('oops')
//     console.log('Current Score : '+ currentScore)
//     console.log('--------------------')


//   }

//   let question3 = readLineSync.question(`which is my favorite sport ?`)

//   if(question3==='basketball'){
//     currentScore++
//     console.log('Awesome!'+currentScore)
//     console.log('--------------------')
//   }else{
//     currentScore--
//     console.log('Wrong answer')
//     console.log('Current Score : '+ currentScore)
//     console.log('--------------------')

//   }

// }
// quiz()
let userName = readlineSync.question(`What's your name?`)
console.log('Welcome ' + userName + '. How well do you know Amulya ?' + ` Let's take a quiz, shall we ?`)

let counter = 0

let quiz = (question, answer) => {
  let userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('Correct!')
    counter++

  } else {
    console.log('Oops, Wrong Answer *.*')
  }

  console.log('Current Score : ', counter)
  console.log('----------------')


}


let array = [{
  question: 'Where do i live ?',
  answer: 'pune'
}, {
  question: `What's the name of the game i play the most ?`,
  answer: 'pubg'
}, {
  question: `which is my favorite sport ?`,
  answer: 'basketball'
}, {
  question: `The name of my pet is ?`,
  answer: 'blade'
}, {
  question: `What do i aspire to become ?`,
  answer: 'full stack web developer'
}]

array.forEach((value) => {
  quiz(value.question, value.answer)

})