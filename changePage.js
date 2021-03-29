var Button = document.getElementById("initialButton");
Button.onclick = userToGame;

function userToGame() {
    var form = document.getElementById('userNameForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let leftTemplate = document.getElementById('leftBlock');
        leftTemplate.innerHTML = "";
        let gamePageTemplate = document.getElementById('gamePage');
        let gamePageTemplateContent = gamePageTemplate.content;
        document.getElementById('leftBlock').appendChild(gamePageTemplateContent);
    });
}