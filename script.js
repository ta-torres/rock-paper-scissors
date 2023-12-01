let playerScore = 0;
let computerScore = 0;
let roundResult = "";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function isPlayerWin(playerSelection, computerSelection){
    return (playerSelection === "rock" && computerSelection === "scissors") ||
           (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "scissors" && computerSelection === "paper");
}

function isGameOver(playerScore, computerScore){
    return playerScore === 5 || computerScore === 5;
}

function isGameWin(playerScore, computerScore){
    return playerScore > computerScore;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundResult = "tie";
    }
    else if (isPlayerWin(playerSelection, computerSelection)){
        roundResult = "win";
        playerScore++;
    }
    else {
        roundResult = "lose";
        computerScore++;
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundResultDisplay = document.querySelector(".result");

function handleClick (playerSelection) {
    if (isGameOver(playerScore, computerScore)){
        return;
    }

    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScoreDisplay(roundResult, playerSelection, computerSelection);

    if (isGameOver(playerScore, computerScore)) {
        displayFinalResult();
    }
}

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));

function updateScoreDisplay(roundResult, playerSelection, computerSelection){
    if (roundResult === "tie"){
        roundResultDisplay.textContent = `It's a tie!`;
    }
    else if (roundResult === "win"){
        roundResultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (roundResult === "lose"){
        roundResultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundResultDisplay.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function displayFinalResult() {
    const finalMessage = isGameWin(playerScore, computerScore) ? 'You won the game!' : 'You lost the game!';
    roundResultDisplay.textContent = finalMessage;

    if (isGameWin(playerScore, computerScore)) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    
    const gameOverMessage = document.getElementById('game-over-message');
    gameOverMessage.style.display = 'flex';

    const retryButton = document.getElementById('retry-button');
    retryButton.onclick = function() {
        resetScores();
        gameOverMessage.style.display = 'none';
    }
}