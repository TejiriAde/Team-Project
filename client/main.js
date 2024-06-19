//https://team-project-1-xc83.onrender.com/ client
//https://team-project-0ss1.onrender.com/ server

const form = document.getElementById("game-form");

async function fetchAndRenderGameForm() {
  const response = await fetch(
    "https://team-project-0ss1.onrender.com/reviews"
  );
  const userReviews = await response.json();
  console.log(userReviews);
  const reviewDiv = document.getElementById("review-info-container");
  reviewDiv.innerHTML = "";

  userReviews.forEach((msg) => {
    const userReviewsDiv = document.createElement("div");
    userReviewsDiv.id = "inputReviews";
    userReviewsDiv.innerHTML = `<div id="review-info"><p id="username"> ${msg.username}</p> <p id="game-name-title">${msg.game_name}</p> <div class="rating-div"><p id="rating">${msg.rating}</p></div></div><div id="comment-box-container><p id="comment-box">${msg.review} </p></div>`;
    reviewDiv.appendChild(userReviewsDiv);
  });
  function updateScroll() {
    let element = document.getElementById("review-info-container");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll();
}
fetchAndRenderGameForm();

form.addEventListener("submit", submitButton);
async function submitButton(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  try {
    const response = await fetch(
      "https://team-project-0ss1.onrender.com/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log("DATA IS SAVED - ALL IS WELL");
      fetchAndRenderGameForm();
      form.reset();
      // console.log(formValues);
    } else {
      console.log("NOOO IT DIDN'T WORK!!!!!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// window.addEventListener("hashchange", function () {
//   // this is too adjust where the anchor links land
//   window.scrollTo(window.scrollX, window.scrollY + 100);
//   console.log(window.scrollY);
// });

let currentGame;

function createGameArray() {
  let game = [];

  const pictionary = document.getElementById("pictionary");
  pictionary.name = "Pictionary";
  pictionary.summary =
    "A Team based drawing game where your team must guess what is being drawn first to win the points";
  pictionary.noOfPlayers = "4+";
  pictionary.noOfPlayersAria = "4 or more";
  pictionary.playTime = "30 minutes - 1hr";

  pictionary.playTimeAria = "30 minutes to 1 hour";
  game.push(pictionary);

  const uno = document.getElementById("uno");
  uno.name = "Uno";
  uno.summary =
    "This fast paced card game based on matching colours and numbers in combination with actions cards to beat your opponents mercilessly";
  uno.noOfPlayers = "2+";
  uno.noOfPlayersAria = "2 or more";
  uno.playTime = "5 minutes - forever";
  uno.playTimeAria = "5 minute and upwards";
  game.push(uno);

  const monopoly = document.getElementById("monopoly");
  monopoly.name = "Monopoly";
  monopoly.summary =
    "A cash and property collecting boardgame where the object is to construct a capitalist housing monopoly while making your way round the board occasionally encountering rewards and punishments";
  monopoly.noOfPlayers = "2 - 6";
  monopoly.noOfPlayersAria = "2 to 6";
  monopoly.playTime = "1 - 3hrs";
  monopoly.playTimeAria = "1 to 3 hours";
  game.push(monopoly);

  const scrabble = document.getElementById("scrabble");
  scrabble.name = "Scrabble";
  scrabble.summary =
    "A turn-based board game where players use up to seven tiles to spell a word on the board in an atttempt to score the most points possible, before taking replacement letters ready for the next round";
  scrabble.noOfPlayers = "2+";
  scrabble.noOfPlayersAria = "2 or more";
  scrabble.playTime = "20 minutes - 1hr";
  scrabble.playTimeAria = "20 minutes to 1 hour";
  game.push(scrabble);

  const guessWho = document.getElementById("guesswho");
  guessWho.name = "Guess Who";
  guessWho.summary =
    "This is a turn based game of deduction with each player asking yes and no questions to eliminate possible awnsers and determine which character their opponent has on the card";
  guessWho.noOfPlayers = "2";
  guessWho.noOfPlayersAria = "2";
  guessWho.playTime = "2 -20 minutes";
  guessWho.playTimeAria = "2 to 20 minutes, depending on skill level";
  game.push(guessWho);

  const chess = document.getElementById("chess");
  chess.name = "Chess";
  chess.summary =
    "The classic two player experience, taking place on a checkerboard, each player begins with 16 pieces from a range of 6 classes, which they need to use to eliminate and hinder their opponents movements in order to achieve victory";
  chess.noOfPlayers = "2";
  chess.noOfPlayersAria = "2";
  chess.playTime = "20 minutes - 1hr";
  chess.playTimeAria = "20 minutes to 1 hour";
  game.push(chess);

  const hungryhungryHippos = document.getElementById("hungry-hungry-hippos");
  hungryhungryHippos.name = "Hungry Hungry Hippos";
  hungryhungryHippos.summary =
    "Hammer on your Hippo's tail to make them eat as many of the marbles bouncing around the areana before your opponents do to take first place in this frantic quickfire classic";
  hungryhungryHippos.noOfPlayers = "2 - 4";
  hungryhungryHippos.noOfPlayersAria = "2 to 4";
  hungryhungryHippos.playTime = "1 -3 minutes";
  hungryhungryHippos.playTimeAria = "1 to 3 minutes";
  game.push(hungryhungryHippos);

  const jenga = document.getElementById("jenga");
  jenga.name = "Jenga";
  jenga.summary =
    "Steady hands and a sense of confindience are required in this skill based game where players take it in turns to remove blocks from the towr one by one before placing them on top. Whoever causes it to fall can consider themselves the loser";
  jenga.noOfPlayers = "2+";
  jenga.noOfPlayersAria = "2 or more";
  jenga.playTime = "30 seconds - 10 minutes";
  jenga.playTimeAria = "30 seconds to 10 minutes";
  game.push(jenga);

  const cluedo = document.getElementById("cluedo");
  cluedo.name = "Cluedo";
  cluedo.summary =
    "Can you use logic and deduction to discover who murdered the Mansion owner? In this turn based mystery make use of the secret passageways to move between rooms and accuse your opponents in order to see there cards and kind out who the killer is first";
  cluedo.noOfPlayers = "2 - 6";
  cluedo.noOfPlayersAria = " 2 to 6";
  cluedo.playTime = "20 minutes - 1hr";
  cluedo.playTimeAria = "20 minutes to one hour";
  game.push(cluedo);

  const risk = document.getElementById("risk");
  risk.name = "Risk";
  risk.summary =
    "A Globe spanning game of chance and conquest where players collect cards to trade for resource bonues and compete for territory bonuses all to increase their chances of wiping out their opponents and ruling the world";
  risk.noOfPlayers = "2 - 6 ";
  risk.noOfPlayersAria = "2 to 6";

  risk.playTime = "1 - 3hrs";
  risk.playTimeAria = "1 to 3 hours";
  game.push(risk);

  return game;
}
const games = createGameArray();

let gameDataDisplay = document.getElementById("game-text");

games.forEach((thisGame, index) => {
  thisGame.addEventListener("click", () => {
    currentGame = thisGame.name;
    gameDataDisplay.innerHTML = "";
    gameDataDisplay.innerHTML = `<p>No. of Players: ${thisGame.noOfPlayers}</p><p>Play time: ${thisGame.playTime} </p><p> Description: ${thisGame.summary}`;
    gameDataDisplay.ariaLabel = `${thisGame.name} a game for ${thisGame.noOfPlayersAria} players. With a play time of ${thisGame.playTimeAria}. ${thisGame.summary}.`;
  });
});
