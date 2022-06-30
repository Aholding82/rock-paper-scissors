/* Program that uses a random number generator to output either
'Rock', 'Paper' or 'Scissors' to a given user prompt and play a game
of rock paper scissors */



let playerSelection = prompt('Rock, Paper or Scissors?');
game(playerSelection);
const a;
const b;

function computerPlay() {

    let i = Math.floor(Math.random() * 3);

    if (i == 0) {
        return "Rock";
    }
    else if (i == 1) {
        return "Paper";
    }
    else    {
        return "Scissors";
    }
}

function rockPaperScissors(playerSelection) {

    playerSelection = String(playerSelection);
    let computerSelection = computerPlay();
    

    if (playerSelection === 'Rock' || playerSelection === 'rock') {
        if (computerSelection === 'Rock') {
            return 'Draw';
        }
        else if (computerSelection === 'Paper') {
            return 'Computer wins: Paper beats Rock';
        }
        else {
            return 'Player wins: Rock beats Scissors';
        }
    }
    else if (playerSelection === 'Paper' || playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            return 'Player wins: Paper beats Rock';
        }
        else if (computerSelection === 'Paper') {
            return 'Draw';
        }
        else {
            return 'Computer wins: Scissors beats Paper';
        }
    }
    else if (playerSelection === 'Scissors' || playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            return 'Draw';
        }
        else if (computerSelection === 'Paper') {
            return 'Player wins: Scissors beats Paper';
        }
        else {
            return 'Draw';
        }
    }
    else {
        return 'Please enter a valid input (Rock, Paper or Scissors)';
    }

    
}

function game(playerSelection) {
    let imax = prompt('How many rounds');
    for (let i = 0; i < imax; i++) {
        console.log(i);
        result = rockPaperScissors(playerSelection);
        console.log(result);
    }
} 