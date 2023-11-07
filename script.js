function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(){
    let playerSelection = "";
    playerSelection = prompt("Choose rock, paper, or scissors");

    if (playerSelection == null){
        console.log("Please enter rock, paper, or scissors");
        return getPlayerChoice();
    }
    
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || 
        playerSelection === "paper" || 
        playerSelection === "scissors"){
            return playerSelection;
    }
    else {
        console.log("Please enter rock, paper, or scissors");
        return getPlayerChoice();
        
    }
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