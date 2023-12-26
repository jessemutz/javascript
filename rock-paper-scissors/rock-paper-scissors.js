// Rock Paper Scissors game
//
// @param playerSelection()
// @param computerSelection()

function getRandomChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    return "WIN";
  } else {
    return "LOSE";
  }
}

function playGame() {
  const playerSelection = prompt("Enter your choice.").toUpperCase();
  const computerSelection = getRandomChoice();
  const resultMessage = `Computer chose ${computerSelection}. You`;

  const result = determineWinner(playerSelection, computerSelection);

  alert(`${resultMessage} ${result}!`);
}


// Call the playGame function to start the game
playGame();