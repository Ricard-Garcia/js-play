var logButton = document.getElementById("initialButton");
logButton.addEventListener("click", userToGame);

var player_name = "";
var scoreArray = [];

// Go to game page
function userToGame() {
  // Checking user form
  var form = document.getElementById("userNameForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    player_name = document.querySelector("form#userNameForm input").value;
    console.log(player_name);

    // Remove previous left block
    let leftTemplate = document.getElementById("leftBlock");
    leftTemplate.innerHTML = "";

    // Add next left block
    let gamePageTemplate = document.getElementById("gamePage");
    const gamePageTemplateContent = document.importNode(
      gamePageTemplate.content,
      true
    );
    document.getElementById("leftBlock").appendChild(gamePageTemplateContent);

    document.getElementById("getReady").style.display = "none";
    //_______start
    var startButton = document.getElementById("startGame");
    startButton.addEventListener("click", showGetReady);
  });
  /* //_______stop
     var stopButton = document.getElementById("stopGame");
        
     stopButton.addEventListener('click', gameToResults);*/
  function showGetReady() {
    document.getElementById("getReady").style.display = "";
    document.getElementById("startGame").style.display = "none";

    setTimeout(function () {
      document.getElementById("getReady").style.display = "none";
      showStop();
    }, 1000);
    // Add next left block
  }

  // Test print
  console.log("Switched to game");
}
// _________________In this global variables we set the times we need.
var go = 0;
var end = 0;
var result = 0;
console.log("old value of result", result);
function showStop() {
  go = Date.now();
  // Add next left block
  let stopPageTemplate = document.getElementById("stopPage");
  const stopPageTemplateContent = document.importNode(
    stopPageTemplate.content,
    true
  );
  document.getElementById("leftBlock").appendChild(stopPageTemplateContent);

  // _________________Giving funcionality to stop button.

  document.getElementById("stopGame").addEventListener(
    "click",

    // _________________calculating the seconds.

    function finish() {
      end = Date.now();
      result = ((end - go)/1000)
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
        topPlayers[i].textContent = topFive[i].username;
        topScores[i].textContent = `${topFive[i].score} seconds`;
      }
      gameToResults()
    }
  );
}

// Go to results page
function gameToResults() {
    
    
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  

  // Add next left block
  let resultPageTemplate = document.getElementById("resultPage");
  const resultPageTemplateContent = document.importNode(
    resultPageTemplate.content,
    true
  );
  document.getElementById("leftBlock").appendChild(resultPageTemplateContent);
  var againButton = document.getElementById("playAgain");
  againButton.onclick = resultsToUser;


  var secondScore = document.querySelector("#secondScore")
 var currentScore = Object.values(localStorage).pop();
secondScore.textContent = `${currentScore} seconds`
  // Test print
  console.log("Switched to results");
}

// Go to initial page
function resultsToUser() {
    console.log(player_name, result, "result")
  // Remove previous left block
  let leftTemplate = document.getElementById("leftBlock");
  leftTemplate.innerHTML = "";
  let userPageTemplate = document.getElementById("userPage");
  const userPageTemplateContent = document.importNode(
    userPageTemplate.content,
    true
  );
  document.getElementById("leftBlock").appendChild(userPageTemplateContent);

  // Test print
  console.log("Switched to user");

  //Reset user to game to default
  userToGame();
}
