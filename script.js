const buttonsDiv=document.querySelector('.buttonsDiv');
const resultDiv=document.querySelector('.result');
const humanScorePara = document.querySelector('.humanScore');
const computerScorePara = document.querySelector('.computerScore');
const roundText=document.querySelector('.round');
roundText.textContent=`Round 1`;
const resetBtn = document.querySelector('.resetBtn');
const resultText=document.querySelector('.resultText');

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
        resultDiv.textContent="It's a tie!";
        resultText.textContent=`🧑 ${human} = ${computer} 💻`
        humanScorePara.textContent = `🧑: ${humanScore}`;
        computerScorePara.textContent = `💻: ${computerScore}`;
    } else if (
        (human=="rock" && computer=="scissors") ||
        (human=="paper" && computer=="rock") ||
        (human=="scissors" && computer=="paper")
    ) {
        humanScore++;
        resultDiv.textContent="You win!";
        resultText.textContent=`🧑 ${human} beats ${computer} 💻`;
        humanScorePara.textContent = `🧑: ${humanScore}`;
        computerScorePara.textContent = `💻: ${computerScore}`;
    } else {
        computerScore++;
        resultDiv.textContent="You lose!";
        resultText.textContent=`💻 ${computer} beats ${human} 🧑`;
        humanScorePara.textContent = `🧑: ${humanScore}`;
        computerScorePara.textContent = `💻: ${computerScore}`;
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
            resultText.style.display = 'none';
            if (humanScore > computerScore) {
                resultDiv.textContent = `🏆 YOU WIN THE GAME! (${humanScore} - ${computerScore})`;
            } else if (computerScore > humanScore) {
                resultDiv.textContent = `❌ YOU LOSE THE GAME! (${humanScore} - ${computerScore})`;
            } else {
                resultDiv.textContent = `🤝 IT'S A TIE GAME! (${humanScore} - ${computerScore})`;
            }
            
            
            roundText.textContent = "Game Over"; 
            resetBtn.style.display = 'block';
        }
    }
});

        
resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    humanScorePara.textContent = "🧑: 0";
    computerScorePara.textContent = "💻: 0";
    roundText.textContent = "Round 1";
    resultDiv.textContent = "";
    resultText.style.display = 'block';
    resultText.textContent="";
    resetBtn.style.display = 'none';
});
