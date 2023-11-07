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
