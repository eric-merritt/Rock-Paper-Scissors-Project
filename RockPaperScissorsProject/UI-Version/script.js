document.body.onload = game;



document.body.style.width = '80%';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'row';
document.body.style.margin = 'auto';
document.body.style.alignContent = 'center';
document.body.style.padding = '20px';
document.body.style.backgroundColor = 'gray';

const gameContainer = document.querySelector('div','.game');
        gameContainer.style.display = 'flex';
        gameContainer.style.flexDirection = 'column';
        gameContainer.style.border = '5px';
        gameContainer.style.borderStyle = 'groove';
        gameContainer.style.borderRadius = '10px';
        gameContainer.style.borderColor = 'darkred';
        gameContainer.style.padding = '20px';
        gameContainer.style.margin = 'auto';
        gameContainer.style.marginTop = '150px';
        gameContainer.style.backgroundColor = 'rebeccapurple';

function newGame(){
    gameContainer.innerHTML = '';
    game();
} 

function game(){   

    const resultsDiv = document.createElement('div');
        resultsDiv.style.display = 'flex';
        resultsDiv.style.flexDirection = 'row';
        resultsDiv.style.justifyContent = 'space-center';
        

    const playerScoreboard = document.createElement('div');
        playerScoreboard.style.display = 'flex';
        playerScoreboard.style.flexDirection = 'column';
        playerScoreboard.style.alignItems = 'center';
        playerScoreboard.style.alignContent = 'space-between';
        playerScoreboard.style.paddingRight = '15px';
        playerScoreboard.style.paddingLeft = '15px'

        const playerScoreboardLabel = document.createElement('h1');
            playerScoreboardLabel.innerText = 'Player Score:';

        const playerScoreDisplay = document.createElement('p');
            playerScoreDisplay.innerText = '0';
            playerScoreDisplay.style.display = 'flex';
            playerScoreDisplay.style.flexDirection = 'row';
            playerScoreDisplay.style.width = '250px';
            playerScoreDisplay.style.height = '125px';
            playerScoreDisplay.style.backgroundColor = 'lightblue';
            playerScoreDisplay.style.border = '5px';
            playerScoreDisplay.style.borderStyle = 'inset';
            playerScoreDisplay.style.borderColor = 'darkred';
            playerScoreDisplay.style.borderRadius = '10px';
            playerScoreDisplay.style.fontSize = '24px';
            playerScoreDisplay.style.justifyContent = 'center';
            playerScoreDisplay.style.alignItems = 'center';
            playerScoreDisplay.style.fontWeight = '700';



    playerScoreboard.appendChild(playerScoreboardLabel);
    playerScoreboard.appendChild(playerScoreDisplay);

    const centerDiv = document.createElement('div');
        centerDiv.style.display = 'flex';
        centerDiv.style.flexDirection = 'column'
        centerDiv.style.alignItems = 'center';
        centerDiv.style.alignContent = 'space-between';

    const resultsLabel = document.createElement('h1');
        resultsLabel.innerText = 'Round Results:';

    const resultsDisplay = document.createElement('p');
        resultsDisplay.style.width = '400px';
        resultsDisplay.style.height = '125px';
        resultsDisplay.style.display = 'flex';
        resultsDisplay.style.flexDirection = 'row';
        resultsDisplay.style.backgroundColor = 'lightblue';
        resultsDisplay.style.border = '5px';
        resultsDisplay.style.borderStyle = 'inset';
        resultsDisplay.style.borderColor = 'darkred';
        resultsDisplay.style.borderRadius = '10px';
        resultsDisplay.style.fontSize = '24px';
        resultsDisplay.style.justifyContent = 'center';
        resultsDisplay.style.alignItems = 'center';
        resultsDisplay.innerHTML = 'Make Your Move!';
        resultsDisplay.style.fontWeight = '600';

    
    centerDiv.appendChild(resultsLabel);
    centerDiv.appendChild(resultsDisplay);

    const computerScoreboard = document.createElement('div');
        computerScoreboard.style.display = 'flex';
        computerScoreboard.style.flexDirection = 'column';
        computerScoreboard.style.alignItems = 'center';
        computerScoreboard.style.alignContent = 'space-between';
        computerScoreboard.style.paddingLeft = '15px';
        computerScoreboard.style.paddingRight = '15px';

        const computerScoreboardLabel = document.createElement('h1');
            computerScoreboardLabel.innerText = 'Computer Score:';
    
        const computerScoreDisplay = document.createElement('p');
            computerScoreDisplay.innerText = '0';
            computerScoreDisplay.style.display = 'flex';
            computerScoreDisplay.style.flexDirection = 'row';
            computerScoreDisplay.style.width = '250px';
            computerScoreDisplay.style.height = '125px';
            computerScoreDisplay.style.backgroundColor = 'lightblue';
            computerScoreDisplay.style.border = '5px';
            computerScoreDisplay.style.borderStyle = 'inset';
            computerScoreDisplay.style.borderColor = 'darkred';
            computerScoreDisplay.style.borderRadius = '10px';
            computerScoreDisplay.style.fontSize = '24px';
            computerScoreDisplay.style.justifyContent = 'center';
            computerScoreDisplay.style.alignItems = 'center';
            computerScoreDisplay.style.fontWeight = '700';

    computerScoreboard.appendChild(computerScoreboardLabel);
    computerScoreboard.appendChild(computerScoreDisplay);

    resultsDiv.appendChild(playerScoreboard);
    resultsDiv.appendChild(centerDiv);
    resultsDiv.appendChild(computerScoreboard);
    
    gameContainer.appendChild(resultsDiv);

    const playerBtnDiv = document.createElement('div');
        playerBtnDiv.style.display = 'flex';
        playerBtnDiv.style.flexDirection = 'row';
        playerBtnDiv.style.justifyContent = 'center';
        playerBtnDiv.style.alignItems = 'space-around';
    
    
    const rockBtn = document.createElement('button');
        rockBtn.setAttribute('value','rock');
        rockBtn.innerText = rockBtn.value.toUpperCase();
        rockBtn.style.width = '170px';
        rockBtn.style.fontSize = '24px';
        rockBtn.style.fontWeight = '700';
        rockBtn.style.padding = '10px';
        rockBtn.style.borderRadius = '10px';
        rockBtn.style.backgroundColor = 'darkred';
        rockBtn.style.color = 'lightblue';
        
    
    const paperBtn = document.createElement('button');
        paperBtn.setAttribute('value','paper');
        paperBtn.innerText = paperBtn.value.toUpperCase();
        paperBtn.style.fontSize = '24px';
        paperBtn.style.fontWeight = '700';
        paperBtn.style.padding = '10px';
        paperBtn.style.borderRadius = '10px';
        paperBtn.style.backgroundColor = 'darkred';
        paperBtn.style.color = 'lightblue';
        paperBtn.style.width = '170px';
        paperBtn.style.marginRight = '20px';
        paperBtn.style.marginLeft = '20px'

    
    const scissorsBtn = document.createElement('button');
        scissorsBtn.setAttribute('value','scissors');
        scissorsBtn.innerText = scissorsBtn.value.toUpperCase();
        scissorsBtn.style.fontSize = '24px';
        scissorsBtn.style.fontWeight = '700';
        scissorsBtn.style.padding = '10px';
        scissorsBtn.style.borderRadius = '10px';
        scissorsBtn.style.backgroundColor = 'darkred';
        scissorsBtn.style.color = 'lightblue';
        scissorsBtn.style.width = '170px';
    
        playerBtnDiv.appendChild(rockBtn);
    
        playerBtnDiv.appendChild(paperBtn);
    
        playerBtnDiv.appendChild(scissorsBtn);
    
        gameContainer.appendChild(playerBtnDiv);

        


    
let playerScore = 0;
let computerScore = 0;

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
            resultsDisplay.innerText = "It's a tie!";

        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
            if (computerScore === 4){
                computerScore++;
                computerScoreDisplay.innerText = computerScore;
                resultsDisplay.innerText = 'Game over! Computer Wins!\nClick any button to play again!';
                playerBtnDiv.removeEventListener('click',getPlayerSelection);
                playerBtnDiv.addEventListener('click',newGame);
                computerScore = 0; 
                playerScore = 0;

            } else {
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            resultsDisplay.innerText = "You lose! Paper beats rock!";
            }

        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
            if (playerScore === 4){
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            resultsDisplay.innerText = 'Game over! Player Wins!\nClick any button to play again!';
            playerBtnDiv.removeEventListener('click',getPlayerSelection);
            playerBtnDiv.addEventListener('click',newGame);
            computerScore = 0; 
            playerScore = 0;

            } else {
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            resultsDisplay.innerText = "You win! Rock beats scissors!";
            }

        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
            if (computerScore === 4){
                computerScore++;
                computerScoreDisplay.innerText = computerScore;
                resultsDisplay.innerText = 'Game over! Computer Wins!\nClick any button to play again!';
                playerBtnDiv.removeEventListener('click',getPlayerSelection);
                playerBtnDiv.addEventListener('click',newGame);
                computerScore = 0; 
                playerScore = 0;

            } else {
            computerScore++; 
            computerScoreDisplay.innerText = computerScore;
            resultsDisplay.innerText = "You lose! Scissors beats paper!";
            }

        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
            if (playerScore === 4){
                playerScore++;
                playerScoreDisplay.innerText = playerScore;
                resultsDisplay.innerText = 'Game over! Player Wins!\nClick any button to play again!';
                playerBtnDiv.removeEventListener('click',getPlayerSelection);
                playerBtnDiv.addEventListener('click',newGame);
                computerScore = 0; 
                playerScore = 0;

                } else {
            playerScore++; 
            playerScoreDisplay.innerText = playerScore;
            resultsDisplay.innerText = "You win! Paper beats rock!";
                }

        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
            if (computerScore === 4){
                computerScore++;
                computerScoreDisplay.innerText = computerScore;
                resultsDisplay.innerText = 'Game over! Computer Wins!\nClick any button to play again!';
                playerBtnDiv.removeEventListener('click',getPlayerSelection);
                playerBtnDiv.addEventListener('click',newGame);
                computerScore = 0; 
                playerScore = 0;

            } else {
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            resultsDisplay.innerText = "You lose! Rock beats scissors!";
            }

        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
            if (playerScore === 4){
                playerScore++;
                playerScoreDisplay.innerText = playerScore;
                resultsDisplay.innerText = 'Game over! Player Wins!\nClick any button to play again!';
                playerBtnDiv.removeEventListener('click',getPlayerSelection);
                playerBtnDiv.addEventListener('click',newGame);
                computerScore = 0; 
                playerScore = 0;

                } else {
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            resultsDisplay.innerText = "You win! Scissors beats paper!";
                }
        }

     
    


          

    
    }
    
    function getPlayerSelection(){
      const playerSelection = event.target.value;
    const computerSelection = getComputerChoice();

        playRound(playerSelection,computerSelection)   
    }

    playerBtnDiv.addEventListener('click',getPlayerSelection);
    

}





    
    





    
    


    

                            










    
