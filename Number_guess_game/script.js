let randomNumber = parseInt(Math.random() * 100 + 1 )
const form = document.querySelector('form')
const button = document.querySelector('.btn')
let userInput = document.querySelector('#number')
const leftAttempts = document.querySelector('.attempts')
const guesses = document.querySelector('.guessed')
const lastResult  = document.querySelector('.lastResult')
const startOver = document.querySelector('.startover')
let p = document.createElement('p')

let playGame = true

let prevGuess = []
let numAttempts = 1

if  (playGame) {
  
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    let guess = parseInt(userInput.value)
    validGuess(guess)
   
    })
}


function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid Number")
  } else if (guess < 1) {
    alert("Please enter a number greater than 1")
  } else if (guess > 100 ) {
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess)
      if (guess === randomNumber && numAttempts === 10) {
    displayMsg("You guessed it correctly ")
    displayGuess(guess)
    endGame()
    
  } else if (numAttempts === 10) {
      displayGuess(guess)
      displayMsg(`GAME OVER . Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You guessed it correctly ")
    endGame()
  } else if (guess < randomNumber) {
    displayMsg("The number is Too low")
  } else if (guess > randomNumber) {
    displayMsg("The number is Too High")
  }
}


function displayGuess(guess) {
  userInput.value = ""
  guesses.value += guess
  numAttempts ++
  leftAttempts.innerHTML = 11 - numAttempts 
  guesses.innerHTML = prevGuess
}


function displayMsg(msg) {
  lastResult.innerHTML = `<h3> ${msg}</h3>`
}


function endGame() {
userInput.value =""
guesses.value = ""
 
 userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = '<h2 id = "new_Game">Play Again</h2>'
  startOver.appendChild(p)
  playGame = false 
  newGame()
}


function newGame() {
const newGamebtn = document.querySelector('#new_Game')
newGamebtn.addEventListener('click', function (e) {
  randomNumber = parseInt(Math.random() * 100 + 1 )
  prevGuess = []
  numAttempts = 1
  lastResult.innerHTML = ""
leftAttempts.innerHTML = 11 - numAttempts 
guesses.innerHTML = ""
userInput.removeAttribute('disabled')
startOver.removeChild(p)
playGame = true
}) 
      }
