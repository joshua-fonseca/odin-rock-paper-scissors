"use strict"

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let choice = Math.floor(Math.random()*3);
  return choice === 0 ?
    "rock" : choice === 1 ?
    "paper" : "scissors";
}

// event listener
const choices = document.querySelector("#choices");
choices.addEventListener("click", (event) => {
  let playerSelection = "";

  switch(event.target.id) {
    case "rock":
      playerSelection = "rock";
      break;
    case "paper":
      playerSelection = "paper";
      break;
    case "scissors":
      playerSelection = "scissors";
      break;
  }

  playRound(playerSelection, getComputerChoice());

  checkScore();
});

let checkScore = () => {
    if(humanScore === 5) {
      console.log("player wins as they reached 5 points");
      disableButtons();
    } else if (computerScore === 5) {
      console.log("computer wins as they reached 5 points");
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
    console.log("tie");
    return;
  }
  if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper") {
    console.log("player wins");
    humanScore++;
  } else {
    console.log("computer wins");
    computerScore++;
  }
}