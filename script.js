const container = document.querySelector("#container");
const numberOf = 4;
const heightOf = 860/numberOf;
for (let i=0; i < 5; i++) {
    container.innerHTML += `<div style="max-height: ${heightOf}px;"></div>`;
    
    
}

const divs = document.querySelector("#container > div");

