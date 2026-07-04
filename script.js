function getComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    if (randomNumber==0){
        return "rock";
    } else if (randomNumber==1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoise(){
    let userInput=prompt("Your turn");
    if (userInput==null){
        return "You canceled the game.";
    }
    return userInput.trim().toLowerCase();
}

function playGame(){
    let humanScore=0;
    let computerScore=0;

    function playRound(human, computer){
    if (human==computer){
        console.log(`It's a tie!`);
    } else if (
        (human=="rock" && computer=="scissors") ||
        (human=="paper" && computer=="rock") ||
        (human=="scissors" && computer=="paper")
    ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
    }
    }


    playRound(getHumanChoise(), getComputerChoice());
    playRound(getHumanChoise(), getComputerChoice());
    playRound(getHumanChoise(), getComputerChoice());
    playRound(getHumanChoise(), getComputerChoice());
    playRound(getHumanChoise(), getComputerChoice());

    if (humanScore>computerScore){
        console.log(`You win the game! ${humanScore}> ${computerScore}`);
    } else {
        console.log(`You lose! ${humanScore}>${computerScore}`);
    }

}

playGame();