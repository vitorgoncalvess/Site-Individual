totalJ = 0
totalO = 0
limite = 21
carta = 0
cartaA = false
cartaAO = false
endGame = false
cartas = ["../imagens/cartas/asEsp.png", "../imagens/cartas/doisEsp.png",
 "../imagens/cartas/tresEsp.png", "../imagens/cartas/quatroEsp.png",
 "../imagens/cartas/cincoEsp.png", "../imagens/cartas/seisEsp.png",
 "../imagens/cartas/seteEsp.png", "../imagens/cartas/oitoEsp.png",
 "../imagens/cartas/noveEsp.png", "../imagens/cartas/dezEsp.png", 
 "../imagens/cartas/damaEsp.png", "../imagens/cartas/valeteEsp.png",
 "../imagens/cartas/reiEsp.png" ]
function apostar() {
    aposta = inputAposta.value
    jogador.innerHTML = ''
    oponente.innerHTML = ''
    totalJ = 0
    totalO = 0
    carta = 0
    cartaA = false
    cartaAO = false
    endGame = false
    if (aposta < 1) {
        return false
    }
    if (aposta > sessionStorage.DINHEIRO_USUARIO) {
        return false
    } else {
       document.getElementById('botaoPedir').addEventListener('click', pegarCarta)
       document.getElementById('botaoParar').addEventListener('click', pararJogo)
       pegarCarta()
       pegarCartaOponente()
       botaoPedir.style.color = "white"
       botaoPedir.style.cursor = 'pointer'
       botaoParar.style.color = 'white'
       botaoParar.style.cursor = 'pointer'
       apostaContainer.style.marginTop = '5px'
    }
}
function dobrar() {
    inputAposta.value *= 2
}
function pegarCarta() {
    carta = Math.floor(Math.random() * 13);
    if(carta >= 10) {
        totalJ += 10
    } else {
        totalJ += carta + 1
    }
    jogador.innerHTML += `<img class="cartaImagem" src="${cartas[carta]}">`
    if (carta == 0 && totalJ < 11) {
        cartaA = true
    } else {
        cartaA = false
    }
    somarPontos()
    if (totalJ > limite) {
        botaoPedir.style.cursor = 'default'
        botaoPedir.style.color = 'rgb(136, 136, 136)'
        botaoParar.style.cursor = 'default'
        botaoParar.style.color = 'rgb(136, 136, 136)'
        document.getElementById('botaoPedir').removeEventListener('click', pegarCarta)
        document.getElementById('botaoParar').removeEventListener('click', pararJogo)
        alert('perdeu')
    }
    if (totalJ == limite) {
        botaoPedir.style.cursor = 'default'
        botaoPedir.style.color = 'rgb(136, 136, 136)'
        botaoParar.style.cursor = 'default'
        botaoParar.style.color = 'rgb(136, 136, 136)'
        document.getElementById('botaoPedir').removeEventListener('click', pegarCarta)
        document.getElementById('botaoParar').removeEventListener('click', pararJogo)
        pararJogo()
    }
}
function pegarCartaOponente() {
    cartaO = Math.floor(Math.random() * 13);
    if (cartaO >= 10) {
        totalO += 10
    } else {
        totalO += cartaO + 1
    }
    oponente.innerHTML += `<img class="cartaImagem" src="${cartas[cartaO]}">`
    if (cartaO == 0 && totalO < 11) {
        cartaAO = true
    } else {
        cartaAO = false
    }
    if(totalO < totalJ && endGame) {
        pegarCartaOponenteFinal()
    }
    somarPontos()
}
function somarPontos() {
    if (cartaA) {
        totalJogador.innerHTML = `${totalJ} ou ${totalJ + 10}`
    } else {
        totalJogador.innerHTML = totalJ
    }
    if (cartaAO) {
        totalOponente.innerHTML = `${totalO} ou ${totalO + 10}`
    } else {
        totalOponente.innerHTML = totalO
    }
}
function pararJogo() {
    if (totalJ < totalO) {
        alert('perdeu')
    } else {
    if (cartaA) {
        totalJ += 10
    } else if (cartaAO) {
        totalO += 10
    }
    pegarCartaOponenteFinal()
    endGame = true
    } 
}
function pegarCartaOponenteFinal() {
    if (totalO > limite) {
        alert('ganhou')
        return false
    }
    if (totalO == limite && totalO == totalJ) {
        alert('empatou')
        return false
    }
    if (totalO > totalJ && endGame && totalO <= 21) {
        alert('perdeu')
        return false
    }
    setTimeout(pegarCartaOponente, 1000)
}