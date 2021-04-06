var container = document.getElementById("gridContainer");
var containerStyle = container.style;

function showGameGrid(gridSize, timeSpeed, repeatGrid) {
  containerStyle.gridTemplateColumns = repeatGrid;
  // Adding all items inside container
  for (let i = 0; i < gridSize; i++) {
    var contentContainer = document.createElement("div");
    container.appendChild(contentContainer);
    contentContainer.setAttribute('id', 'cell' + i);
    contentContainer.innerHTML = "Stop me!";
  }

  const myArray = [];
  for (let i = 0; i < gridSize; i++) {
    const items = document.getElementById("cell" + i);
    myArray.push(items);
  }

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * gridSize) + 1;
    const randomGridBox = myArray[randomIndex];
    randomGridBox.style.fontWeight = "900";
    randomGridBox.style.color = "white";

    randomGridBox.addEventListener("click", finish);

    setTimeout(() => {
      randomGridBox.style.fontWeight = "100";
      randomGridBox.style.color = "transparent";
      randomGridBox.removeEventListener("click", finish);
    }, timeSpeed);

  }, timeSpeed);

  myArray.forEach((element) => {
    element.style.height = "fit-content";
    element.style.padding = "fit-content";
    element.style.textAlign = "center";
    element.style.transition = ".4s";
    element.style.fontSize = "45px",
    element.style.fontWeight = "100";
    element.style.color = "transparent";
    element.style.textTransform = "uppercase";

  });
};showGameGrid(60,1000,"repeat(5, 1fr)");

var grid = document.getElementById("radioButton");
var grid1 = document.getElementById("radioButton1");
var grid2 = document.getElementById("radioButton2");
var time = document.getElementById("radioButton");
var time1 = document.getElementById("radioButton1");
var time2 = document.getElementById("radioButton2");

if (grid.checked && time.checked){
  showGameGrid(12,1000,"repeat(3, 1fr)");
} else if (grid.checked && time1.checked) {
  showGameGrid(12,800,"repeat(3, 1fr)");
} else if (grid.checked && time2.checked) {
  showGameGrid(12,500,"repeat(3, 1fr)");
} else if (grid1.checked && time.checked) {
  showGameGrid(24,1000,"repeat(5, 1fr)");
} else if (grid1.checked && time1.checked) {
  showGameGrid(24,800,"repeat(5, 1fr)");
} else if (grid1.checked && time2.checked) {
  showGameGrid(24,500,"repeat(5, 1fr)");
} else if (grid2.checked && time.checked) {
  showGameGrid(60,1000,"repeat(5, 1fr)");
} else if (grid2.checked && time1.checked) {
  showGameGrid(60,800,"repeat(5, 1fr)");
} else if (grid2.checked && time2.checked) {
  showGameGrid(60,500,"repeat(5, 1fr)");
} 
