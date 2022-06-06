v = 1
minasClicadas = 0
dinheiroInicial = sessionStorage.DINHEIRO_USUARIO
dinheiroGasto = 0
qtdInicio.innerHTML = `Dinheiro Inicial <br> <span style="margin-left: 15px;">R$${Number(dinheiroInicial).toFixed(2)}</span>`
qtdAposta.innerHTML = `Dinheiro Gasto <br> <span style="margin-left: 20px;">R$0.00 </span>`
qtdRes.innerHTML = `R$0.00`
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
  dinheiroGasto += aposta
  qtdAposta.innerHTML = `Dinheiro Gasto <br> <span style="margin-left: 20px;">R$${dinheiroGasto}</span>`
  botaoParar.style.cursor = 'pointer'
  botaoParar.style.backgroundColor = 'rgb(0, 190,0)'
  botaoParar.innerHTML = `Retirar R$${aposta.toFixed(2)}<br>`
  document.getElementById('botaoParar').addEventListener('click', pararJogo)
  document.getElementById('botaoIniciar').removeAttribute('onclick')
    document.getElementById('botaoIniciar').style.cursor = 'default'
    document.getElementById('botaoIniciar').style.backgroundColor = 'rgb(0, 141,0)'
    qtdMinas = apostaSelect.value;
    if (qtdMinas == 2) {
        multiplicador = 1
    } else {
    multiplicador = Math.pow(1.08, qtdMinas * 1.73)
    }
    multplier = 1.08
    minasClicadas = 0
    minaJogo = [];
    rest = 25 - qtdMinas
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
        rest--
        document.getElementById(`minesJogo${id}`).style.backgroundColor = 'rgb(0,255,0)';
        document.getElementById(`minesJogo${id}`).style.cursor = 'default';
        document.getElementById(`minesJogo${id}`).removeAttribute('onclick');
        multiplicador *= multplier
        botaoParar.innerHTML = `Retirar R$${(aposta * multiplicador).toFixed(2)}<br>
        <span style="font-size: 12px;">(${(multiplicador.toFixed(2))}x)</span>`
    }
    if (rest == 0) { 
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
    dinheiroGanho.innerHTML = `-R$${aposta}<br>Mines`;
    if (dinheiroSessao - dinheiroInicial < 0) {
        qtdRes.innerHTML = `<span style="color: red;">-R$${(dinheiroInicial - dinheiroSessao).toFixed(2)}</span>`
    } else {
        qtdRes.innerHTML = `<span style="color: rgb(0,255,0);">+R$${(dinheiroSessao - dinheiroInicial).toFixed(2)}</span>`
    }
    resJogoWin.style.borderTop = `2px solid rgb(255, 123, 123)`;
    resJogoWin.style.borderLeft = ` 2px solid rgb(255, 123, 123)`;
    resJogoWin.style.color = "rgb(255, 123, 123)";
    loadingBar1.style.backgroundColor = "rgb(117, 0, 0)";
    loadingBar2.style.backgroundColor = "rgb(255, 0, 0)";
    resJogoWin.style.display = "flex";
    virarMinas();
    atDinheiro()
    notificacao() 
    document.getElementById('botaoIniciar').addEventListener('click', startMines)
    document.getElementById('botaoIniciar').style.cursor = 'pointer'
    document.getElementById('botaoIniciar').style.backgroundColor = 'rgb(0, 255,0)'
    botaoParar.innerHTML = 'Retirar'
}
function pararJogo() {
    aposta *= multiplicador
    dinheiroSessao += aposta
    sessionStorage.DINHEIRO_USUARIO = parseInt(sessionStorage.DINHEIRO_USUARIO) + aposta
    money.innerHTML = `R$${Number(dinheiroSessao).toFixed(2)}`
    dinheiroGanho.innerHTML = `R$${aposta.toFixed(2)}<br>${multiplicador.toFixed(2)}x<br>Mines`;
    if (dinheiroSessao - dinheiroInicial < 0) {
        qtdRes.innerHTML = `<span style="color: red;">-R$${(dinheiroInicial - dinheiroSessao).toFixed(2)}</span>`
    } else {
        qtdRes.innerHTML = `<span style="color: rgb(0,255,0);">+R$${(dinheiroSessao - dinheiroInicial).toFixed(2)}</span>`
    }
    resJogoWin.style.borderTop = `2px solid rgb(123, 255, 123)`;
    resJogoWin.style.borderLeft = `2px solid rgb(123, 255, 123)`;
    resJogoWin.style.color = "rgb(123, 255, 123)";
    loadingBar1.style.backgroundColor = "rgb(0, 117, 0)";
    loadingBar2.style.backgroundColor = "rgb(0, 255, 0)";
    resJogoWin.style.display = "flex";
    virarMinas();
    atDinheiro()
    notificacao()
    historico()
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
    botaoParar.innerHTML = 'Retirar'
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
function atDinheiro() {
    dinheiroVar = dinheiroSessao
    emailVar = sessionStorage.EMAIL_USUARIO
  
    fetch("/usuarios/upDinheiro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          emailServer: emailVar,
          dinheiroStatusServer: dinheiroVar,
        }),
      })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
          setTimeout(() => {
            console.log("Dinheiro Atualizado");
          }, 2000);
        } else {
          throw "Houve um erro ao tentar atualizar o dinheiro";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
    return false;
  }
  function notificacao() {
    tempoNot = 200;
    intervalo = setInterval(function closeNot() {
      tempoNot--;
      loadingBar2.style.width = `${tempoNot}px`;
      if (tempoNot == 0) {
        clearInterval(intervalo);
        resJogoWin.style.display = "none";
      }
    }, 15);
  }
  function metricas() {
    v++
    if (v % 2 == 0) {
        metricasS.style.display = 'block'
    } else {
        metricasS.style.display = 'none'
    }
  }
  function historico() {

        varRegistro = aposta.toFixed(2)
        varJogo = 'Mines'
        idUsuario = sessionStorage.ID_USUARIO
        varMulti = multiplicador.toFixed(2)
    fetch("/usuarios/historico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          regServer: varRegistro,
          jogoServer: varJogo,
          idServer: idUsuario,
          multiServer: varMulti
        }),
      })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
          setTimeout(() => {
            console.log("Historico Atualizado");
          }, 2000);
        } else {
          throw "Houve um erro ao tentar atualizar o historico";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  
    return false;
  }