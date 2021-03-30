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

  var count = 1
  var choose = setInterval(() => {
    
    const randomIndex = Math.floor(Math.random() * 15) + 1;
    console.log(items[randomIndex]);
    const randomGridBox = items[randomIndex];
    randomGridBox.style.background = "red";

    count--
    if(count === 0 ) {
        clearInterval(choose)
    }

  }, 1000);

  items.forEach((element) => {
    element.style.border = "2px solid";
    element.style.height = "30px";
    element.style.padding = "10px";
    // console.log(element)
    //
  });
}

function init() {
  showGameGrid();
}

init();
