var container = document.getElementById("gridContainer");
var containerStyle = container.style;
containerStyle.gridTemplateColumns = "repeat(5, 1fr)";

function showGameGrid() {
  // Adding all items inside container
  for (let i = 0; i < 60; i++) {
    var contentContainer = document.createElement("div");
    container.appendChild(contentContainer);
    contentContainer.setAttribute('id', 'cell' + i);
    contentContainer.innerHTML = "Stop me!";
  }

  const myArray = [];
  for (let i = 0; i < 60; i++) {
    const items = document.getElementById("cell" + i);
    myArray.push(items);
  }

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * 60) + 1;
    const randomGridBox = myArray[randomIndex];
    randomGridBox.style.fontWeight = "900";
    randomGridBox.style.color = "white";
    randomGridBox.addEventListener("click", finish);

    setTimeout(() => {
      randomGridBox.style.fontWeight = "100";
      randomGridBox.style.color = "transparent";
      randomGridBox.removeEventListener("click", finish);
    }, 1000);

  }, 1000);

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
} showGameGrid();
