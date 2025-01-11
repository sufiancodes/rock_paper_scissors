function getComputerChoice() {
    //Function returns the Rock,Paper or Scissor randomly 
    let result = Math.random()
    if (result < 0.30) {
        return 'rock';
    }
    else if (result > 0.50 && result < 0.75) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}
function getHumanChoice() {

    //Function takes user input and return it
    let Choice = prompt("Give you Choice").toLocaleLowerCase();
    return Choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    //This function perfome the one round of rock paper scissor
    if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++;
        return console.log("You won! Paper Beats Rock");
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++;
        return console.log("You lost! Paper Beats Rock");
    }
    else if (computerChoice == 'scissor' && humanChoice == 'rock') {
        humanScore++
        return console.log("You won! Rock Beats Scissor");
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissor') {
        computerScore++;
        return console.log("You lost! Rock Beats Scissor");
    }
    else if (computerChoice == 'scissor' && humanChoice == 'paper') {
        computerScore++;
        return console.log("You lost! Scissor Beats Paper");
    }
    else if (computerChoice == humanChoice) {
        return console.log("Match tie Both chose" + humanChoice);
    }
    else {
        humanScore++;
        return console.log("You won! Scissor Beats Paper");
    }
}

function playGame() {
    //1st Round
    let getHumanSelection = getHumanChoice();
    let getComputerSelection = getComputerChoice();
    playRound(getHumanSelection, getComputerSelection);
    //2nd Round
    getHumanSelection = getHumanChoice();
    getComputerSelection = getComputerChoice();
    playRound(getHumanSelection, getComputerSelection);
    //3rd Round
    getHumanSelection = getHumanChoice();
    getComputerSelection = getComputerChoice();
    playRound(getHumanSelection,getComputerSelection);
    //4 Round
    getHumanSelection = getHumanChoice();
    getComputerSelection = getComputerChoice();
    playRound(getHumanSelection, getComputerSelection);
    //5th Round
    getHumanSelection = getHumanChoice();
    getComputerSelection = getComputerChoice();
    playRound(getHumanSelection, getComputerSelection);
    //Printing Result based on the outcome
    if (computerScore == humanScore) {
        console.log("Wow its a tie");
        console.log("Here is your Scores " + humanScore + "Here is computer Score " + computerScore);
        return;
    }
    else if(computerScore > humanScore){
        console.log("The Computer won! Score is " + computerScore +" and Your Score is "+ humanScore)
        return;
    }
    else {
        console.log("You won! Socre is " + humanScore +" and Computer score is "+ computerScore)
        return;
    }
}

playGame();