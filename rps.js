// Set start scores
let playerWins = 0;
let computerWins = 0;
const SCORELIMIT = 5;


// Geneterate the computers choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 2) {
        return 'Scissors';
    } else {
        return 'Error: math does not compute';
    }
}

// Prompt the player for thier choice, make case insensitive and check choice.
function getPlayerChoice(){
    let choice = '';
    let text = prompt('Please enter your choice (Rock, Paper, Scissors): ');
    if (text !== null){
        choice = text.charAt(0).toUpperCase().concat(text.slice(1,text.length).toLowerCase())
    } else {
        console.log('Game Cancelled!');
        return false;
    }
    if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors'){
        return choice;
    } else {
        console.log('Incorrect entry. Please choose either Rock, Paper or Scissors.');
        return getPlayerChoice();
    }
}

// Play a round returning the result
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return 'It\'s a Tie! Play again!';
    } else if ((playerSelection === 'Rock' && computerSelection == 'Scissors') || (playerSelection === 'Scissors' && computerSelection == 'Paper') || (playerSelection === 'Paper' && computerSelection == 'Rock')){
        playerWins += 1;
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if ((computerSelection === 'Rock' && playerSelection == 'Scissors') || (computerSelection === 'Scissors' && playerSelection == 'Paper') || (computerSelection === 'Paper' && playerSelection == 'Rock')){
        computerWins += 1;
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return false;
    }
}

// Check for winner
function checkWinner(){
    if (playerWins > computerWins && playerWins === SCORELIMIT){
        gameOver('Player');
    } else if (playerWins < computerWins && computerWins === SCORELIMIT){
        gameOver('Computer');
    }
}

function generateGame(){
    
    const container = document.querySelector('.container');
    // Create content div
    const content = document.createElement('div');
    content.id = 'content';
    container.appendChild(content);

    // Create result paragraph
    const resultText = document.createElement('p');
    resultText.id = 'result';
    container.appendChild(resultText);

    // Create scorecard with player and computer socres
    const scorecard = document.createElement('div');
    scorecard.classList = 'scorecard';
    container.appendChild(scorecard);

    const playerScore = document.createElement('div');
    playerScore.id = 'playerScore';
    scorecard.appendChild(playerScore);
    playerScore.textContent = 'Player: ' + playerWins;

    const computerScore = document.createElement('div');
    computerScore.id = 'computerScore';
    scorecard.appendChild(computerScore);
    computerScore.textContent = 'Computer: ' + computerWins;

    generateButton('Rock');
    generateButton('Paper');
    generateButton('Scissors');
    
}

// Gameover function to end the game
function gameOver(winner){
    const container = document.querySelector('.container');

    const buttons = document.querySelectorAll('.Selection');
    buttons.forEach(function(button){button.setAttribute('Disabled',true)});
        
    const resultText = document.querySelector('#result');
    resultText.textContent = 'Game Over! ' + winner + ' Wins!';

    const newGameButton = document.createElement('button');
    container.appendChild(newGameButton);
    newGameButton.id = 'newgame';
    newGameButton.textContent = 'New game';
    newGameButton.addEventListener('click', function(){resetGame()});
}

// Remove elements and zero scores to reset game
function resetGame(){
    playerWins = 0;
    computerWins = 0;
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    playerScore.textContent = 'Player: ' + playerWins;
    computerScore.textContent = 'Computer: ' + computerWins;

    const container = document.querySelector('.container');
    
    const resultText = document.querySelector('#result');
    const newGameButton = document.querySelector('#newgame');
    resultText.textContent = '';
    console.log('Reset Game');
    container.removeChild(newGameButton);

    const buttons = document.querySelectorAll('.Selection');
    buttons.forEach(function(button){button.removeAttribute('disabled')});
}

// Create button with event listener
function generateButton(selection){
    const content = document.querySelector('#content');
    const resultText = document.querySelector('#result');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    const newButton = document.createElement('button');
    content.appendChild(newButton);
    newButton.textContent = selection;
    newButton.classList = 'Selection';
    newButton.addEventListener("click", function () {
        const playerSelection = selection;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection,computerSelection)
        resultText.textContent = roundResult;
        playerScore.textContent = 'Player: ' + playerWins;
        computerScore.textContent = 'Computer: ' + computerWins;
        checkWinner();
    })
}
generateGame();