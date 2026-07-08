const buttonsDiv=document.querySelector('.buttonsDiv');
const resultDiv=document.querySelector('.result');
const humanScorePara = document.querySelector('.humanScore');
const computerScorePara = document.querySelector('.computerScore');
const roundText=document.querySelector('.round');
roundText.textContent=`Round 1`;
const resetBtn = document.querySelector('.resetBtn');

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

let humanScore=0;
let computerScore=0;
let rounds=0;

function playRound(human, computer){
    if (human==computer){
        resultDiv.textContent=`It's a tie! human=${human}=${computer} computer`;
        humanScorePara.textContent = `Human: ${humanScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    } else if (
        (human=="rock" && computer=="scissors") ||
        (human=="paper" && computer=="rock") ||
        (human=="scissors" && computer=="paper")
    ) {
        humanScore++;
        resultDiv.textContent=`You win! human=${human} beats ${computer}=computer`;
        humanScorePara.textContent = `Human: ${humanScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    } else {
        computerScore++;
        resultDiv.textContent=`You lose! computer=${computer} beats ${human}=human`;
        humanScorePara.textContent = `Human: ${humanScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }
}

buttonsDiv.addEventListener('click', (e) => {   
    if (rounds>=5){return;}
    if (e.target.tagName === 'BUTTON'){
        const humanChoise=e.target.textContent.toLowerCase();
        const computerChoise=getComputerChoice();
        playRound(humanChoise, computerChoise);
        rounds++;
        if (rounds < 5) {
            roundText.textContent = `Round ${rounds + 1}`;
        }
        if (rounds === 5) {
            if (humanScore > computerScore) {
                resultDiv.textContent = `🏆 YOU WIN THE GAME! (${humanScore} - ${computerScore})`;
            } else if (computerScore > humanScore) {
                resultDiv.textContent = `❌ YOU LOSE THE GAME! (${computerScore} - ${humanScore})`;
            } else {
                resultDiv.textContent = `🤝 IT'S A TIE GAME! (${humanScore} - ${computerScore})`;
            }
            
            // Optional: Clear or hide the round counter since the game is over
            roundText.textContent = "Game Over"; 
            resetBtn.style.display = 'block';
        }
    }
});

        
resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    rounds = 0; // Fixed variable name here

    humanScorePara.textContent = "Human: 0";
    computerScorePara.textContent = "Computer: 0";
    roundText.textContent = "Round 1";
    resultDiv.textContent = "";
    resetBtn.style.display = 'none';
});
