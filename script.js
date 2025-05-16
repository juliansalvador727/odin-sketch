const container = document.getElementById("container");
const containerWidthPx = 640;
const containerHeightPx = 640;
const clearBtn = document.getElementById("clearGrid");
const gridSizeInput = document.getElementById("gridSize");
const gridSizeLabel = document.getElementById("gridSizeLabel");
const resizeBtn = document.getElementById("resizeGrid");

let leftClickHold = false;
let rightClickHold = false;

function initializeMouseLogic() {
  document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      leftClickHold = true;
    } else if (e.button === 2) {
      rightClickHold = true;
    }
  });
  document.addEventListener("mouseup", () => {
    leftClickHold = false;
    rightClickHold = false;
  });
  document.addEventListener("mouseleave", () => (leftClickHold = false));
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

const getRandomColor = () => {
  randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const R = randomBetween(0, 255);
  const G = randomBetween(0, 255);
  const B = randomBetween(0, 255);
  return `rgb(${R}, ${G}, ${B})`;
};

function addHoverEffect(square) {
  square.addEventListener("mouseenter", () => {
    if (leftClickHold) {
      square.style.backgroundColor = getRandomColor();
      square.style.transition = "background-color 0.2s ease";
      square.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    } else if (rightClickHold) {
      square.style.backgroundColor = "#f4f4f4";
      square.style.boxShadow = "none";
    } else {
      console.log("Mouse is not down");
    }
  });
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
    square.style.transition = "background-color 0.5s ease";
    square.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  });
  square.addEventListener("mousedown", (e) => {
    if (e.button === 2) {
      square.style.backgroundColor = "#f4f4f4";
      square.style.boxShadow = "none";
    }
  });
}

function clearGrid() {
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((square) => {
    square.style.backgroundColor = "#f4f4f4";
    square.style.boxShadow = "none";
  });
}

function createGrid(gridSquare) {
  clearGrid();
  const rows = gridSquare * gridSquare;
  container.innerHTML = "";
  for (let i = 1; i <= rows; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    addHoverEffect(square);
    square.style.width = `${containerWidthPx / gridSquare}px`;
    square.style.height = `${containerHeightPx / gridSquare}px`;
    container.appendChild(square);
  }
}

resizeBtn.onclick = () => {
  const gridSize = parseInt(gridSizeInput.value);
  if (gridSize > 0 && gridSize <= 100) {
    console.log(gridSize);
    createGrid(gridSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
};

createGrid(4);
initializeMouseLogic();
