var logButton = document.getElementById("initialButton");
logButton.addEventListener('click',userToGame);

function userToGame() {
    var form = document.getElementById('userNameForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let leftTemplate = document.getElementById('leftBlock');
        leftTemplate.innerHTML = "";
        let gamePageTemplate = document.getElementById('gamePage');
        let gamePageTemplateContent = gamePageTemplate.content;
        document.getElementById('leftBlock').appendChild(gamePageTemplateContent);
        var stopButton = document.getElementById("stopGame");
        stopButton.addEventListener('click', gameToResults);
    });
}

function gameToResults() {
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";
    let resultPageTemplate = document.getElementById('resultPage');
    let resultPageTemplateContent = resultPageTemplate.content;
    document.getElementById('leftBlock').appendChild(resultPageTemplateContent);
    var againButton = document.getElementById("playAgain");
    againButton.onclick = resultsToUser;
}

function resultsToUser() {
    let leftTemplate = document.getElementById('leftBlock');
    leftTemplate.innerHTML = "";
    let userPageTemplate = document.getElementById('userPage');
    let userPageTemplateContent = userPageTemplate.content;
    document.getElementById('leftBlock').appendChild(userPageTemplateContent);

}