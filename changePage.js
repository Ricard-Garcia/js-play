var logButton = document.getElementById("initialButton");
logButton.addEventListener('click',userToGame);

// Go to game page
function userToGame() {
    // Checking user form
    var form = document.getElementById('userNameForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var player_name=document.querySelector('form#userNameForm input').value;
        console.log(player_name);
        
        
       
        // Remove previous left block
        let leftTemplate = document.getElementById('leftBlock');
        leftTemplate.innerHTML = "";

        // Add next left block
        let gamePageTemplate = document.getElementById('gamePage');
        const gamePageTemplateContent = document.importNode(gamePageTemplate.content, true);
        document.getElementById('leftBlock').appendChild(gamePageTemplateContent);
        
       
        document.getElementById('getReady').style.display='none';
        //_______start
        var startButton=document.getElementById('startGame');
        startButton.addEventListener('click',showGetReady);
        


    });
    /* //_______stop
     var stopButton = document.getElementById("stopGame");
        
     stopButton.addEventListener('click', gameToResults);*/
    function  showGetReady(){
   

            document.getElementById('getReady').style.display='';
            document.getElementById('startGame').style.display='none';

        setTimeout(function(){ 

            document.getElementById('getReady').style.display='none';
            showStop();
        }, 1000);
        // Add next left block
    
    }


    // Test print
    console.log("Switched to game")
}
function showStop(){
    // Add next left block
    let stopPageTemplate = document.getElementById('stopPage');
    const stopPageTemplateContent = document.importNode(stopPageTemplate.content, true);
    document.getElementById('leftBlock').appendChild(stopPageTemplateContent);
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