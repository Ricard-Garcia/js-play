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

// start button 

// start game button

// get ready page

// stop button 

// result page 


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
//

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
  screen.classList.remove("now");
  screen.classList.add("result");
  screen.innerHTML = "";
  var currentScore = document.createElement("h1");
  screen.appendChild(currentScore)
  currentScore.textContent = `Score: ${score}`;
  playAgain = startButton.cloneNode();
  playAgain.setAttribute("value", "Play Again");
  screen.appendChild(playAgain);
  //var userObj = new Object();
  //userObj.username = username.value;
  //userObj.score = score;


  localStorage.setItem(username.value, score);

  for(var i =0 ; i < localStorage.length ; i++) {
    userName = localStorage.key(i);
    userScore = localStorage.getItem(userName);
    scoreArray.push({"username": userName, "score": userScore});
  }
console.log(scoreArray, "array");
console.log(localStorage, "local")

 var topFour = scoreArray.sort((a, b) => a.score - b.score).slice(0, 4);
 console.log(topFour)
    
    
  
  scores.innerHTML = "";


  topFour.forEach((ele) => {
    var player = document.createElement("h3");
    var records = document.createElement("p");
    player.textContent = ele.username;
    records.textContent = ele.score
    scores.append(player, records);
   

    
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
