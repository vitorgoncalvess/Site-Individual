
minasClicadas = 0
    function validarSessao() {
    if (sessionStorage.NOME_USUARIO != undefined) {
      loginContent.style.display = 'none'
      cadastroContent.style.display = 'none'
      contatoContent.style.display = 'none'
      money1.style.display = 'none'
      money.style.display = 'block'
      lista.style.marginLeft = '-800px'
      dinheiro.style.display = 'block'
      sessao = sessionStorage.NOME_USUARIO.split(" ")
      dinheiroSessao = sessionStorage.DINHEIRO_USUARIO
      nomeUsuario.innerHTML = `${sessao[0]}`
      money.innerHTML = `R$${Number(dinheiroSessao).toFixed(2)}`
      nomeUsuario.style.display = 'block'
      logo1.style.display = 'block'
    }
  }
function shuffle(minaJogo) {
    let x = minaJogo.length,  y;
  
    while (x != 0) {
  
      y = Math.floor(Math.random() * x);
      x--;

      [minaJogo[x], minaJogo[y]] = [
        minaJogo[y], minaJogo[x]];
    }
  
    return minaJogo;
  }
  
function startMines() {
    aposta = Number(apostaInput.value);
  if (aposta < 1) {
    return false;
  }
  if (aposta > dinheiroSessao) {
    return false;
  } 
  if (sessionStorage.NOME_USUARIO == undefined) {
    return false;
  }
  sessionStorage.DINHEIRO_USUARIO -= aposta
  dinheiroSessao -= aposta
  money.innerHTML = `R$${dinheiroSessao.toFixed(2)}`
  botaoParar.style.cursor = 'pointer'
  botaoParar.style.backgroundColor = 'rgb(0, 190,0)'
  botaoParar.innerHTML = `Retirar R$${aposta.toFixed(2)}<br>`
  document.getElementById('botaoParar').addEventListener('click', pararJogo)
  document.getElementById('botaoIniciar').removeAttribute('onclick')
    document.getElementById('botaoIniciar').style.cursor = 'default'
    document.getElementById('botaoIniciar').style.backgroundColor = 'rgb(0, 141,0)'
    qtdMinas = apostaSelect.value;
    multiplicador = 1
    if (qtdMinas > 2) {
        multiplicador = 1.08 ** qtdMinas
    }
    multplier = 1.09
    minasClicadas = 0
    minaJogo = [];
    mines1.innerHTML = ''
    mines2.innerHTML = ''
    mines3.innerHTML = ''
    mines4.innerHTML = ''
    mines5.innerHTML = ''
    for (let i = 0; i < 25; i++)     {
        if (i < qtdMinas && i < 5) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}'), virarMinas()"></div>`;
        } else if (i < qtdMinas && i >= 5 && i < 10) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}'), virarMinas()"></div>`;
        } else if (i < qtdMinas && i >= 10 && i < 15) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}'), virarMinas()"></div>`;
        } else if (i < qtdMinas && i >= 15 && i < 20) {
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}'), virarMinas()"></div>`;
        } else if (i < qtdMinas && i >= 20) { 
            minaJogo[i] = `<div id="minesJogo${i}" class="minesJogo1" onclick="clickMine(true, '${i}'), virarMinas()"></div>`;
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
    minasClicadas ++
    x = 25 - qtdMinas
    for (let y = qtdMinas - 2; y < minasClicadas; y++) {
        if (y < 5) {
            multplier = 1.08
        } else if (y >= 5 && y < 10) { 
            multplier = 1.11
        } else if (y >= 10 && y < 15) { 
            multplier = 1.15
        } else if (y >= 15 && y < 20) { 
            multplier = 1.20
        } else if (y >= 20) { 
            multplier = 1.26
        }
    }
    if (mina) {
        document.getElementById(`minesJogo${id}`).style.backgroundColor = 'red';
        document.getElementById(`minesJogo${id}`).style.cursor = 'default';
        endGame();
    } else {
        x--
        document.getElementById(`minesJogo${id}`).style.backgroundColor = 'rgb(0,255,0)';
        document.getElementById(`minesJogo${id}`).style.cursor = 'default';
        document.getElementById(`minesJogo${id}`).removeAttribute('onclick');
        multiplicador *= multplier
        botaoParar.innerHTML = `Retirar R$${(aposta * multiplicador).toFixed(2)}<br>
        <span style="font-size: 12px;">(${(multiplicador.toFixed(2))}x)</span>`
    }
    if (x == 0) { 
        pararJogo()
    }
}
function endGame() {
    for (let x = 0; x < 25; x++) {
        document.getElementById(`minesJogo${x}`).removeAttribute('onclick');
        document.getElementById(`minesJogo${x}`).style.cursor = 'default';
    }
    botaoParar.style.cursor = 'default'
    botaoParar.style.backgroundColor = 'rgb(0,141,0)'
    document.getElementById('botaoParar').removeEventListener('click', pararJogo)
    virarMinas();
    document.getElementById('botaoIniciar').addEventListener('click', startMines)
    document.getElementById('botaoIniciar').style.cursor = 'pointer'
    document.getElementById('botaoIniciar').style.backgroundColor = 'rgb(0, 255,0)'
}
function pararJogo() {
    aposta *= multiplicador
    dinheiroSessao += aposta
    sessionStorage.DINHEIRO_USUARIO = parseInt(sessionStorage.DINHEIRO_USUARIO) + aposta
    money.innerHTML = `R$${Number(dinheiroSessao).toFixed(2)}`
    apostaInput.value = ''
    virarMinas();
    for (let x = 0; x < 25; x++) {
        document.getElementById(`minesJogo${x}`).removeAttribute('onclick');
        document.getElementById(`minesJogo${x}`).style.cursor = 'default';
    }
    document.getElementById('botaoParar').style.cursor = 'default'
    document.getElementById('botaoParar').style.backgroundColor = 'rgb(0,141,0)'
    document.getElementById('botaoParar').removeEventListener('click', pararJogo)
    document.getElementById('botaoIniciar').style.cursor = 'pointer'
    document.getElementById('botaoIniciar').style.backgroundColor = 'rgb(0,255,0)'
    document.getElementById('botaoIniciar').addEventListener('click', startMines)
}
function virarMinas() {
    for (let x = 0; x < 25; x++) {
        if (x < qtdMinas) {
            document.getElementById(`minesJogo${x}`).style.backgroundColor = 'rgb(160,0,0)';
        } else {
            document.getElementById(`minesJogo${x}`).style.backgroundColor = 'rgb(0,160,0)';
        }
    } 
}