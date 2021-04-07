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
  restartBoard();
  scoreArray = [];
  form = document.getElementById("userNameForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    player_name = document.getElementById('userInput').value;
    let leftTemplate = document.getElementById("leftBlock");
    leftTemplate.innerHTML = "";
    let gamePageTemplate = document.getElementById("gamePage");

    const gamePageTemplateContent = document.importNode(gamePageTemplate.content, true);
    leftTemplate.appendChild(gamePageTemplateContent);

    document.getElementById("getReady").style.display = "none";
    var startButton = document.getElementById("startGame");
    startButton.onclick = showGetReady;
    document.querySelector("body").style.backdropFilter = "hue-rotate(250deg) saturate(150%)";
    document.getElementById("sideBar").style.animationName = 'slideAnimation';
    document.getElementById("sideBar").style.animationDuration = '0.5s';
    document.getElementById("sideBar").style.animationDirection = 'normal';
    startButton.style.animationName = 'startButon';

    setTimeout(function () {
      document.getElementById("sideBar").style.display = "none";
    }, 50);

  });

  //Show get ready button
  function showGetReady() {
    document.querySelector("body").style.backdropFilter = "hue-rotate(50deg)";
    document.getElementById("mainSection").style.gridTemplateColumns = "1fr ";
    var randomNumber = Math.floor(Math.random() * 1000) + 1000;

    var getReadyText = document.getElementById("getReady");
    getReadyText.style.display = "";

    document.getElementById("startGame").style.display = "none";
    setTimeout(function () {
      getReadyText.style.display = "none";
      showStop();
    }, randomNumber);
  };
};

// Start the game
function showStop() {
  document.querySelector("body").style.animationName = "color";
  document.querySelector("body").style.backdropFilter = "hue-rotate(50deg) saturate(50%)";
  startTime = Date.now();
  let stopPageTemplate = document.getElementById("stopPage");
  const stopPageTemplateContent = document.importNode(stopPageTemplate.content, true);
  document.getElementById("leftBlock").appendChild(stopPageTemplateContent);

  var container = document.getElementById("gridContainer");
  var containerStyle = container.style;

  function showGameGrid(gridSize, timeSpeed, repeatGrid) {
    containerStyle.gridTemplateColumns = repeatGrid;

    for (let i = 0; i < gridSize; i++) {
      var contentContainer = document.createElement("div");
      container.appendChild(contentContainer);
      contentContainer.setAttribute('id', 'cell' + i);
      contentContainer.innerHTML = "Stop me!";
    };

    var myArray = [];
    for (let i = 0; i < gridSize; i++) {
      const items = document.getElementById("cell" + i);
      myArray.push(items);
    };

    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * gridSize) + 1;
      const randomGridBox = myArray[randomIndex];
      randomGridBox.style.fontWeight = "900";
      randomGridBox.style.color = "white";

      if (grid.checked) {
        randomGridBox.style.fontSize = "80px";
      } else if (grid1.checked) {
        randomGridBox.style.fontSize = "50px";
      } else if (grid2.checked) {
        randomGridBox.style.fontSize = "30px";
      }

      randomGridBox.addEventListener("click", finish);
      setTimeout(() => {
        randomGridBox.style.fontWeight = "100";
        randomGridBox.style.color = "transparent";
        randomGridBox.removeEventListener("click", finish);
      }, timeSpeed);

    }, timeSpeed);
  };

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

// Go to finish page
function finish() {
  document.querySelector("body").style.animationName = "";
  document.querySelector("body").style.transition = "0.5s";
  document.getElementById("sideBar").style.animationDirection = 'reverse';
  document.getElementById("sideBar").style.display = 'flex';
  document.getElementById("mainSection").style.gridTemplateColumns = "3fr 1fr";

  myArray = [];
  stopTime = Date.now();
  result = (stopTime - startTime) / 1000;
  result = result.toFixed(2);
  localStorage.setItem(player_name, result);

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

//Restart grid
function restartBoard() {
  grid = document.getElementById("radioButton");
  grid1 = document.getElementById("radioButton1");
  grid2 = document.getElementById("radioButton2");
  time = document.getElementById("radioButton3");
  time1 = document.getElementById("radioButton4");
  time2 = document.getElementById("radioButton5");
};

// Go to initial page
function resultsToUser() {
  console.log(player_name, result, "result");
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";

  let userPageTemplate = document.getElementById("userPage");
  const userPageTemplateContent = document.importNode(userPageTemplate.content, true);
  leftTemplate.appendChild(userPageTemplateContent);

  document.querySelector('.title-page').style.animationName = 'start';
  document.querySelector('div#mainPageForm').style.animationName = 'inputName';
  //Restart the slide animation
  document.getElementById("sideBar").style.animationName = '';
  document.querySelector("body").style.backdropFilter = "hue-rotate(0deg)"

  userToGame();
};


