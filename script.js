"use strict"

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const choices = document.querySelector("#choices");
const playerText = document.querySelector("#player-score")
const computerText = document.querySelector("#computer-score")
const gameMessage = document.querySelector("#game-status")

let getComputerChoice = () => {
  let choice = Math.floor(Math.random()*3);
  return choice === 0 ?
    "rock" : choice === 1 ?
    "paper" : "scissors";
}

// event listener
choices.addEventListener("click", (event) => {
  if (gameOver) return;

  let playerSelection = "";

  switch(event.target.id) {
    case "rock":
    case "paper":
    case "scissors":
      playerSelection = event.target.id;
      break;
    default:
      return; // clicked something else
  }

  playRound(playerSelection, getComputerChoice());
  checkScore();
});

let checkScore = () => {
    if(humanScore === 5 || computerScore === 5) {
      gameMessage.textContent = humanScore === 5 ? "Player wins!" : "Computer wins!";
      gameOver = true;
      disableButtons();
    }
}

let disableButtons = () => {
  const buttons = choices.querySelectorAll("button");
  buttons.forEach(button => button.disabled = true);
}

let playRound = (humanChoice, computerChoice) => {
  // console.log(`player chose: ${humanChoice}, computer chose: ${computerChoice}`);
  // win logic
  if (humanChoice === computerChoice) {
    gameMessage.textContent = "tie!";
    return;
  }
  if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper") {
    // console.log("player wins");
    gameMessage.textContent = "player won this round!";
    humanScore++;
    playerText.textContent = humanScore;
  } else {
    gameMessage.textContent = "computer won this round!";
    computerScore++;
    computerText.textContent = computerScore;
  }
}