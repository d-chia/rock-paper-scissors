//function for computer's random selection:
//selection with rock, paper, scissors is defined
//random number from 0-3 is generated
//matching choice from selection is picked and returned  

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    let computerChoice = choice[num];
    return computerChoice;
}


//function for one round player vs computer
//compare player input with computer choice
//if it's the same: tie
//if player picked rock and computer picked scissor: player win
//if player picked rock and computer picked paper: computer win
//... 
//return result as call for function

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return tie();
        }
        else if (computerSelection == "scissors") {
            return playerWin();
        }
        else {
            return computerWin();
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return tie();
        }
        else if (computerSelection == "rock") {
            return playerWin();
        }
        else {
            return computerWin();
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return tie();
        }
        else if (computerSelection == "paper") {
            return playerWin();
        }
        else {
            return computerWin();
        }
    }
    else {
        return "Wrong input. Try again with rock, paper, or scissors!"
    }
}

//functions for tie, playerWin and computerWin
//return messages as strings

function tie() {
    return "Tie! Play again!"
};

function playerWin() {
    return ("You won! " + playerSelection + " beats " + computerSelection + "!");
};

function computerWin() {
    return ("You lost! " + computerSelection + " beats " + playerSelection + "!");
}

//function for game
//ask user for input
//make lowercase input playerSelection
//run function for one round
//start new round with new input

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("What's your pick? Rock, paper, or scissors?", "");
        let playerSelection = playerInput.toLowerCase();
        let computerSelection = computerPlay();
        playRound (playerSelection, computerSelection);
    }
}