// Geneterate the computers choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 2) {
        return 'Scissors';
    }
}

// Test functions
console.log(getComputerChoice());