
//_______________check the values we grap
document.querySelector(' input.ver').addEventListener('click',ver);

//_______________put it in variables


var rank = new Array();
 
localStorage.setItem(user_name(), result());

function ver(){
    console.log(user_name()); 
    console.log(result());
    console.log(localStorage.getItem('value'));
}

 /*
for (var i = 0; i < localStorage.length; i++){
 userName = localStorage.key(i);
 punctuation = localStorage.getItem(player);
 //console.log(userName, punctuation);
 rank.push({"name": player, "punctuation": points});
};
 
// console.log("This is an unordered rank:", rank);
 
//rank.sort(function(a, b){return a.punctuation - b.punctuation});
console.log("This is an ordered rank:", rank[1].punctuation);


 
// Clear all local storage
// localStorage.clear();*/
