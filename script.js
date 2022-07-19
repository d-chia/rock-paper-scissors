//declare variables globally

let playerSelection = "";
let computerSelection ="";
let playerScore = 0;
let computerScore = 0;


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

//functions for tie, playerWin and computerWin
//return messages as strings

function tie() {
    return console.log("Tie! Play again!");
}

function playerWin() {
    playerScore++;
    return console.log("You won! " + playerSelection + " beats " + computerSelection + "!");
}

function computerWin() {
    computerScore++;
    return console.log("You lost! " + computerSelection + " beats " + playerSelection + "!");
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
        console.log("Wrong input. Try again with rock, paper, or scissors!");
    }
}

//function for game
//ask user for input
//make lowercase input playerSelection
//run function for one round 
//loop 5 times

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerInput = prompt("What's your pick? Rock, paper, or scissors?", "");
//         playerSelection = playerInput.toLowerCase();
//         computerSelection = computerPlay();
//         playRound (playerSelection, computerSelection);
//     }

//compare final scores
//display result message
//     if (playerScore > computerScore) {
//         return console.log("You won " + playerScore + " to " + computerScore)
//     }
//     else if (playerScore > computerScore) {
//         return console.log("You lost " + playerScore + " to " + computerScore)
//     }
//     else {
//         return console.log("It's a tie! " + playerScore + " to " + computerScore)
//     }
// };

//add event listeners for all rps buttons that plays a round with button id vs computerPlay

const buttons = document.querySelectorAll(".rpsButton");

buttons.forEach((button) => 
    {button.addEventListener("click", () => playRound(button.id, computerPlay()))
});




// game();