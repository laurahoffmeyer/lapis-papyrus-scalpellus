const player = {
    currentChoice: null
  };
  const computer = {
    currentChoice: null
  };
  
    function buttonClick(e) {
    const choices = ["lapis", "papyrus", "scalpellus"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  
    if (e.target.id === "lapis") {
      player.currentChoice = choices[0];
    } else if (e.target.id === "papyrus") {
      player.currentChoice = choices[1];
    } else {
      player.currentChoice = choices[2];
    }
  
    if (computer.currentChoice === player.currentChoice) {
      document.getElementById("results").innerText =
        "It's a tie! The player and the computer both chose " + computer.currentChoice + ".";
    }
  
    else if (computer.currentChoice === choices[0]) {
      if (player.currentChoice === choices[1]) {
        document.getElementById("results").innerText =
          "Player wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          player.currentChoice + ".";
      } else {
        document.getElementById("results").innerText =
          "Computer wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          player.currentChoice + ".";
      }
    } else if (computer.currentChoice === choices[1]) {
      if (player.currentChoice === choices[2]) {
        document.getElementById("results").innerText =
          "Player wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          player.currentChoice + ".";
      } else {
        document.getElementById("results").innerText =
          "Computer wins! The computer chose " +
          computer.currentChoice +
          " and the player chose " +
          player.currentChoice + ".";
      }
    } else if (computer.currentChoice === choices[2]) {
      document.getElementById("results").innerText =
        "Player wins! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice + ".";
    } else {
      document.getElementById("results").innerText =
        "Computer wins! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice + ".";
    }
  }
  
  //Click events
  document.getElementById("lapis").addEventListener("click", buttonClick);
  document.getElementById("papyrus").addEventListener("click", buttonClick);
  document.getElementById("scalpellus").addEventListener("click", buttonClick);  