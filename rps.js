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
    let text = prompt('Please enter your choice (Rock, Paper, Scissors): ');
    let choice = text.charAt(0).toUpperCase().concat(text.slice(1,text.length).toLowerCase())
    console.log(choice);

}
// Test functions
console.log(getComputerChoice());
getPlayerChoice();