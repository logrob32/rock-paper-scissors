// Create variable for computer's choice
let computerChoice;
// Create variable for user's choice
let humanChoice;
// Get computer's choice
function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  } else if (choice <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
// Get user's choice. This should only allow the user to choose rock, paper, or scissors
function getHumanChoice() {
  const choice = prompt(
    "Please choose rock, paper, or scissors."
  ).toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("You must choose rock, paper, or scissors.");
    return getHumanChoice();
  }
}
// Build conditional logic for determining winner
// Evaluate the choices and determine a winner
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    ties += 1;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanWins += 1;
    } else if (computerChoice === "paper") {
      computerWins += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanWins += 1;
    } else if (computerChoice === "scissors") {
      computerWins += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanWins += 1;
    } else if (computerChoice === "rock") {
      computerWins += 1;
    }
  }
}
// Keep track of winners
let humanWins = 0;
let computerWins = 0;
let ties = 0;
// Simulate round
function playGame() {
  console.log("Game is being played");
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  alert(`
    Human Choice: ${humanChoice}
    Computer Choice: ${computerChoice}
    Human Score: ${humanWins}
    Computer Score: ${computerWins}
    Ties ${ties}`);
}
let rounds = 0;
while (rounds < 5) {
  playGame();
  rounds = humanWins + computerWins + ties;
  console.log(rounds);
}
