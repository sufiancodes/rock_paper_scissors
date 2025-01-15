let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;  // Track the number of rounds played

// Get the DOM elements for displaying scores and winner message
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const winnerDisplay = document.getElementById("winner-display");  // Element to show final winner message

function getComputerChoice() {
    // Function returns Rock, Paper, or Scissors randomly
    let result = Math.random();
    if (result < 0.30) {
        return 'rock';
    } else if (result > 0.30 && result < 0.75) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function playRound(computerChoice, humanChoice) {
    // This function performs one round of rock-paper-scissors
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore++;
        console.log("You won! Paper beats Rock");
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        console.log("You lost! Paper beats Rock");
    } else if (computerChoice === 'scissor' && humanChoice === 'rock') {
        humanScore++;
        console.log("You won! Rock beats Scissors");
    } else if (computerChoice === 'rock' && humanChoice === 'scissor') {
        computerScore++;
        console.log("You lost! Rock beats Scissors");
    } else if (computerChoice === 'scissor' && humanChoice === 'paper') {
        computerScore++;
        console.log("You lost! Scissors beats Paper");
    } else if (computerChoice === humanChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else {
        humanScore++;
        console.log("You won! Scissors beats Paper");
    }

    // Increase round count
    roundsPlayed++;

    // Display the current scores in the DOM
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    // If 5 rounds have been played, print the final winner and reset round count
    if (roundsPlayed === 5) {
        finalWinner();
        roundsPlayed = 0; // Reset rounds played after printing the final winner
        humanScore = 0;  // Optionally reset the score
        computerScore = 0;  // Optionally reset the score
    }
}

function finalWinner() {
    // Determine the final winner and display the result
    let winnerMessage = '';
    if (computerScore === humanScore) {
        winnerMessage = "It's a tie!";
    } else if (computerScore > humanScore) {
        winnerMessage = `The Computer won! Score: ${computerScore} | Your score: ${humanScore}`;
    } else {
        winnerMessage = `You won! Score: ${humanScore} | Computer score: ${computerScore}`;
    }

    // Display the winner message below the scores
    winnerDisplay.textContent = winnerMessage;
}

const buttons = document.querySelectorAll("button");

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent.toLowerCase(); // Get the choice from the button text
        const computerChoice = getComputerChoice(); // Generate computer's choice
        console.log("Computer chose: " + computerChoice);
        
        // Play the round
        playRound(computerChoice, humanChoice);
    });
});
