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
        return ['It\'s a Tie!', 'T'];
    } else if ((playerSelection === 'Rock' && computerSelection == 'Scissors') || (playerSelection === 'Scissors' && computerSelection == 'Paper') || (playerSelection === 'Paper' && computerSelection == 'Rock')){
        return ['You Win! ' + playerSelection + ' beats ' + computerSelection, 'P'];
    } else if ((computerSelection === 'Rock' && playerSelection == 'Scissors') || (computerSelection === 'Scissors' && playerSelection == 'Paper') || (computerSelection === 'Paper' && playerSelection == 'Rock')){
        return ['You Lose! ' + computerSelection + ' beats ' + playerSelection, 'C'];
    } else {
        return ['Something went wrong!', 'T'];
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
        console.log(result[0]);
        if (result[1] === 'T'){
            console.log('Play again!');
        }
        else if (result[1] === 'P'){
            playerWins += 1;
        } else if (result[1] === 'C'){
            computerWins += 1;
        }
        console.log('Score - Player: ' + playerWins + ' Computer: '+ computerWins);
    }
    console.log('Game Over!');
    if (playerWins > computerWins){
        console.log('You Win!');
    } else if (playerWins < computerWins){
        console.log('You Lose!');
    }
}

game();