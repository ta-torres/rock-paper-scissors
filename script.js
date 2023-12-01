let playerScore = 0;
let computerScore = 0;
let roundResult = "";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function validatePlayerChoice(playerSelection) {
    if (playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"){
            return true;
    }
    else {
        console.log("Please enter rock, paper, or scissors");
        return false;
    }
}

function getPlayerChoice(){
    let playerSelection = "";
    playerSelection = prompt("Choose rock, paper, or scissors");

    if (playerSelection != null) {
        playerSelection = playerSelection.toLowerCase();
    }

    if (!validatePlayerChoice(playerSelection)){
        return getPlayerChoice();
    }

    return playerSelection;
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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 1;

    for (rounds; rounds <= 5; rounds++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (playRound(playerSelection, computerSelection).includes("win")){
            playerScore++;
        }
        else if (playRound(playerSelection, computerSelection).includes("lose")){
            computerScore++;
        }
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore){
        console.log("You win!");
    }
    else if (playerScore < computerScore){
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}
//game();

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundResultDisplay = document.querySelector(".result");

function handleClick (playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScoreDisplay(roundResult, playerSelection, computerSelection);

    if (isGameOver(playerScore, computerScore)) {
        displayFinalResult();
        resetScores();
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
}

function displayFinalResult() {
    const finalMessage = isGameWin(playerScore, computerScore) ? 'You won the game!' : 'You lost the game!';
    roundResultDisplay.textContent = finalMessage;
}