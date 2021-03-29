const screen = document.querySelector("#screen");
const username = document.querySelector("#username");
const mainH1 = document.querySelector("#screen h1");
const startButton = document.querySelector("#screen .button");
const scores = document.querySelector(".scores");
const main = document.querySelectorAll(".main");
const mainElements = main[0].childNodes;

let scoreArray = [];
let readyTimeout;
let startTime;
let endTime;
let stopGame;

startButton.addEventListener("click", () => {
  if (username.checkValidity()) {
    screen.classList.remove("main");
    screen.classList.add("start");
    var startGame = startButton.cloneNode();
    screen.innerHTML = "";
    startGame.setAttribute("value", "Start Game");
    screen.appendChild(startGame);
    var currentPlayer = document.createElement("h3");
    var status = document.createElement("p");
    scores.prepend(currentPlayer, status);
    currentPlayer.textContent = `${username.value}`;
    status.textContent = "currently playing";

    startGame.addEventListener("click", clickStartGame);
  }
});

function clickStartGame() {
  screen.classList.remove("start");
  screen.classList.add("ready");
  screen.textContent = "Get Ready...";
  readyTimeout = setTimeout(() => {
    startTime = new Date();
    screen.classList.remove("ready");
    screen.classList.add("now");
    stopGame = startButton.cloneNode();
    screen.innerHTML = "";
    stopGame.setAttribute("value", "Stop");
    screen.appendChild(stopGame);
    stopGame.addEventListener("click", clickStop);
  }, Math.floor(Math.random() * 1000) + 1000);
}

function clickStop() {
  endTime = new Date();
  const score = endTime - startTime;
  console.log(score);
  screen.classList.remove("now");
  screen.classList.add("result");
  screen.innerHTML = "";
  var currentScore = document.createElement("h1");
  screen.appendChild(currentScore)
  currentScore.textContent = `Score: ${score}`;
  playAgain = startButton.cloneNode();
  playAgain.setAttribute("value", "Play Again");
  screen.appendChild(playAgain);
  var userObj = new Object();
  userObj.username = username.value;
  userObj.score = score;
  scoreArray.push(userObj);
  const topFour = scoreArray.sort((a, b) => a.score - b.score).slice(0, 4);
  scores.innerHTML = "";

  topFour.forEach((ele) => {
    var player = document.createElement("h3");
    var records = document.createElement("p");
    scores.append(player, records);
    player.textContent = ele.username;
    records.textContent = ele.score
      
  });
  playAgain.addEventListener("click", clickPlayAgain);
}

function clickPlayAgain() {
  console.log("clicked");
  startTime = null;
  endTime = null;
  screen.classList.remove("result");
  screen.innerHTML = "";

  screen.classList.add("main");
  screen.append(mainH1, username, startButton);
  username.value = "";
}
