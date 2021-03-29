// Array to be sorterd

var rank = new Array();
 
localStorage.setItem("Hayk", 20);


 
for (var i = 0; i < localStorage.length; i++){
 userName = localStorage.key(i);
 punctuation = localStorage.getItem(userName);
 //console.log(userName, punctuation);
 rank.push({"name": userName, "punctuation": punctuation});
};
 
// console.log("This is an unordered rank:", rank);
 
rank.sort(function(a, b){return a.punctuation - b.punctuation});
console.log("This is an ordered rank:", rank[1].punctuation);


 
// Clear all local storage
// localStorage.clear();



 