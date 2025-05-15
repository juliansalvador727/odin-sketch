function createGrid(rows) {
  const container = document.getElementById("container");

  for (let i = 1; i <= rows; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
  }
}

createGrid(16);
