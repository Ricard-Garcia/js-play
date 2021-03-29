var logButton = document.getElementById("initialButton");
logButton.addEventListener('click',userToGame);

function userToGame() {
    var form = document.getElementById('userNameForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let leftTemplate = document.getElementById('leftBlock');
        leftTemplate.innerHTML = "";
        let gamePageTemplate = document.getElementById('gamePage');
        const gamePageTemplateContent = document.importNode(gamePageTemplate.content, true);
        // let gamePageTemplateContent = gamePageTemplate.content;
        document.getElementById('leftBlock').appendChild(gamePageTemplateContent);
        var stopButton = document.getElementById("stopGame");
        stopButton.addEventListener('click', gameToResults);
    });

    console.log("Switched to game")

}

function gameToResults() {
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";
    let resultPageTemplate = document.getElementById('resultPage');
    const resultPageTemplateContent = document.importNode(resultPageTemplate.content, true);
    // let resultPageTemplateContent = resultPageTemplate.content;
    document.getElementById('leftBlock').appendChild(resultPageTemplateContent);
    var againButton = document.getElementById("playAgain");
    againButton.onclick = resultsToUser;

    console.log("Switched to results")

}

function resultsToUser() {
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";
    let userPageTemplate = document.getElementById('userPage');
    const userPageTemplateContent = document.importNode(userPageTemplate.content, true);
    // let userPageTemplateContent = userPageTemplate.content;
    document.getElementById('leftBlock').appendChild(userPageTemplateContent);
    console.log("Switched to user");
    userToGame();


}