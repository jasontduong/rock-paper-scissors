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
      if ((playerSelectionCaseInsensitive === "Rock" && computerSelection === "Scissors")||
          (playerSelectionCaseInsensitive === "Scissors" && computerSelection === "Paper") ||
          (playerSelectionCaseInsensitive === "Paper" && computerSelection === "Rock")) {
          console.log(("You Win! " + playerSelectionCaseInsensitive + " beats " + computerSelection))
        return "player";
      }
      // computer wins
      if ((playerSelectionCaseInsensitive === "Rock" && computerSelection === "Paper") ||
          (playerSelectionCaseInsensitive === "Scissors" && computerSelection === "Rock") ||
          (playerSelectionCaseInsensitive === "Paper" && computerSelection === "Scissors")) {
          console.log(("You Lose! " + computerSelection + " beats " + playerSelectionCaseInsensitive)) 
        return "computer";
      }
      // tie
      else if (playerSelectionCaseInsensitive === computerSelection) {
        console.log(("Tie! You both picked " + playerSelectionCaseInsensitive))
        return "tie";
      }
  }

  function game() {
    let computerWin = 0;
    let playerWin = 0;
    let ties = 0;
    let wins = 0;
    for (let i = 1; wins < 5; i++) {
      console.log ("Round " + i);
      result = playRound(prompt("Pick rock, paper, or scissors."), computerPlay());

      if (result === "computer") {
        computerWin++
        wins++
      }
      if (result === "player") {
        playerWin++
        wins++
      }
      if (result === "tie") {
        ties++
      }
    }
    if (computerWin > playerWin) {
      return console.log("Computer Wins! Computer won " + computerWin + " rounds. There was " + ties + " ties. Player won " + playerWin + " rounds.")
    }
    else {
    return console.log("Player Wins! Player won " + playerWin + " rounds. There was " + ties + " ties. Computer won " + computerWin + " rounds.")
    }

  }

  game();


