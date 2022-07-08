/* Program that uses a random number generator to output either
'Rock', 'Paper' or 'Scissors' to a given user prompt and play a game
of rock paper scissors */

var player = 0;
var computer = 0;
var playerSelection;
var result;
var i = 1;
var imax;
const tally = [];

/* Tally */
const score = document.createElement('div');
score.textContent = `${player} | ${computer}`
container.appendChild(score); 

const history = document.createElement('div');
history.classList.add('tally');
container.appendChild(history); 

const final_score = document.createElement('h3')
container.appendChild(final_score);






        /* --- Adding the rocks paper scissors buttons --- */
// You hit the button and a game of rps is played between the player and the computer.
// With each button press the 'player' and 'computer' variables are varied given the result
// with +1 given for wins, 0 for losses and draws. The player result is appended (W, L or D)
// to the tally array. The number of rounds played is recorded through the i variable. The tally
// of the games is recorded below the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    result = rockPaperScissors(playerSelection);
    player += result[0];
    computer += result[1];
    score.textContent = `${player} | ${computer}`
    
    tally.push(result[2]);
    history.textContent = `${tally}`;
    console.log(player, computer, tally, i);
    i ++;
    
    if (player == 5 && computer < 5) {
        final_score.textContent = 'Player wins'
    }
    else if (computer  == 5 && player < 5) {
        final_score.textContent = 'Computer wins'
    }
    else {
    }

  });
});  





/* Choosing the computers selection with a random number generator  */
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

/* The function that performs the game of rock paper scissors with a give playerSelection */
function rockPaperScissors(playerSelection) {

    playerSelection = String(playerSelection);
    let computerSelection = computerPlay();
    

    if (playerSelection === 'Rock' || playerSelection === 'rock') {
        if (computerSelection === 'Rock') {
            return [0, 0, 'D']
        }
        else if (computerSelection === 'Paper') {
            return [0, 1, 'L']
        }
        else {
            return [1, 0, 'W']
        }
    }
    else if (playerSelection === 'Paper' || playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            return [1, 0, 'W']
        }
        else if (computerSelection === 'Paper') {
            return [0, 0, 'D']
        }
        else {
            return [0, 1, 'L']
        }
    }
    else if (playerSelection === 'Scissors' || playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            return [0, 1, 'L']
        }
        else if (computerSelection === 'Paper') {
            return [1, 0, 'W']
        }
        else {
            return [0, 0, 'D']
        }
    }
    else {
        return 'Please enter a valid input (Rock, Paper or Scissors)';
    }

    
}

/* Function that outputs results as text strings for the rps game rather than outputting
 number tallies*/
function rockPaperScissorsText(playerSelection) {

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

// function game(playerSelection) {
//     // let imax = prompt('How many rounds');
//     var imax = 5;
//     /* looping through the outlined rounds */
//     // for (let i = 0; i < imax; i++) {
//         // tally.push(rockPaperScissors(playerSelection));     
//     }

//     /* If condition to decide the result */
//     if (player > computer) {
//         return console.log('Player Wins');
//     }
//     else if (player === computer) {
//         return console.log('Draw');
//     }
//     else {
//         return console.log('Computer Wins');
//     }
// // } 

