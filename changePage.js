var player_name = "";
var scoreArray = [];
var startTime = 0;
var stopTime = 0;
var result = 0;
var count = 0;
var logButton = document.getElementById("initialButton");
logButton.onclick = userToGame;
// Go to game page
function userToGame() {
  // Checking user form
  scoreArray = [];
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
    var randomNumber = Math.floor(Math.random() * 1000) + 2000;
    var getReadyText = document.getElementById("getReady");
    getReadyText.style.display = "";
    document.getElementById("startGame").style.display = "none";
    setTimeout(function () {
      getReadyText.style.display = "none";
      showStop();
    }, randomNumber);
  };
};

function showStop() {
  startTime = Date.now();
  // Add next left block
  let stopPageTemplate = document.getElementById("stopPage");
  const stopPageTemplateContent = document.importNode(stopPageTemplate.content, true);
  document.getElementById("leftBlock").appendChild(stopPageTemplateContent);

  var container = document.getElementById("gridContainer");
  var containerStyle = container.style;

  function showGameGrid(gridSize, timeSpeed, repeatGrid) {
    containerStyle.gridTemplateColumns = repeatGrid;
    // Adding all items inside container
    for (let i = 0; i < gridSize; i++) {
      var contentContainer = document.createElement("div");
      container.appendChild(contentContainer);
      contentContainer.setAttribute('id', 'cell' + i);
      contentContainer.innerHTML = "Stop me!";
    }

    var myArray = [];
    for (let i = 0; i < gridSize; i++) {
      const items = document.getElementById("cell" + i);
      myArray.push(items);
    }

    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * gridSize) + 1;
      const randomGridBox = myArray[randomIndex];
      if (count == 0) {
        count++;
        randomGridBox.style.fontWeight = "900";
        randomGridBox.style.color = "white";

        randomGridBox.addEventListener("click", finish);
        setTimeout(() => {
          randomGridBox.style.fontWeight = "100";
          randomGridBox.style.color = "transparent";
          randomGridBox.removeEventListener("click", finish);
        }, timeSpeed);

      }
    }, timeSpeed);
  } showGameGrid(60, 1000, "repeat(5, 1fr)");
};

function finish() {
  stopTime = Date.now();
  myArray = [];
  result = (stopTime - startTime) / 1000;
  result = result.toFixed(2);
  console.log(result);
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
    topPlayers[i].textContent = `#${i + 1} ` + topFive[i].username;
    topScores[i].textContent = `${topFive[i].score} seconds`;
  }
  gameToResults();
};

// Go to results page
function gameToResults() {
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  // Add next left block
  let resultPageTemplate = document.getElementById("resultPage");
  const resultPageTemplateContent = document.importNode(resultPageTemplate.content, true);
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
  count--;
  console.log(player_name, result, "result");
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  let userPageTemplate = document.getElementById("userPage");
  const userPageTemplateContent = document.importNode(userPageTemplate.content, true);
  leftTemplate.appendChild(userPageTemplateContent);
  //Reset user to game to default
  userToGame();
};
