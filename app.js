let humanScore = 0;
let computerScore = 0;
function getRandom(){
  
  return  Math.random();
  // returns a random number between 1 and 0
}
function getComputerChoice(){
const Random = getRandom();
if(Random < 0.31){
  return "rock";
}
else if(Random < 0.61){
  return "paper";

}
else{
  return "scissor";
}
// returns Rock paper or scissor based on random number
};
 function getHumanChoice() {
 
  const humanChoice = prompt("Choose Your Weapon (rock/paper/scissor)");
  return humanChoice.toLowerCase();
  // takes humanChoice input  and converts into lowercase
 }
 
function playRound(humanChoice,computerChoice){
  console.log(`you choose ${humanChoice} | computer choose ${computerChoice}`);
  if(humanChoice === computerChoice){
    console.log("It is a Draw!!")
  }
  else if((humanChoice === "rock" && computerChoice === "scissor") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissor" && computerChoice === "paper")
  )
{
console.log("You won, Computer lost!!   :)");
humanScore++;
}
else {
  console.log("You lost,Computer won  ::))")
  computerScore++;
}
}

function playGame(){
  let totalRounds = 5;
  for (let round = 1; round<= totalRounds ;round++){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
  }
}
playGame();
