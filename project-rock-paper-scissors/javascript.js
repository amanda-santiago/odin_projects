

function getComputerChoice () {
    const computerNumber = Math.floor(Math.random() * 3);
    let stringValue;

    if (computerNumber == 0) {
        stringValue = "rock";

    } else if (computerNumber == 1) {
         stringValue = "paper";

    }else {
         stringValue = "scissors";
    }

    return stringValue;
}


function getHumanChoice () {
    let humanChoice = prompt("Please enter one of the following values: “rock”, “paper” or “scissors”: ");

    return humanChoice.toLowerCase();
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanSelection, computerSelection){

    let whoWin;

    if (humanSelection == computerSelection) {
        console.log(`It's a draw! ${humanSelection} ties ${computerSelection}.`);
    } else if (humanSelection == "paper"){
        if (computerSelection == "scissors") { 
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`); 
            computerScore += 1;
        }
        else { 
            console.log(`You Win! ${humanSelection} beats ${computerSelection}.`); 
            humanScore +=1;
        }

    } else if (humanSelection == "rock"){
        if (computerSelection == "paper") { 
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`); 
            computerScore += 1;
        }
        else { 
            console.log(`You Win! ${humanSelection} beats ${computerSelection}.`); 
            humanScore +=1;
        }
    } else {
        if (computerSelection == "rock") { 
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`); 
            computerScore += 1;
        }
        else { 
            console.log(`You Win! ${humanSelection} beats ${computerSelection}.`);
            humanScore +=1; 
            }
        }
    }

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your Score: ${humanScore}   ---------   Computer Score: ${computerScore}`);

    }
}

playGame();


