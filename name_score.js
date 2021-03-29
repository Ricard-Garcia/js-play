// Array to be sorterd
//_________________________inputs to grap values
//_______________grap name
document.querySelector('form.player input.names').addEventListener('click',user_name);
//_______________grap time
document.querySelector('div input.start').addEventListener('click',start);
document.querySelector('div.gameStart input.play').addEventListener('click',finish);
document.querySelector('div.gameStart input.result').addEventListener('click',result);
//_______________grap time


var go=0;
var end=0;
var res=0;


function user_name(){
    var player_name=document.querySelector('form.player input.player').value;
    return player_name;
  }

function start(){   go=Date.now();  }
function finish(){   end=Date.now();    }

function result(){
    var res=end-go;
    res= (end-go)/1000;
    res=res.toFixed(2);
    return res
    
 }


    




 