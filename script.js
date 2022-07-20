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


//add event listeners for all rps buttons
//passes selection as button.id to playRound along with random computerPlay

const buttons = document.querySelectorAll(".rpsButton");

buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, computerPlay());
        })
    }
);


//function for one round player vs computer
//compare player input with computer choice
//if it's the same: tie

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
        tie();
        }
        else if (computerSelection == "scissors") {
        playerWin(playerSelection, computerSelection);
        }
        else {
        computerWin(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
        tie();
        }
        else if (computerSelection == "rock") {
        playerWin(playerSelection, computerSelection);
        }
        else {
        computerWin(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
        tie();
        }
        else if (computerSelection == "paper") {
        playerWin(playerSelection, computerSelection);
        }
        else {
        computerWin(playerSelection, computerSelection);
        }
    }
    endGame();
}


//functions for tie, playerWin and computerWin
//take playerSelection and computerSelection from playRound as arguments 
//increment score counter and show messages with result on page; 

const resultMessage = document.querySelector("#resultMessage");

function tie() {
    resultMessage.innerText = "Tie! Play again!";
}

function playerWin(playerSelection, computerSelection) {
    playerScore++;
    updateScore();
    resultMessage.innerText = "Point for you! " + playerSelection + " beats " + computerSelection + "!";
    endGame();
}

function computerWin(playerSelection, computerSelection) {
    computerScore++;
    updateScore();
    resultMessage.innerText = "Oh no! " + computerSelection + " beats " + playerSelection + "!";
    endGame();
}


//function to update/display score for player in scoreboard section

const playerCounter = document.querySelector("#playerCounter");
const computerCounter = document.querySelector("#computerCounter");

function updateScore () {
    //update playerScore
    playerCounter.textContent = playerScore;
    //update computerScore
    computerCounter.textContent = computerScore;
};


//function to end game when a player is at 5
//displays winner

// function endGame () {
//     if (playerScore == 5) {
//         alert("You won " + playerScore + " to " + computerScore);
//         computerScore = 0;
//         playerScore = 0;
//         updateScore();
//     } else if (computerScore == 5) {
//         alert("You lost " + playerScore + " to " + computerScore);
//         computerScore = 0;
//         playerScore = 0;
//         updateScore();
//     }
// }

const headerScore = document.querySelector("#headerScore");

function endGame () {
    if (playerScore == 5) {
        headerScore.innerText = "You won! The final score is:";
    } else if (computerScore ==5) {
        headerScore.innerText = "You lost! The final score is:";
    }
}




//REMOVED
//function for game of 5
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


// game();