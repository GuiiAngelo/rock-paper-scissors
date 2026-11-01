function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1){
        return "rock";
    }
    else if(randomNum === 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    function playRound(humanChoice, computerChoice) {
        if (gameOver) return;
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert(`You win!\nComputer choice: ${computerChoice}`);
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        alert(`You lose!\nComputer choice: ${computerChoice}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert(`You win!\nComputer choice: ${computerChoice}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert(`You lose!\nComputer choice: ${computerChoice}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert(`You win!\nComputer choice: ${computerChoice}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert(`You lose!\nComputer choice: ${computerChoice}`);
    }
    else {
        alert(`It's a tie!\nComputer choice: ${computerChoice}`);
    }
    humanResult.textContent =  `Your score: ${humanScore}`;
    computerResult.textContent = `Computer score: ${computerScore}`;
    game.appendChild(humanResult);
    game.appendChild(computerResult);

    if (humanScore === 5 || computerScore === 5) {
    gameOver = true;

    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
    } else {
        alert("Game over! The computer won!");
    }
}
}
    const rockChoice = document.querySelector("#rock");
    const paperChoice = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rockChoice.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paperChoice.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

}

    const game = document.querySelector("#game");
    const humanResult = document.createElement("p");
    const computerResult = document.createElement("p");
playGame();