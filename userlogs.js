const screen = document.querySelector("#screen");
const username = document.querySelector("#username");
const mainH1 = document.querySelector("#screen h1");
const startButton = document.querySelector("#screen .button");
const scores = document.querySelector(".scores");




let scoreArray = [];
let readyTimeout;
let startTime;
let endTime;
let stopGame;

// start button 


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


    // currently playing
    currentPlayer.textContent = `${username.value}`;
    status.textContent = "currently playing";

    startGame.addEventListener("click", clickStartGame);
  }
});


// start game button

function clickStartGame() {
  screen.classList.remove("start");
  screen.classList.add("ready");
  
  // display it before stop button appears
  screen.textContent = "Get Ready...";


  // after 1 - 2 seconds, stop button appears
  readyTimeout = setTimeout(() => {
    // when the stop button appears it gets time. 
    startTime = new Date();
    console.log(startTime)
    screen.classList.remove("ready");

    screen.classList.add("now");
    stopGame = startButton.cloneNode();
    screen.innerHTML = "";
    stopGame.setAttribute("value", "Stop");
    screen.appendChild(stopGame);
    stopGame.addEventListener("click", clickStop);

  }, Math.floor(Math.random() * 1000) + 1000);
}


// get ready page and stop button 








// result page 





function clickStop() {
  // when click the stop button, it gets time. 
  endTime = new Date();
  console.log(endTime)
  // milliseconds to seconds 
  const score = ((endTime - startTime)/1000).toFixed(2);


  screen.classList.remove("now");
  screen.classList.add("result");
  screen.innerHTML = "";
  var currentScore = document.createElement("h1");
  screen.appendChild(currentScore)


  // display current player's score 
  currentScore.textContent = `Score: ${score} seconds`;


  
  playAgain = startButton.cloneNode();
  playAgain.setAttribute("value", "Play Again");
  screen.appendChild(playAgain);


  // save user data to localStorage 

  localStorage.setItem(username.value, score);



  // loop through localStorage data to push them to an array

  for(var i =0 ; i < localStorage.length ; i++) {
    userName = localStorage.key(i);
    userScore = localStorage.getItem(userName);
    scoreArray.push({"username": userName, "score": userScore});
  } // duplicate ....... need to solve it! 
  
console.log(scoreArray, "array");
console.log(localStorage, "local")




// sort the array and take top 4 users and scores

 var topFour = scoreArray.sort((a, b) => a.score - b.score).slice(0, 4);
 console.log(topFour)
    
    
  
 scores.innerHTML = "";


 // display top users and their scores  

  topFour.forEach((ele) => {
    var player = document.createElement("h3");
    var records = document.createElement("p");
    player.textContent = ele.username;
    records.textContent = `${ele.score} seconds`;
    scores.append(player, records);
    
  });
  playAgain.addEventListener("click", clickPlayAgain);
}

// click to play again 
// go aback to the first page

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
