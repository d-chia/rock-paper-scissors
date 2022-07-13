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

console.log(computerPlay());


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
}


//functions for tie, playerWin and computerWin
//show return message
//add to counters