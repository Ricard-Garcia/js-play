// Array to be sorterd
document.querySelector('form.player input.names').addEventListener('click',nom );
document.querySelector('div input.start').addEventListener('click',start);
document.querySelector('div.gameStart input.play').addEventListener('click',finish);
document.querySelector('div.gameStart input.result').addEventListener('click',result);
document.querySelector(' input.ver').addEventListener('click',ver);

var go=0;
var end=0;
var res=0;


function nom(){
    var player_name=document.querySelector('form.player input.player').value;
    return player_name;
}

function start(){
  go=new Date();
}

function finish(){
  end=new Date();    
}

function result(){
    res= (end-go)/1000;
    res=res.toFixed(2)
    console.log(res)
 }

result()
function ver(){
    console.log(points); 
    console.log(user);
}
    

/*
var rank = new Array();
 
localStorage.setItem(player, points);
*/

 /*
for (var i = 0; i < localStorage.length; i++){
 userName = localStorage.key(i);
 punctuation = localStorage.getItem(player);
 //console.log(userName, punctuation);
 rank.push({"name": player, "punctuation": points});
};
 
// console.log("This is an unordered rank:", rank);
 
//rank.sort(function(a, b){return a.punctuation - b.punctuation});
console.log("This is an ordered rank:", rank[1].punctuation);*/


 
// Clear all local storage
// localStorage.clear();



 