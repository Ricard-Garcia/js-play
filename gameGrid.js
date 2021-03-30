const container = document.getElementById("container");
const items = document.querySelectorAll(".item");
console.log(items);
function showGameGrid() {
  var containerStyle = container.style;
  containerStyle.display = "grid";
  containerStyle.background = "lightBlue";
  containerStyle.border = "2px solid";
  containerStyle.gridTemplateColumns = "repeat(4, 1fr)";
  containerStyle.gridTemplateRows = "repeat(4, 1fr)";
  containerStyle.textAlign = "center";


  const randomIndex = Math.floor(Math.random() * 15) + 1;
  console.log(items[randomIndex]);


  
  var choose = setInterval(() => {
    
    const randomIndex = Math.floor(Math.random() * 15) + 1;
    console.log(items[randomIndex]);
    const randomGridBox = items[randomIndex];
    randomGridBox.style.background = "red";
    randomGridBox.style.visibility = "visible";
    randomGridBox.addEventListener("click", showNext)

    setTimeout(() => {
        randomGridBox.style.visibility = "hidden";
    },1000)

    count--
    

  }, 1000);

  items.forEach((element) => {
    element.style.border = "2px solid";
    element.style.height = "30px";
    element.style.padding = "10px";
    // console.log(element)
    //
  });
}

function showNext() {
    container.innerHTML = "GOOD"
}

function init() {
  showGameGrid();
}

init();
