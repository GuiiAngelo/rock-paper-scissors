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

function getHumanChoice() {
    const userChoice = prompt(
        "Enter only the number:\nRock - 1\nPaper - 2\nScissors - 3"
    );

    if (userChoice === "1") {
        return "rock";
    } else if (userChoice === "2") {
        return "paper";
    } else if (userChoice === "3") {
        return "scissors";
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
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
}
for(let i=1; i<=5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
if (humanScore > computerScore) {
    alert(`Your points: ${humanScore}\nComputer points: ${computerScore}\nYou have won on 5 rounds!`);
} else if (computerScore > humanScore) {
    alert(`Your points: ${humanScore}\nComputer points: ${computerScore}\nYou have lost on 5 rounds.`);
} else {
    alert(`Your points: ${humanScore}\nComputer points: ${computerScore}\nYou have drawn on 5 rounds.`);
}
}

playGame();