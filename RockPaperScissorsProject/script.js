function game () {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const computerOptions = ['rock','paper','scissors'];
    const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomChoice = (Math.floor(Math.random(computerOptions) * 3)); 
    
    if (randomChoice === 0) {
        return "rock";
    }   if (randomChoice === 1) {
        return "paper";
    }   if (randomChoice === 2) {
        return "scissors";
    }
}

    const playerSelection = document.getElementsByClassName(buttongroup);

    playerSelection.addEventListener("click", (event) => {
        const isButton = event.target.nodeName === "BUTTON";
        if (!isButton) {
            return;
        }
    })
    
    
function playRound(playerSelection,computerSelection) { 
           
        const playerScoreBoard = document.querySelector(".p-count");
        const computerScoreBoard = document.querySelector(".c-count");

       if (playerSelection === 'rock') {
       if (computerSelection === 'rock')  {
        return "It's a tie!!"; 
    
    } else if (computerSelection === 'paper') {
        return "The computer wins.";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else  {
        return "You win this round!!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;}

      if (playerSelection === "paper") {
      if (computerSelection === "paper") {
         return "It's a tie!!";
    }  else if (computerSelection === "scissors") {
         return "The computer wins.";
         computerScore++;
         computerScoreBoard.textContent = computerScore;
    } else {
        return "You win this round!!";}
        playerScore++;
        playerScoreBoard.textContent = playerScore;
     if (playerSelection === "scissors") {
     if (computerSelection === "rock") {
        return "The computer wins.";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    } else if (computerSelection === "paper") {
        return "You win this round!!";
    } else {
        return "It's a tie!!";
    }
}
    }
}
playRound(); 
}

game();

}
    
