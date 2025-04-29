// console.log("Hello world!");

// step 2
// create a function getComputerChoice that takes in no parameters
// randomly returns “rock”, “paper” or “scissors” in all lower case
// create a integer variable called choice equal to a random number between 0-2 (inclusive)
// if choice is equal to 0, return rock
// else if choice is equal to 1, return paper
// else return scissors

// step 3
// create a function getHumanChoice that takes in no parameters
// ask "throw your choice" and the user inputs correct input ("rock", "paper", "scissors")
// return the user input

// step 4
// create a global integer variable called humanScore, set it to 0
// create a global integer variable called computerScore, set it to 0

// step 5
// create a function playRound that takes in two parameters: humanChoice and computerChoice
// convert humanChoice to lowercase
// if humanChoice is strictly equal to computerChoice, output a tie and return nothing
// if humanChoice is rock and computerChoice is scissors
// or humanChoice is paper and computerChoice is rock
// or humanChoice is scissors and computerChoice is paper
// output player wins, and increment humanScore
// else output computer wins, and increment computerScore
// return nothing

// step 6
// create a function playGame that takes in no parameters
// move the playRound and score variables inside of the new playGame function
// call playRound with the parameters of getHumanChoice() and getComputerChoice(), 5 times
// if humanScore > computerScore, output human wins for best of 5 match
// else if humanScore < computerScore, output computer wins for best of 5 match
// else output game ends in a tie for best of 5 match
// return nothing

// step 7
// call playGame()

"use strict"

function getComputerChoice() {
  let choice = Math.floor(Math.random()*3);
  return choice === 0 ?
    "rock" : choice === 1 ?
    "paper" : "scissors";
}

function getHumanChoice() {
  return prompt("throw your choice");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`player chose: ${humanChoice}, computer chose: ${computerChoice}`);
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("tie");
      return;
    }
    if(humanChoice === "rock" && computerChoice === "scissors"
      || humanChoice === "paper" && computerChoice === "rock"
      || humanChoice === "scissors" && computerChoice === "paper"
    ) {
      console.log("player wins");
      humanScore++;
    } else {
      console.log("computer wins");
      computerScore++;
    }
  }

  for(let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if(humanScore > computerScore) {
    console.log("player wins for best of 5 match");
  } else if (humanScore < computerScore) {
    console.log("computer wins for best of 5 match");
  } else {
    console.log("game ends in a tie for best of 5 match");
  }

}

playGame();