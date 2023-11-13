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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
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