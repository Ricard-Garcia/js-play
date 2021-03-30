var player_name = "";
var scoreArray = [];
var startTime = 0;
var stopTime = 0;
var result = 0;
var logButton = document.getElementById("initialButton");
logButton.onclick = userToGame;

// Go to game page
function userToGame() {
  // Checking user form
  var form = document.getElementById("userNameForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    player_name = document.getElementById('userInput').value;
    // Remove previous left block
    let leftTemplate = document.getElementById("leftBlock");
    leftTemplate.innerHTML = "";
    // Add next left block
    let gamePageTemplate = document.getElementById("gamePage");
    const gamePageTemplateContent = document.importNode(gamePageTemplate.content, true);
    leftTemplate.appendChild(gamePageTemplateContent);

    document.getElementById("getReady").style.display = "none";
    //_______start
    var startButton = document.getElementById("startGame");
    startButton.onclick = showGetReady;
  });
  //_______stop
  function showGetReady() {
    var randomNumber = Math.floor(Math.random() * 10000) + 1000;
    var getReadyText = document.getElementById("getReady");
    getReadyText.style.display = "";
    document.getElementById("startGame").style.display = "none";
    setTimeout(function () {
      getReadyText.style.display = "none";
      showStop();
    }, randomNumber);
  };
};
// _________________In this global variables we set the times we need.
var timerInterval;
function timeToString(time) {
  let diffHours = time / 3600000;
  let hours = Math.floor(diffHours);

  let diffMinutes = (diffHours -hours) * 60;
  let minutes = Math.floor(diffMinutes);

  let diffSeconds = (diffMinutes - minutes) * 60;
  let seconds = Math.floor(diffSeconds);

  let diffMSeconds = (diffSeconds - seconds) * 100;
  let milliSeconds = Math.floor(diffMSeconds);

  let secondsFormat = seconds.toString().padStart(2, "0");
  let msFormat = milliSeconds.toString().padStart(2, "0");

  return `${secondsFormat}.${msFormat}`
}
function showStop() {
  
  startTime = Date.now();
  
  //================= stop watch ================//
  var timerNumber = 0;
  timerStart = Date.now() - timerNumber;
  timerInterval = setInterval(function displayTime() {
    timerNumber = Date.now() - timerStart;
    document.getElementById("watch").innerHTML = timeToString(timerNumber);
  }, 10);


  // Add next left block
  let stopPageTemplate = document.getElementById("stopPage");
  const stopPageTemplateContent = document.importNode(stopPageTemplate.content, true);
  document.getElementById("leftBlock").appendChild(stopPageTemplateContent);
  // _________________Giving funcionality to stop button.
  document.getElementById("stopGame").addEventListener("click", finish);
  // _________________calculating the seconds.
  function finish() {
    stopTime = Date.now();
    result = (stopTime - startTime) / 1000;
    result = result.toFixed(2);
    console.log(result);

    clearInterval(timerInterval);

    // _________________finally we set the values in a localStorage.
    localStorage.setItem(player_name, result);
    console.log(localStorage);

    // sidebar top users and scores
    for (var i = 0; i < localStorage.length; i++) {
      userName = localStorage.key(i);
      userScore = localStorage.getItem(userName);
      scoreArray.push({ username: userName, score: userScore });
    }
    var topFive = scoreArray.sort((a, b) => a.score - b.score).slice(0, 5);

    var topPlayers = document.querySelectorAll(".topName");
    var topScores = document.querySelectorAll(".topScore");

    for (var i = 0; i < topFive.length; i++) {
      topPlayers[i].textContent = `#${i+1} ` + topFive[i].username;
      topScores[i].textContent = `${topFive[i].score} seconds`;
    }
    gameToResults();
  }
};
// Go to results page
function gameToResults() {
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  // Add next left block
  let resultPageTemplate = document.getElementById("resultPage");
  const resultPageTemplateContent = document.importNode(resultPageTemplate.content,true);
  leftTemplate.appendChild(resultPageTemplateContent);

  var secondsScore = document.getElementById("secondsScore");
  secondsScore.innerHTML = `${result} seconds`;
  var againButton = document.getElementById("playAgain");
  againButton.onclick = resultsToUser;
  // Test print
  console.log("Switched to results");
};
// Go to initial page
function resultsToUser() {
  console.log(player_name, result, "result");
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  let userPageTemplate = document.getElementById("userPage");
  const userPageTemplateContent = document.importNode(userPageTemplate.content,true);
  leftTemplate.appendChild(userPageTemplateContent);
  //Reset user to game to default
  userToGame();
};
