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


function play() {

    let computerSelection = getComputerChoice();
    let playerSelection = (prompt("Please enter your selection").toLowerCase());

    displayChoices(playerSelection, computerSelection);
    
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


function displayChoices(playerSelection, computerSelection) {
    console.log("Your selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
}


function playGame() {
    
    for (i = 1; i <= 10; i++) {
        console.log(play());
    }
}


playGame();