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

