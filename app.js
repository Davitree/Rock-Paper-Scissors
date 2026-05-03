let humanScore = 0;
let computerScore = 0;
function getRandom(){
  let result = Math.random();
  return result;
}
function getComputerChoice(){
 if(getRandom() < 0.4 ){
  console.log("Rock")
 }
 else if(getRandom() >= 0.4 && getRandom() > 0.7){
  console.log("Paper")
 }
 else{
  console.log("Scissor")
 }
let computerChoice =getComputerChoice();
return computerChoice();
};
 function getHumanChoice() {
  // console.log("***---------choose one of the following----------***")
  // console.log("\n1.Rock")
  // console.log("\n2.Paper")
  // console.log("\n3.Scissor")
  let humanChoice = prompt("Choose Your Weapon");
  return humanChoice;
 }
 let humanChoice = getHumanChoice().toLowerCase;
 let computerChoice = getComputerChoice();
function playRound(humanChoice,computerChoice){
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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);