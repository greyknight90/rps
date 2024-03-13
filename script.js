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


function displayChoices(playerSelection, computerSelection) {
    console.log("Your selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
}


function playGame() {
    let score = 0;
    let result;

    for (i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = (prompt("Please enter your selection").toLowerCase());

        displayChoices(playerSelection, computerSelection);

        if (playerSelection === computerSelection) {
            result = "Tie";
        } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
                    || (playerSelection === 'scissors' && computerSelection === 'paper')
                    || (playerSelection === 'paper' && computerSelection === 'rock')) {
                        result = "You win";
                        score += 1;
        } else {
            result = "You lose";
        }

        console.log(result);
        console.log("Your score: " + score);
    }
}


playGame();