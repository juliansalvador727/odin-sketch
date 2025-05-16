const container = document.getElementById("container");
const containerWidthPx = 640;
const containerHeightPx = 640;

let R = randomBetween(0, 255);
let G = randomBetween(0, 255);
let B = randomBetween(0, 255);

function addHoverEffect(square) {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
}

function createGrid(gridSquare) {
  const rows = gridSquare * gridSquare;

  for (let i = 1; i <= rows; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    addHoverEffect(square);
    square.style.width = `${containerWidthPx / gridSquare}px`;
    square.style.height = `${containerHeightPx / gridSquare}px`;
    container.appendChild(square);
  }
}

createGrid(4);
