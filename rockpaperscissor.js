let computerWin = 0;
let playerWin = 0;
let ties = 0;

const buttons = document.querySelector('.buttons');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissor');
const displayResult = document.querySelector('.result');
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const tieScore = document.querySelector('.tie');
const playAgain = document.querySelector('#playagain');


function play() {
  var audio = document.getElementById("click");
  audio.play();
}

rock.addEventListener('click', () => {
  playRound("Rock", computerPlay())
  if (playerWin === 5 || computerWin === 5) {
    declareWinner();
  }
});

paper.addEventListener('click', () => {
  playRound("Paper", computerPlay())
  if (playerWin === 5 || computerWin === 5) {
    declareWinner();
  }
});

scissors.addEventListener('click', () => {
  playRound("Scissors", computerPlay())
  if (playerWin === 5 || computerWin === 5) {
    declareWinner();
  }
});


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function computerPlay() {
  random = Math.floor(Math.random() * 3)

  if (random === 0) {
    return "Rock";
  }

  if (random === 1) {
    return "Paper";
  }

  if (random === 2) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionCaseInsensitive = capitalize(playerSelection.toLowerCase());

    // player wins
    if ((playerSelectionCaseInsensitive === "Rock" && computerSelection === "Scissors") ||
      (playerSelectionCaseInsensitive === "Scissors" && computerSelection === "Paper") ||
      (playerSelectionCaseInsensitive === "Paper" && computerSelection === "Rock")) {

      playerWin++;
      displayResult.textContent = "You Win! " + playerSelectionCaseInsensitive + " beats " + computerSelection + ".";
      playerScore.textContent = playerWin;
    }
    // computer wins
    if ((playerSelectionCaseInsensitive === "Rock" && computerSelection === "Paper") ||
      (playerSelectionCaseInsensitive === "Scissors" && computerSelection === "Rock") ||
      (playerSelectionCaseInsensitive === "Paper" && computerSelection === "Scissors")) {

      computerWin++;
      displayResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelectionCaseInsensitive + ".";
      computerScore.textContent = computerWin;
    }
    // tie
    if (playerSelectionCaseInsensitive === computerSelection) {
      ties++;
      displayResult.textContent = "Tie! You both picked " + playerSelectionCaseInsensitive + ".";
      tieScore.textContent = ties;
    }
}

function declareWinner() {
buttons.classList.add("disappear");
playAgain.classList.remove("disappear");

  if (computerWin > playerWin) {
    displayResult.textContent = ("Computer Wins! Computer won " + computerWin + " rounds. There was " + ties + " ties. Player won " + playerWin + " rounds.")
  }
  else {
    displayResult.textContent = ("Player Wins! Player won " + playerWin + " rounds. There was " + ties + " ties. Computer won " + computerWin + " rounds.")
  }
}

function restartGame() {
   computerWin = 0;
   playerWin = 0;
   ties = 0;
  playAgain.classList.add("disappear");
  buttons.classList.remove("disappear");
  tieScore.textContent = "0";
  playerScore.textContent = "0";
  computerScore.textContent = "0";
}

