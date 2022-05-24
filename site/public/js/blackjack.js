totalJ = 0;
totalO = 0;
limite = 21;
carta = 0;
cartaA = false;
cartaAO = false;
win = false;
empate = false;
gameStatus = true;
endGame = false;
cartas = [
  "../imagens/cartas/asEsp.png",
  "../imagens/cartas/doisEsp.png",
  "../imagens/cartas/tresEsp.png",
  "../imagens/cartas/quatroEsp.png",
  "../imagens/cartas/cincoEsp.png",
  "../imagens/cartas/seisEsp.png",
  "../imagens/cartas/seteEsp.png",
  "../imagens/cartas/oitoEsp.png",
  "../imagens/cartas/noveEsp.png",
  "../imagens/cartas/dezEsp.png",
  "../imagens/cartas/damaEsp.png",
  "../imagens/cartas/valeteEsp.png",
  "../imagens/cartas/reiEsp.png",
];
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
    money.innerHTML = `R$${dinheiroSessao}`
    nomeUsuario.style.display = 'block'
    logo1.style.display = 'block'
    }
}
function apostar() {
  aposta = Number(inputAposta.value);
  dinheiroSessao -= aposta
  money.innerHTML = `R$${dinheiroSessao}`
  jogador.innerHTML = "";
  oponente.innerHTML = "";
  totalJ = 0;
  totalO = 0;
  carta = 0;
  cartaA = false;
  cartaAO = false;
  win = false;
  empate = false;
  gameStatus = true;
  endGame = false;
  if (aposta < 1) {
    return false;
  } else if (aposta > dinheiroSessao) {
    return false;
  } else if (sessionStorage.NOME_USUARIO == undefined) {
    return false;
  } else {
    document.getElementById("botaoPedir").addEventListener("click", pegarCarta);
    document.getElementById("botaoParar").addEventListener("click", pararJogo);
    pegarCarta();
    pegarCartaOponente();
    botaoPedir.style.color = "white";
    botaoPedir.style.cursor = "pointer";
    botaoParar.style.color = "white";
    botaoParar.style.cursor = "pointer";
    apostaContainer.style.marginTop = "5px";
  }
}
function dobrar() {
  inputAposta.value *= 2;
}
function pegarCarta() {
  carta = Math.floor(Math.random() * 13);
  if (carta >= 10) {
    totalJ += 10;
  } else {
    totalJ += carta + 1;
  }
  jogador.innerHTML += `<img class="cartaImagem" src="${cartas[carta]}">`;
  if (carta == 0 && totalJ < 11) {
    cartaA = true;
  }
  somarPontos();
  if (totalJ > limite) {
    botaoPedir.style.cursor = "default";
    botaoPedir.style.color = "rgb(136, 136, 136)";
    botaoParar.style.cursor = "default";
    botaoParar.style.color = "rgb(136, 136, 136)";
    document
      .getElementById("botaoPedir")
      .removeEventListener("click", pegarCarta);
    document
      .getElementById("botaoParar")
      .removeEventListener("click", pararJogo);
    gameNot();
  }
  if (totalJ == limite) {
    botaoPedir.style.cursor = "default";
    botaoPedir.style.color = "rgb(136, 136, 136)";
    botaoParar.style.cursor = "default";
    botaoParar.style.color = "rgb(136, 136, 136)";
    document
      .getElementById("botaoPedir")
      .removeEventListener("click", pegarCarta);
    document
      .getElementById("botaoParar")
      .removeEventListener("click", pararJogo);
    pararJogo();
  }
}
function pegarCartaOponente() {
  cartaO = Math.floor(Math.random() * 13);
  if (cartaO >= 10) {
    totalO += 10;
  } else {
    totalO += cartaO + 1;
  }
  oponente.innerHTML += `<img class="cartaImagem" src="${cartas[cartaO]}">`;
  if (cartaO == 0 && totalO < 11) {
    cartaAO = true;
  } else {
    cartaAO = false;
  }
  somarPontos();
  if (totalO > limite) {
    win = true;
    gameNot();
    return false;
  }
  if (totalO == limite && totalO == totalJ) {
    empate = true;
    gameNot();
    return false;
  }
  if (totalO > totalJ && totalO <= 21 && endGame) {
    win = false;
    gameNot();
    return false;
  }
  if (totalO <= totalJ && endGame) {
    pegarCartaOponenteFinal();
  }
}
function somarPontos() {
  if (cartaA && gameStatus == true && totalJ <= 11) {
    totalJogador.innerHTML = `${totalJ} ou ${totalJ + 10}`;
  } else {
    totalJogador.innerHTML = totalJ;
  }
  if (cartaAO && gameStatus == true && totalO <= 11) {
    totalOponente.innerHTML = `${totalO} ou ${totalO + 10}`;
  } else {
    totalOponente.innerHTML = totalO;
  }
}
function pararJogo() {
  botaoPedir.style.cursor = "default";
  botaoPedir.style.color = "rgb(136, 136, 136)";
  botaoParar.style.cursor = "default";
  botaoParar.style.color = "rgb(136, 136, 136)";
  document
    .getElementById("botaoPedir")
    .removeEventListener("click", pegarCarta);
  document.getElementById("botaoParar").removeEventListener("click", pararJogo);
  endGame = true;
  gameStatus = false;
  if (totalJ < totalO) {
    gameNot();
  } else {
    if (cartaA) {
      totalJ += 10;
      totalJogador.innerHTML = totalJ;
    } else if (cartaAO) {
      totalO += 10;
      totalOponente.innerHTML = totalO;
    }
    pegarCartaOponenteFinal();
  }
}
function pegarCartaOponenteFinal() {
  setTimeout(pegarCartaOponente, 1000);
}
function gameNot() {
  if (win) {
    ganho = aposta * 2;
    dinheiroSessao += Number(ganho)
    money.innerHTML = `R$${dinheiroSessao}`
    dinheiroGanho.innerHTML = `R$${ganho}<br>x2<br>BlackJack`;
    resJogoWin.style.borderTop = `2px solid rgb(123, 255, 123)`;
    resJogoWin.style.borderLeft = `2px solid rgb(123, 255, 123)`;
    resJogoWin.style.color = "rgb(123, 255, 123)";
    loadingBar1.style.backgroundColor = "rgb(0, 117, 0)";
    loadingBar2.style.backgroundColor = "rgb(0, 255, 0)";
    resJogoWin.style.display = "flex";
    notificacao();
    atDinheiro()
    return false;
  } else if (empate == true) {
    dinheiroGanho.innerHTML = `R$0<br>BlackJack`;
    resJogoWin.style.borderTop = `2px solid rgb(123, 123, 123)`;
    resJogoWin.style.borderLeft = ` 2px solid rgb(123, 123, 123)`;
    resJogoWin.style.color = "rgb(123, 123, 123)";
    loadingBar1.style.backgroundColor = "rgb(117, 117, 177)";
    loadingBar2.style.backgroundColor = "rgb(255, 255, 255)";
    resJogoWin.style.display = "flex";
    notificacao();
    return false;
  } else if (win == false) {
    dinheiroGanho.innerHTML = `-R$${aposta}<br>BlackJack`;
    resJogoWin.style.borderTop = `2px solid rgb(255, 123, 123)`;
    resJogoWin.style.borderLeft = ` 2px solid rgb(255, 123, 123)`;
    resJogoWin.style.color = "rgb(255, 123, 123)";
    loadingBar1.style.backgroundColor = "rgb(117, 0, 0)";
    loadingBar2.style.backgroundColor = "rgb(255, 0, 0)";
    resJogoWin.style.display = "flex";
    notificacao();
    atDinheiro()
    return false;
  }
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
function atDinheiro() {
    if (win) {
        dinheiroVar = dinheiroSessao
    } else if (!win) {
        dinheiroVar = dinheiroSessao
    }
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
