function shuffle(minaJogo) {
    let x = minaJogo.length,  y;
  
    // While there remain elements to shuffle.
    while (x != 0) {
  
      // Pick a remaining element.
      y = Math.floor(Math.random() * x);
      x--;
  
      // And swap it with the current element.
      [minaJogo[x], minaJogo[y]] = [
        minaJogo[y], minaJogo[x]];
    }
  
    return minaJogo;
  }
  
function startMines() {
    qtdMinas = apostaSelect.value;
    minaJogo = [];
    mines1.innerHTML = ''
    mines2.innerHTML = ''
    mines3.innerHTML = ''
    mines4.innerHTML = ''
    mines5.innerHTML = ''
    for (let i = 0; i < 25; i++)     {
        if (i < qtdMinas && i < 5) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}')"></div>`;
        } else if (i < qtdMinas && i >= 5 && i < 10) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}')"></div>`;
        } else if (i < qtdMinas && i >= 10 && i < 15) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}')"></div>`;
        } else if (i < qtdMinas && i >= 15 && i < 20) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}')"></div>`;
        } else if (i < qtdMinas && i >= 20) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}')"></div>`;
        } else if (i < 5) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(false, '${i}')"></div>`
        } else if (i >= 5 && i < 10) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(false, '${i}')"></div>`
        } else if (i >= 10 && i < 15) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(false, '${i}')"></div>`
        } else if (i >= 15 && i < 20) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(false, '${i}')"></div>`
        } else if (i >= 20) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(false, '${i}')"></div>`
        }
    }
    shuffle(minaJogo);    
    for (let i = 0; i < 25; i++) {
        if (i < 5) {
            mines1.innerHTML += minaJogo[i];
        } else if (i >= 5 && i < 10) { 
            mines2.innerHTML += minaJogo[i];
        } else if (i >= 10 && i < 15) { 
            mines3.innerHTML += minaJogo[i];
        } else if (i >= 15 && i < 20) { 
            mines4.innerHTML += minaJogo[i];
        } else if (i >= 20) { 
            mines5.innerHTML += minaJogo[i];
        }
    }
}
function clickMine(mina, id) {
    if (mina) {
        document.getElementById(`minesJogo${id}`).style.backgroundColor = 'red';
        document.getElementById(`minesJogo${id}`).style.cursor = 'default';
    } else {
        document.getElementById(`minesJogo${id}`).style.backgroundColor = 'rgb(0,255,0)';
        document.getElementById(`minesJogo${id}`).style.cursor = 'pointer';
    }
}