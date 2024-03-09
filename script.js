function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if (choice === 1) {
        choice = 'rock';
    } else if (choice === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}


function play(playerSelection, computerSelection) {

    displayChoices();
    let result;

    if (playerSelection === computerSelection) {
        result = "Tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
                || (playerSelection === 'scissors' && computerSelection === 'paper')
                || (playerSelection === 'paper' && computerSelection === 'rock')) {
                    result = "You win";
    } else {
        result = "You lose";
    }

    return result;
}


function displayChoices() {
    console.log("Your selection: " + playerChoice);
    console.log("Computer selection: " + computerChoice);
}


let computerChoice = getComputerChoice();
let playerChoice = (prompt("Please enter your selection").toLowerCase());

console.log(play(playerChoice, computerChoice));