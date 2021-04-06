var player_name = "";
var scoreArray = [];
var startTime = 0;
var stopTime = 0;
var result = 0;
var count = 0;
var grid = document.getElementById("radioButton");
var grid1 = document.getElementById("radioButton1");
var grid2 = document.getElementById("radioButton2");
var time = document.getElementById("radioButton3");
var time1 = document.getElementById("radioButton4");
var time2 = document.getElementById("radioButton5");
var logButton = document.getElementById("initialButton");
logButton.onclick = userToGame;

// Go to game page
function userToGame() {
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
    var startButton = document.getElementById("startGame");
    startButton.onclick = showGetReady;
  });

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
      randomGridBox.style.fontWeight = "900";
      randomGridBox.style.color = "white";

      randomGridBox.addEventListener("click", finish);
      setTimeout(() => {
        randomGridBox.style.fontWeight = "100";
        randomGridBox.style.color = "transparent";
        randomGridBox.removeEventListener("click", finish);
      }, timeSpeed);

    }, timeSpeed);
  }

  if (grid.checked && time.checked) {
    showGameGrid(12, 1000, "repeat(3, 1fr)");
  } else if (grid.checked && time1.checked) {
    showGameGrid(12, 800, "repeat(3, 1fr)");
  } else if (grid.checked && time2.checked) {
    showGameGrid(12, 200, "repeat(3, 1fr)");
  } else if (grid1.checked && time.checked) {
    showGameGrid(25, 1000, "repeat(5, 1fr)");
  } else if (grid1.checked && time1.checked) {
    showGameGrid(25, 800, "repeat(5, 1fr)");
  } else if (grid1.checked && time2.checked) {
    showGameGrid(25, 200, "repeat(5, 1fr)");
  } else if (grid2.checked && time.checked) {
    showGameGrid(60, 1000, "repeat(5, 1fr)");
  } else if (grid2.checked && time1.checked) {
    showGameGrid(60, 800, "repeat(5, 1fr)");
  } else if (grid2.checked && time2.checked) {
    showGameGrid(60, 200, "repeat(5, 1fr)");
  }

};

function finish() {
  stopTime = Date.now();
  myArray = [];
  result = (stopTime - startTime) / 1000;
  result = result.toFixed(2);
  localStorage.setItem(player_name, result);

  // sidebar top users and scores
  for (var i = 0; i < localStorage.length; i++) {
    userName = localStorage.key(i);
    userScore = localStorage.getItem(userName);
    scoreArray.push({ username: userName, score: userScore });
  };

  var topFive = scoreArray.sort((a, b) => a.score - b.score).slice(0, 5);
  var topPlayers = document.querySelectorAll(".topName");
  var topScores = document.querySelectorAll(".topScore");

  for (var i = 0; i < topFive.length; i++) {
    topPlayers[i].textContent = `#${i + 1} ` + topFive[i].username;
    topScores[i].textContent = `${topFive[i].score} seconds`;
  };

  gameToResults();
};

// Go to results page
function gameToResults() {
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";

  let resultPageTemplate = document.getElementById("resultPage");
  const resultPageTemplateContent = document.importNode(resultPageTemplate.content, true);
  leftTemplate.appendChild(resultPageTemplateContent);

  var secondsScore = document.getElementById("secondsScore");
  secondsScore.innerHTML = `${result} seconds`;
  var againButton = document.getElementById("playAgain");
  againButton.onclick = resultsToUser;
};

// Go to initial page
function resultsToUser() {
  console.log(player_name, result, "result");
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";

  let userPageTemplate = document.getElementById("userPage");
  const userPageTemplateContent = document.importNode(userPageTemplate.content, true);
  leftTemplate.appendChild(userPageTemplateContent);

  userToGame();
};
