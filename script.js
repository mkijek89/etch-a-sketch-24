const container = document.getElementById('container');
const input = document.querySelector("input");
const button = document.querySelector("button");
const inRow = input.value;

function appendGrid (container, rows) {
    
    const roundedRows = Math.round(rows);
    const multiplier = roundedRows*roundedRows;
    const squareSize = 860/roundedRows;
    
    if (rows > 100){
        alert("Number of squares per side must no be higher than 100");
        location.reload();
    } else {
        for (let i = 0; i < multiplier; i++){
        const child = document.createElement('div');
        child.classList.add('new')
        child.style.height = `${squareSize}px`;
        child.style.width = `${squareSize}px`;
        container.appendChild(child);
       
        }
        const squares = document.querySelectorAll(".new");
        squares.forEach((square) => {
    
        square.addEventListener("mouseover", function changeColor () {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        )});
    }
}



function clearGrid(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
}

window.onload = appendGrid(container, 16);

button.addEventListener('click', () => {
    clearGrid(container);
    appendGrid(container, input.value);
});

