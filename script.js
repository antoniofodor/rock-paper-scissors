/*

Antonio Fodor 09/30/2023
Rock Paper Scissors

*/


// computer selection
function getComputerChoice() {

    let choice = "";

    // set to random number between 0 and 2 (inclusive)
   let selector = Math.floor(Math.random() * 2);
   
   switch(selector) {
    case 0:
        choice = "Rock";
        break;
    case 1:
        choice = "Paper";
        break;
    case 2:
        choice = "Scissors";
        break;
   }
   return choice;
}


// validate string
function isString(input) {
    return typeof input === 'string';
}


// validate input
function validInput(input) {
    const pattern = /^(rock|paper|scissors)$/i;
    return pattern.test(input);
}


function getPlayerChoice() {

    // get user choice
   let choice = prompt("Enter Choice: ");

   // check if choice is string and if rock|paper|scissors
    if ((!isString(choice)) || (!validInput(choice))) {
        return;
    }

    // normalize choice 
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}


// generate round
function playRound(playerSelection, computerSelection) {

    // initialize result
    let result = "";

    // determine winner
    if (playerSelection === computerSelection) {
        result = "Tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
        result = "You Won!";
    } else result = "Computer Won :(";

    // output results
    console.log("Computer: " + computerSelection + "\nYou: " + playerSelection);
    console.log(result);
}


// play game
function game() {

    // set rounds
    let round = 1;
    let finalRound = 5;

    while (round <= finalRound) {
        if (round === finalRound) {console.log(`Final Round!`);}
        console.log(`Round ${round}`);

        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        if (playerChoice) {
            playRound(playerChoice, computerChoice);
            round++;
        } else {
            console.log("Invalid Input. Please try again.")
        }
    }
}


// Start Game
game();