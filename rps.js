const rock     = 'rock';
const paper    = 'paper';
const scissors = 'scissors';
// 


function computerPlay() {
   let num =  Math.floor(Math.random() * 3) + 1;

   return (num == 1) ? 'rock' 
   :      (num == 2) ? 'paper'
   :                  'scissors';
    //  returns a random choice
}



function playRound (){
    let playerSelection = prompt(" Rock, Paper or Scissors? ").toLowerCase();
    let computerSelection = computerPlay();

   if      (( playerSelection === 'rock' )    && (computerSelection === 'scissors')){
   return     "Rock Beats Scissors";}

   else if (( playerSelection === 'scissors') && (computerSelection === 'paper')){
   return     "Scissors beats Paper!";}

   else if (( playerSelection === 'paper')    && (computerSelection === 'rock')){
    return    "Scissors beats Paper!";}

   else {
             return " You Lose, Better Luck Next Time!" ;}
   }
