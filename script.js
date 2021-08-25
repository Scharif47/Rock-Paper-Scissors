const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === "rock" || userInput === "paper" || userInput === "sciccors" || userInput === "instantwin") {
    return userInput;
  } else {
    console.log("Please pick a valid option.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0) {
    return "rock";
  } else if(randomNumber === 1) {
    return "paper";
  } else {
    return "sciccors"
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === "instantwin") {
    return "The cheater won the game!"
  };
  if(userChoice === computerChoice) {
    return "It is a tie";
  };
  if(userChoice === "rock") {
    if(computerChoice === "paper") {
      return "The Computer won the game";
    } else {
      return "You won the game";
    }
  };
  if(userChoice === "paper") {
    if(computerChoice === "sciccors") {
      return "The Computer won the game";
    } else {
      return "You won the game";
    }
  };
  if(userChoice === "sciccors") {
    if(computerChoice === "rock") {
      return "The Computer won the game";
    } else {
      return "You won the game";
    }
  };
};

const playGame = (value) => {
  const userChoice = getUserChoice(value);
  const computerChoice = getComputerChoice();

  console.log(`You have picked ${userChoice}!`);
  console.log(`The computer picked ${computerChoice}!`);
  
  console.log(determineWinner(userChoice, computerChoice));

}

// pick "Rock" or "Paper" or "Sciccors" inside playGame to start the game!
playGame("Rock");