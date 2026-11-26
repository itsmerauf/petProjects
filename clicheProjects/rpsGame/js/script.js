  const gameObjects = [ "Rock", "Paper", "Scissors" ];
  const playersChoice = document.querySelector(".userChoice");
  const computersChoice = document.querySelector(".computerChoice");
  const playerScore = document.querySelector( ".userScore" );
  const computerScore = document.querySelector( ".computerScore" );
  const resultMsg = document.querySelector(".gameResultMsg");
  
  let playersScore = 0;
  let computersScore = 0;

// ---- Name Changer ---- //
  function nameChanger() { 
  const nameOnTheCoverPage = document.querySelector(".welcomeTxt");
  const playersName = document.querySelector(".player");
    
  let changePlayerName = prompt("What's your name?", 'Player');
    
  if (changePlayerName === null || changePlayerName.trim() === "") {
    return;
  } else {
    nameOnTheCoverPage.textContent = `Welcome ${changePlayerName[0].toUpperCase() + changePlayerName.slice(1)} !`;
    playersName.textContent = changePlayerName[0].toUpperCase() + changePlayerName.slice(1)
  }
    return changePlayerName;
  };

  let namePicker = nameChanger();

  // ---- Cover Page Toggler ---- //
  function coverPageToggle() {
  const gameCover = document.querySelector(".coverPage");
  const playBtn = document.querySelector(".startBtn");
  
  playBtn.addEventListener("click", () => {
    gameCover.classList.add("hidden");
  });
  };
  
  coverPageToggle();
  // ---- The Main Game Logic ---- //
  function playerChose() {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
  
    rockBtn.addEventListener("click", () => {
      playersChoice.textContent = gameObjects[0];
      computerChose();
      determineWinner()
    })
  
    paperBtn.addEventListener("click", () => {
      playersChoice.textContent = gameObjects[1];
      computerChose();
      determineWinner()
    })
  
    scissorsBtn.addEventListener("click", () => {
      playersChoice.textContent = gameObjects[2];
      computerChose();
      determineWinner()
    })

    return playersChoice;
  };
  
  playerChose();
  
  
  function computerChose() {
  
    let randomObj = gameObjects[Math.floor(Math.random() * gameObjects.length)];
    
    computersChoice.textContent = randomObj;
    return computersChoice;
  };
  
  
  function determineWinner() {
    if (playersChoice.textContent === gameObjects[0]
       && computersChoice.textContent === gameObjects[2]
       || playersChoice.textContent === gameObjects[1]
       && computersChoice.textContent === gameObjects[0]
       || playersChoice.textContent === gameObjects[2]
       && computersChoice.textContent === gameObjects[1]) {
      setTimeout(() => {
      resultMsg.textContent = `${namePicker[0].toUpperCase() + namePicker.slice(1)} won!`;
      }, 200);
      scoreChanger();
    } else if (computersChoice.textContent === gameObjects[0]
              && playersChoice.textContent === gameObjects[2]
              || computersChoice.textContent === gameObjects[1]
              && playersChoice.textContent === gameObjects[0]
              || computersChoice.textContent === gameObjects[2]
              && playersChoice.textContent === gameObjects[1]) {
      setTimeout(() => {
      resultMsg.textContent = "Computer won!";
      }, 200);
      scoreChanger();
    } else {
      setTimeout(() => {
      resultMsg.textContent = "It's a tie!";
     }, 200)
    }
  };

  // ---- Score Changer ---- //
  function scoreChanger() {

    if (playersChoice.textContent === gameObjects[0]
       && computersChoice.textContent === gameObjects[2]
       || playersChoice.textContent === gameObjects[1]
       && computersChoice.textContent === gameObjects[0]
       || playersChoice.textContent === gameObjects[2]
       && computersChoice.textContent === gameObjects[1]) {
      playersScore++;
      playerScore.textContent = playersScore;
    } else if (computersChoice.textContent === gameObjects[0]
              && playersChoice.textContent === gameObjects[2]
              || computersChoice.textContent === gameObjects[1]
              && playersChoice.textContent === gameObjects[0]
              || computersChoice.textContent === gameObjects[2]
              && playersChoice.textContent === gameObjects[1]) {
      computersScore++;
      computerScore.textContent = computersScore;
    }
  }
  