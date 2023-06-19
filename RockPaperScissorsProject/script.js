function game(){
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function getComputerChoice(){
        let computerOptions = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * computerOptions.length);
            if (randomNumber == 0){
                return "rock";
            } else if (randomNumber == 1){
                return "paper";
            } else if (randomNumber == 2){
                return "scissors";
            }       
    }

    function playRound(playerSelection,computerSelection){
        if (playerSelection.toLowerCase() == computerSelection){
            moves++;
            movesLeft = `${5 - moves}`;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "It's a tie!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
            moves++;
            movesLeft = `${5 - moves}`;
            computerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You lose! Paper beats rock!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
            moves++;
            movesLeft = `${5 - moves}`;
            playerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You win! Rock beats scissors!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
            moves++;
            movesLeft = `${5 - moves}`;
            computerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You lose! Scissors beats paper!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
            moves++;
            movesLeft = `${5 - moves}`;
            playerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You win! Paper beats rock!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
            moves++;
            movesLeft = `${5 - moves}`;
            computerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You lose! Rock beats scissors!\n" + `${scoreboard}`;
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
            moves++;
            movesLeft = `${5 - moves}`;
            playerScore++;
            scoreboard = "Player: " + `${playerScore}` + " Computer: " + `${computerScore}` + "\nMoves Left: " + `${movesLeft}`; 
            return "You win! Scissors beats paper!\n" + `${scoreboard}`;
        }
    }

for (i=1; i<=5; i++){   
const playerSelection = prompt("Make a move! Rock/Paper/Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
    if (moves == 5){
        if (playerScore > computerScore){
            var winner = "Player"
        } else if (computerScore > playerScore){
            var winner = "Computer";
        }
            alert("Game over! " + `${winner}` + " wins!");
        }
}

}

game();



    
    


    

                            










    
