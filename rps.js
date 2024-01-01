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
    console.log('Computer chose ' + computerSelection);
    console.log('You chose ' + playerSelection);
    if (playerSelection === computerSelection){
        console.log('It\'s a Tie! Play again!');
        return 'It\'s a Tie! Play again!';
    } else if ((playerSelection === 'Rock' && computerSelection == 'Scissors') || (playerSelection === 'Scissors' && computerSelection == 'Paper') || (playerSelection === 'Paper' && computerSelection == 'Rock')){
        //playerWins += 1;
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if ((computerSelection === 'Rock' && playerSelection == 'Scissors') || (computerSelection === 'Scissors' && playerSelection == 'Paper') || (computerSelection === 'Paper' && playerSelection == 'Rock')){
        //computerWins += 1;
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return false;
    }
}

//Play the game, best of 5 replaying ties.
function game(){
    let computerSelection = '';
    let playerSelection = '';
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 3 && computerWins < 3){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        if (playerSelection === false){
            break;
        }
        result = playRound(playerSelection,computerSelection);
        if (result === 'T'){
            console.log('It\'s a Tie! Play again!');
        }
        else if (result === 'P'){
            playerWins += 1;
            console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
        } else if (result === 'C'){
            computerWins += 1;
            console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        } else {
            console.log('Something went wrong!');
        }
        console.log('Score - Player: ' + playerWins + ' Computer: '+ computerWins);
    }
    console.log('Game Over!');
    if (playerWins > computerWins && playerWins === 3){
        console.log('You Win!');
    } else if (playerWins < computerWins && computerWins === 3){
        console.log('You Lose!');
    }
}

function generateGame(){
    const container = document.querySelector('.container');
    const content = document.createElement('div');
    content.classList = 'content';
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    const resultText = document.createElement('p');
    resultText.classList = 'result';
    content.appendChild(rockButton);
    content.appendChild(paperButton);
    content.appendChild(scissorsButton);
    container.appendChild(content);
    container.appendChild(resultText);

    
    rockButton.textContent = 'Rock';
    paperButton.textContent = 'Paper';
    scissorsButton.textContent = 'Scissors';

    rockButton.addEventListener("click", function () {
        const playerSelection = 'Rock';
        const computerSelection = getComputerChoice();
        resultText.textContent = playRound(playerSelection,computerSelection);
    })
    paperButton.addEventListener("click", function () {
        const playerSelection = 'Paper';
        const computerSelection = getComputerChoice();
        resultText.textContent = playRound(playerSelection,computerSelection);
    })
    scissorsButton.addEventListener("click", function () {
        const playerSelection = 'Scissors';
        const computerSelection = getComputerChoice();
        resultText.textContent = playRound(playerSelection,computerSelection);
    })
    
}
generateGame();