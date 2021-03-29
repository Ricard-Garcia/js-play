var logButton = document.getElementById("initialButton");
logButton.addEventListener('click',userToGame);

// Go to game page
function userToGame() {
    // Checking user form
    var form = document.getElementById('userNameForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Remove previous left block
        let leftTemplate = document.getElementById('leftBlock');
        leftTemplate.innerHTML = "";

        // Add next left block
        let gamePageTemplate = document.getElementById('gamePage');
        const gamePageTemplateContent = document.importNode(gamePageTemplate.content, true);
        document.getElementById('leftBlock').appendChild(gamePageTemplateContent);
        var stopButton = document.getElementById("stopGame");
        stopButton.addEventListener('click', gameToResults);
    });

    // Test print
    console.log("Switched to game")

}

// Go to results page
function gameToResults() {
    // Remove previous left block
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";

    // Add next left block
    let resultPageTemplate = document.getElementById('resultPage');
    const resultPageTemplateContent = document.importNode(resultPageTemplate.content, true);
    document.getElementById('leftBlock').appendChild(resultPageTemplateContent);
    var againButton = document.getElementById("playAgain");
    againButton.onclick = resultsToUser;

    // Test print
    console.log("Switched to results")

}

// Go to initial page
function resultsToUser() {
    // Remove previous left block
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";
    let userPageTemplate = document.getElementById('userPage');
    const userPageTemplateContent = document.importNode(userPageTemplate.content, true);
    document.getElementById('leftBlock').appendChild(userPageTemplateContent);

    // Test print
    console.log("Switched to user");

    //Reset user to game to default
    userToGame();


}